// Run with playwright-core installed outside the application checkout.
const { chromium } = require('playwright-core');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:8000';

(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
    headless: true, args: ['--no-sandbox']
  });
  try {
    const page = await browser.newPage();
    const errors = [];
    let rankingPosts = 0;
    let analyticsLoads = 0;
    const collected = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('dialog', dialog => dialog.accept());
    // Keep production analytics and ranking untouched. Test the actual event queue.
    await page.route('https://**/*', async route => {
      const request = route.request();
      if (request.url().startsWith('https://www.googletagmanager.com/gtag/js?')) {
        analyticsLoads++;
        return route.fulfill({ contentType: 'application/javascript',
          body: process.env.GA_TAG_PATH ? fs.readFileSync(process.env.GA_TAG_PATH, 'utf8') : '' });
      }
      if (/^https:\/\/([\w-]+\.)?google-analytics\.com\/g\/collect/.test(request.url())) {
        const query = new URL(request.url()).searchParams;
        for (const line of (request.postData() || '').split('\n')) {
          const params = new URLSearchParams(query);
          for (const [key, value] of new URLSearchParams(line)) params.set(key, value);
          collected.push(Object.fromEntries(params));
        }
        return route.fulfill({ status: 204 });
      }
      if (request.url().includes('script.google.com') && request.method() === 'POST') {
        rankingPosts++;
        assert.equal((await events('quiz_complete')).length, 1,
          'completion must be queued before the ranking request');
      }
      if (request.url().includes('canvas-confetti')) {
        return route.fulfill({ contentType: 'application/javascript', body: 'window.confetti = function () {};' });
      }
      return route.abort();
    });
    const events = name => page.evaluate(name => window.dataLayer
      .filter(entry => entry[0] === 'event' && entry[1] === name)
      .map(entry => entry[2]), name);
    for (const path of ['/', '/ranking.html', '/quiz.html']) {
      const response = await page.goto(base + path, { waitUntil: 'networkidle' });
      assert.equal(response.status(), 200);
      assert.equal(await page.evaluate(() => window.dataLayer.filter(e => e[0] === 'config' && e[1] === 'G-LMCF5N3D6X').length), 1);
    }
    // Tailwind is intentionally blocked: reproduce its visibility utility locally.
    await page.addStyleTag({ content: '.hidden { display: none !important; }' });
    assert.equal(analyticsLoads, 3, 'all three pages load GA4');
    const firstStart = (await events('quiz_start'))[0];
    assert.equal(await page.evaluate(() => window.dataLayer.find(e => e[0] === 'config')[2].debug_mode), undefined);
    const originalStartTime = await page.evaluate(() => JSON.parse(localStorage.getItem('quiz_progress')).testStartTime);
    assert.equal((await events('quiz_start')).length, 1);
    assert.equal(firstStart.question_count, 20);
    assert.equal((await events('quiz_complete')).length, 0);
    await page.locator('#next-btn').click();
    assert.match(await page.locator('#progress-text').textContent(), /Pergunta 1 de 20/);
    assert.equal((await events('quiz_complete')).length, 0);

    async function answer(number) {
      await page.locator('#options-form input').first().check();
      await page.locator('#next-btn').click();
      await page.waitForFunction(number => {
        const modal = document.getElementById('continue-btn');
        return modal || (number === 20
          ? !document.getElementById('result-section').classList.contains('hidden')
          : document.getElementById('progress-text').textContent.includes(`Pergunta ${number + 1} de 20`));
      }, number);
      if (await page.locator('#continue-btn').count()) await page.locator('#continue-btn').click();
      if (number < 20) await page.waitForFunction(number =>
        document.getElementById('progress-text').textContent.includes(`Pergunta ${number + 1} de 20`), number);
      else await page.waitForFunction(() => !document.getElementById('result-section').classList.contains('hidden'));
    }
    await answer(1);
    await page.goto(base + '/quiz.html?debug_analytics=1', { waitUntil: 'networkidle' });
    await page.addStyleTag({ content: '.hidden { display: none !important; }' });
    assert.match(await page.locator('#progress-text').textContent(), /Pergunta 2 de 20/);
    assert.equal((await events('quiz_start')).length, 0, 'resuming must not duplicate start');
    assert.equal(await page.evaluate(() => window.dataLayer.find(e => e[0] === 'config')[2].debug_mode), true);
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('quiz_progress')).quizAttemptId), firstStart.quiz_attempt_id);
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('quiz_progress')).testStartTime), originalStartTime);
    for (let number = 2; number <= 20; number++) await answer(number);
    const completions = await events('quiz_complete');
    assert.equal(completions.length, 1);
    const completion = completions[0];
    assert.equal(completion.quiz_attempt_id, firstStart.quiz_attempt_id);
    assert.equal(completion.question_count, 20);
    assert.ok(completion.score >= 0 && completion.score <= 1000);
    assert.ok(completion.correct_answers >= 0 && completion.correct_answers <= 20);
    assert.equal(completion.score, await page.evaluate(() => score));
    assert.equal(completion.correct_answers, await page.evaluate(() => questionsAsked.filter((q, i) => answers[i] === q.answerIndex).length));
    assert.equal(completion.level, await page.evaluate(() => lastLevelName));
    assert.ok(completion.duration_seconds >= 0);
    assert.equal(completion.transport_type, 'beacon');
    assert.equal(await page.evaluate(() => localStorage.getItem('quiz_progress')), null);
    await page.evaluate(() => trackQuizComplete(lastLevelName));
    assert.equal((await events('quiz_complete')).length, 1, 'completion is idempotent');
    await page.waitForTimeout(100);
    assert.equal(rankingPosts, 1, 'ranking write intercepted, never sent to production');
    await page.locator('#retry-btn').click();
    const retryStart = (await events('quiz_start'))[0];
    assert.ok(retryStart);
    assert.notEqual(retryStart.quiz_attempt_id, firstStart.quiz_attempt_id);
    assert.match(await page.locator('#progress-text').textContent(), /Pergunta 1 de 20/);
    assert.equal((await events('quiz_complete')).length, 1);
    page.removeAllListeners('dialog');
    page.on('dialog', dialog => dialog.dismiss());
    await page.reload({ waitUntil: 'networkidle' });
    const discardedStart = (await events('quiz_start'))[0];
    assert.notEqual(discardedStart.quiz_attempt_id, retryStart.quiz_attempt_id,
      'discarding progress starts a new attempt');
    assert.equal((await events('quiz_start')).length, 1);
    assert.equal((await events('quiz_complete')).length, 0, 'abandonment is not completion');
    assert.deepEqual(errors, [], 'quiz must run without JavaScript exceptions');
    if (process.env.GA_TAG_PATH) {
      await page.waitForTimeout(2000);
      assert.ok(collected.some(e => e.en === 'quiz_start' && e.tid === 'G-LMCF5N3D6X'),
        'real GA4 library must generate a quiz_start collect request');
      const end = collected.find(e => e.en === 'quiz_complete' && e.tid === 'G-LMCF5N3D6X');
      assert.ok(end, 'real GA4 library must generate a quiz_complete collect request');
      assert.equal(end['ep.quiz_attempt_id'], firstStart.quiz_attempt_id);
      assert.equal(Number(end['epn.score']), completion.score);
      console.log('PASS: official GA4 library generated g/collect requests with correct event names, measurement ID, attempt ID and score; intercepted locally.');
    }
    console.log('PASS: GA4 on 3 pages; start, validation, 20 answers, completion before ranking, resume without duplicates, retry; no production writes.');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
