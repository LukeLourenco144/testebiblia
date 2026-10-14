# Teste Bíblia
### A self-service Bible knowledge quiz — product case study

[Try the application](https://www.testebiblia.com.br/) · [About Lucas Lourenço](PORTFOLIO.md) · [Analytics implementation](ANALYTICS.md)

A Portuguese-language web product for people who want to assess their Bible knowledge through a short, interactive experience. Users answer 20 questions, receive a score and level, explore study guidance, and can share a challenge with friends.

## Problem and audience

The product addresses a simple need: help individuals and church communities assess their knowledge and identify topics to study, through an accessible browser experience.

The product challenge is to make the journey easy to start, complete and understand, while giving users a reason to share or try again.

## My role

I created this personal project and used AI-assisted development to turn the concept into a working web application. This repository shows the implementation and subsequent iterations on the user journey and measurement.

My professional background is in product management and product operations. This is a personal product-building project, separate from my work at Nubank.

## Explore the experience

| Stage | Experience |
| --- | --- |
| Discover | Landing page introduces the quiz and offers a direct start action. |
| Start | Browser-based quiz with no account registration required. |
| Complete | 20 questions, progress indicators, a timer and saved progress that can be resumed. |
| Get value | Score, knowledge level, diagnostic feedback and study guidance. |
| Continue | Retry, inspect details, visit the ranking or share a challenge through WhatsApp. |

## Product decisions visible in the implementation

### 1. Keep the path to first value short
The quiz can be started without creating an account. This reduces the steps between discovering the product and answering the first question.

**Tradeoff:** anonymous access makes cross-device identity and retention measurement harder.

### 2. Support interrupted sessions
Progress is stored locally and users can resume an attempt after reloading.

**Tradeoff:** local browser storage does not provide cross-device continuity.

### 3. Give the result page a clear hierarchy
The result experience emphasizes the score and sharing action, while detailed diagnostic and study content is available in a modal. Ranking submission is attempted automatically rather than requiring a separate form.

**Tradeoff:** fewer visible steps do not guarantee successful backend persistence. The current no-cors submission cannot verify that the ranking backend saved a result.

### 4. Instrument actual behavior
The project tracks quiz starts and completions rather than relying only on a landing-page button click. This also covers users who enter the quiz directly.

**Tradeoff:** client-side events can be blocked, and event collection must be verified in the analytics property.

## Measurement and learning

The code includes Google Analytics 4 instrumentation:

- **quiz_start:** emitted when the first question of a new attempt is presented.
- **quiz_complete:** emitted after the final response and score calculation.
- Attempt identifiers connect the events; completion includes score, correct answers, level and elapsed duration.
- Resuming an attempt avoids emitting a second start. A retry creates a new attempt.
- These custom events exclude names, email addresses and church-group codes.

The repository includes [browser-based analytics tests](tests/quiz-analytics.cjs) and [validation instructions](ANALYTICS.md). Those checks validate event behavior; they do not prove ingestion in GA4.

**Evidence boundary:** this case describes implemented capabilities, not a measured conversion lift. Earlier iteration documents contain estimates and projected rates; they should not be read as validated business results.

## What I would test next

These are proposed experiments, not completed A/B tests.

| Hypothesis | Experiment | Measure |
| --- | --- | --- |
| Clearer expectations help visitors start. | Compare landing-page descriptions of quiz length and value. | Visitor-to-start conversion. |
| The timed experience affects completion. | Compare timed and untimed variants. | Attempt completion and feedback. |
| Sharing copy influences referral behavior. | Compare “share your result” and “challenge a friend.” | Share clicks and attributed referral starts. |

A first measurement priority is to validate event collection, establish a baseline and add instrumentation for intermediate drop-off and sharing before assessing experiment outcomes.

## Technical overview

- HTML, CSS/Tailwind and JavaScript.
- Browser localStorage for progress and preferences.
- Google Analytics 4 for custom events.
- Google Apps Script endpoint integration for ranking submission.
- Static web pages with a custom domain.

The quiz uses predefined questions and scoring logic. AI-assisted development should not be confused with a runtime generative-AI quiz feature.

## Run locally

Serve the repository with a local static server:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. External libraries, analytics and ranking integrations require network access. Completing a normal attempt may call external production services; see [ANALYTICS.md](ANALYTICS.md) for the intercepted test workflow.

## Author

**Lucas Lourenço** — Product Management & Product Operations  
[LinkedIn](https://www.linkedin.com/in/lucaslourenco) · [Portfolio overview](PORTFOLIO.md)
