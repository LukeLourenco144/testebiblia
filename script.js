// Pool de perguntas (agora com propriedade "difficulty")
const allQuestions = [
  {
    question: "Quem construiu a arca que salvou sua família do dilúvio?",
    options: ["Moisés", "Noé", "Abraão", "Davi"],
    answerIndex: 1,
    category: "Gênesis / Início da Bíblia",
    difficulty: "iniciante"
  },
  {
    question: "Em qual jardim Adão e Eva viviam antes do pecado?",
    options: ["Jardim de Getsêmani", "Jardim de Éden", "Jardim de Nazaré", "Jardim do Rei"],
    answerIndex: 1,
    category: "Gênesis / Início da Bíblia",
    difficulty: "iniciante"
  },
  {
    question: "Deus libertou o povo de Israel do Egito através de qual líder?",
    options: ["Josué", "Samuel", "Moisés", "Elias"],
    answerIndex: 2,
    category: "Pentateuco / Êxodo",
    difficulty: "iniciante"
  },
  {
    question: "Qual profeta enfrentou os profetas de Baal no Monte Carmelo?",
    options: ["Elias", "Jeremias", "Isaías", "Ezequiel"],
    answerIndex: 0,
    category: "Profetas",
    difficulty: "intermediário"
  },
  {
    question: "Qual rei de Israel escreveu muitos salmos e era músico?",
    options: ["Saul", "Salomão", "Davi", "Ezequias"],
    answerIndex: 2,
    category: "História de Israel",
    difficulty: "iniciante"
  },
  {
    question: "Qual livro começa com a frase: 'No princípio era o Verbo'?",
    options: ["Gênesis", "João", "Lucas", "Atos"],
    answerIndex: 1,
    category: "Evangelhos",
    difficulty: "iniciante"
  },
  {
    question: "Quantos evangelhos existem no Novo Testamento?",
    options: ["3", "4", "5", "7"],
    answerIndex: 1,
    category: "Evangelhos",
    difficulty: "iniciante"
  },
  {
    question: "Quem negou Jesus três vezes antes do galo cantar?",
    options: ["João", "Pedro", "Tiago", "Tomé"],
    answerIndex: 1,
    category: "Evangelhos",
    difficulty: "iniciante"
  },
  {
    question: "Quem foi usado por Deus para levar o evangelho aos gentios e escreveu muitas cartas?",
    options: ["Pedro", "Tiago", "Paulo", "Barnabé"],
    answerIndex: 2,
    category: "Cartas (Epístolas)",
    difficulty: "iniciante"
  },
  {
    question: "Qual é o primeiro livro da Bíblia?",
    options: ["Êxodo", "Salmos", "Mateus", "Gênesis"],
    answerIndex: 3,
    category: "Gênesis / Início da Bíblia",
    difficulty: "iniciante"
  },
  {
    question: "Qual é o último livro da Bíblia?",
    options: ["Judas", "Apocalipse", "Hebreus", "Romanos"],
    answerIndex: 1,
    category: "Apocalipse / Escatologia",
    difficulty: "iniciante"
  },
  {
    question: "Jesus multiplicou pães e peixes para alimentar aproximadamente quantas pessoas (homens) em um dos milagres?",
    options: ["500", "5.000", "500.000", "50"],
    answerIndex: 1,
    category: "Evangelhos",
    difficulty: "iniciante"
  },
  {
    question: "Quem foi lançado na cova dos leões por permanecer fiel em oração?",
    options: ["José", "Daniel", "Neemias", "Ester"],
    answerIndex: 1,
    category: "Profetas / Exílio",
    difficulty: "intermediário"
  },
  {
    question: "Qual personagem ficou governador do Egito após interpretar sonhos?",
    options: ["José", "Moisés", "Gideão", "Elias"],
    answerIndex: 0,
    category: "Gênesis / Patriarcas",
    difficulty: "iniciante"
  },
  {
    question: "Qual mulher da Bíblia é conhecida por ter sido rainha e usada para livrar o povo judeu?",
    options: ["Ester", "Rute", "Débora", "Maria"],
    answerIndex: 0,
    category: "História de Israel",
    difficulty: "iniciante"
  },
  {
    question: "Qual é o famoso Salmo que começa com: 'O Senhor é o meu pastor'?",
    options: ["Salmo 1", "Salmo 23", "Salmo 91", "Salmo 119"],
    answerIndex: 1,
    category: "Salmos",
    difficulty: "iniciante"
  },
  {
    question: "Quem escreveu a maioria dos Salmos?",
    options: ["Davi", "Salomão", "Asafe", "Moisés"],
    answerIndex: 0,
    category: "Salmos",
    difficulty: "iniciante"
  },
  {
    question: "Qual apóstolo caminhou sobre as águas em direção a Jesus?",
    options: ["André", "João", "Pedro", "Tiago"],
    answerIndex: 2,
    category: "Evangelhos",
    difficulty: "iniciante"
  },
  {
    question: "Qual é o primeiro mandamento segundo Êxodo 20?",
    options: [
      "Não matarás",
      "Não terás outros deuses diante de mim",
      "Honra teu pai e tua mãe",
      "Guardarás o sábado"
    ],
    answerIndex: 1,
    category: "Lei / Mandamentos",
    difficulty: "intermediário"
  },
  {
    question: "Qual livro fala muito sobre a igreja primitiva e as viagens missionárias?",
    options: ["Atos", "Romanos", "Hebreus", "Tiago"],
    answerIndex: 0,
    category: "História da Igreja (Atos)",
    difficulty: "iniciante"
  },

  // +20 perguntas novas (exemplo)
  {
    question: "Quem era irmão de Moisés que falava por ele?",
    options: ["Josué", "Calebe", "Arão", "Efraim"],
    answerIndex: 2,
    category: "Pentateuco / Êxodo",
    difficulty: "iniciante"
  },
  {
    question: "Onde nasceu Jesus?",
    options: ["Nazaré", "Belém", "Jerusalém", "Betsaida"],
    answerIndex: 1,
    category: "Evangelhos",
    difficulty: "iniciante"
  },
  {
    question: "Quem traiu Jesus por trinta moedas?",
    options: ["Pedro", "Judas Iscariotes", "Tomé", "Jairo"],
    answerIndex: 1,
    category: "Evangelhos",
    difficulty: "iniciante"
  },
  {
    question: "Por quantos dias Jesus jejuou no deserto?",
    options: ["7", "14", "40", "20"],
    answerIndex: 2,
    category: "Evangelhos",
    difficulty: "intermediário"
  },
  {
    question: "Qual rei pediu sabedoria a Deus e é famoso pelos provérbios?",
    options: ["Davi", "Salomão", "Ezequias", "Josias"],
    answerIndex: 1,
    category: "História de Israel",
    difficulty: "iniciante"
  },
  {
    question: "Em que língua foi escrito a maior parte do Antigo Testamento?",
    options: ["Grego", "Hebraico", "Latim", "Aramaico"],
    answerIndex: 1,
    category: "Antigo Testamento",
    difficulty: "intermediário"
  },
  {
    question: "Qual profeta teve a visão do vale de ossos secos?",
    options: ["Isaías", "Jeremias", "Ezequiel", "Daniel"],
    answerIndex: 2,
    category: "Profetas",
    difficulty: "avançado"
  },
  {
    question: "Qual evangelho começa com a genealogia de Jesus?",
    options: ["Marcos", "Lucas", "Mateus", "João"],
    answerIndex: 2,
    category: "Evangelhos",
    difficulty: "intermediário"
  },
  {
    question: "Quantos capítulos tem o livro de Gênesis?",
    options: ["40", "50", "66", "31"],
    answerIndex: 1,
    category: "Gênesis / Início da Bíblia",
    difficulty: "avançado"
  },
  {
    question: "Quem é chamado de 'apóstolo dos gentios'?",
    options: ["Pedro", "Paulo", "Lucas", "Barnabé"],
    answerIndex: 1,
    category: "Cartas (Epístolas)",
    difficulty: "iniciante"
  },
  {
    question: "Onde Jesus transformou água em vinho no seu primeiro milagre registrado?",
    options: ["Canaã", "Caná", "Nazaré", "Cafarnaum"],
    answerIndex: 1,
    category: "Evangelhos",
    difficulty: "intermediário"
  },
  {
    question: "Quem sucedeu Moisés como líder de Israel?",
    options: ["Calebe", "Josué", "Elias", "Sansão"],
    answerIndex: 1,
    category: "História de Israel",
    difficulty: "intermediário"
  },
  {
    question: "Em qual evangelho aparece a declaração 'Eu sou o caminho, a verdade e a vida'?",
    options: ["Mateus", "Marcos", "Lucas", "João"],
    answerIndex: 3,
    category: "Evangelhos",
    difficulty: "intermediário"
  },
  {
    question: "Quantos livros tem o Novo Testamento?",
    options: ["24", "27", "39", "66"],
    answerIndex: 1,
    category: "Novo Testamento",
    difficulty: "intermediário"
  },
  {
    question: "Quem batizou Jesus?",
    options: ["Pedro", "João Batista", "Paulo", "Nicodemos"],
    answerIndex: 1,
    category: "Evangelhos",
    difficulty: "iniciante"
  },
  {
    question: "Qual discípulo era cobrador de impostos antes de seguir Jesus?",
    options: ["Mateus", "Pedro", "Tiago", "André"],
    answerIndex: 0,
    category: "Evangelhos",
    difficulty: "iniciante"
  },
  {
    question: "Quem escreveu o livro de Apocalipse?",
    options: ["Paulo", "Pedro", "João", "Tiago"],
    answerIndex: 2,
    category: "Apocalipse / Escatologia",
    difficulty: "intermediário"
  },
  {
    question: "Qual profeta foi engolido por um grande peixe e depois pregou em Nínive?",
    options: ["Jonas", "Amós", "Oséias", "Habacuque"],
    answerIndex: 0,
    category: "Profetas",
    difficulty: "iniciante"
  },
  {
    question: "Qual livro é conhecido por ser um manual de sabedoria e contém muitos provérbios?",
    options: ["Salmos", "Provérbios", "Isaías", "Eclesiastes"],
    answerIndex: 1,
    category: "Sabedoria / Literatura",
    difficulty: "iniciante"
  }
];

// Número de perguntas por teste
const QUESTIONS_PER_TEST = 20;

// utilitário: embaralhar array (Fisher-Yates)
function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// --- Adaptive selection state ---
// Dividir por dificuldade e embaralhar cada grupo
const difficultyLevels = ["iniciante", "intermediário", "avançado"];
let remainingByDifficulty = {};
let questionsAsked = []; // perguntas efetivamente mostradas em ordem
let answers = []; // índices de resposta do usuário (mesmo length que questionsAsked)
let currentIndex = 0;
let score = 0;
// começa em nível intermediário (índice 1)
let currentDifficultyIndex = 1;

function resetRemaining() {
  remainingByDifficulty = {
    iniciante: shuffle(allQuestions.filter(q => q.difficulty === "iniciante")),
    "intermediário": shuffle(allQuestions.filter(q => q.difficulty === "intermediário")),
    avançado: shuffle(allQuestions.filter(q => q.difficulty === "avançado"))
  };

  // fallback: se alguma categoria estiver vazia, preencha com perguntas de outras dificuldades
  // (não estritamente necessário se há perguntas suficientes)
  questionsAsked = [];
  answers = [];
  currentIndex = 0;
  score = 0;
  currentDifficultyIndex = 1;
}

// pega próxima pergunta com base no currentDifficultyIndex, buscando níveis próximos se necessário
function pickNextQuestion() {
  if (questionsAsked.length >= QUESTIONS_PER_TEST) return null;

  let q = null;
  const tryLevel = (idx) => {
    const lvl = difficultyLevels[idx];
    const arr = remainingByDifficulty[lvl];
    if (arr && arr.length) return arr.pop();
    return null;
  };

  // tenta no nível atual
  q = tryLevel(currentDifficultyIndex);

  // busca níveis próximos caso não tenha pergunta no nível atual
  if (!q) {
    const offsets = [1, -1, 2, -2]; // ordem: próximo mais difícil, mais fácil, extremos
    for (const off of offsets) {
      const idx = currentDifficultyIndex + off;
      if (idx >= 0 && idx < difficultyLevels.length) {
        q = tryLevel(idx);
        if (q) {
          currentDifficultyIndex = idx; // ajusta nível para o nível em que pegamos a pergunta
          break;
        }
      }
    }
  }

  // fallback: qualquer pergunta restante
  if (!q) {
    for (const lvl of difficultyLevels) {
      if (remainingByDifficulty[lvl] && remainingByDifficulty[lvl].length) {
        q = remainingByDifficulty[lvl].pop();
        currentDifficultyIndex = difficultyLevels.indexOf(lvl);
        break;
      }
    }
  }

  if (q) {
    questionsAsked.push(q);
    answers.push(null);
  }

  return q;
}

// ---------------------------
// Seleção de elementos
// ---------------------------
const questionText = document.getElementById("question-text");
const optionsForm = document.getElementById("options-form");
const errorMessage = document.getElementById("error-message");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const scorePreview = document.getElementById("score-preview");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");

const finalScoreEl = document.getElementById("final-score");
const finalPercentEl = document.getElementById("final-percent");
const finalLevelEl = document.getElementById("final-level");
const diagnosticTextEl = document.getElementById("diagnostic-text");
const studyTipsEl = document.getElementById("study-tips");
const retryBtn = document.getElementById("retry-btn");

// ---------------------------
// Renderização da pergunta
// ---------------------------
function renderQuestion() {
  const q = questionsAsked[currentIndex];
  if (!q) {
    questionText.textContent = "Carregando pergunta...";
    optionsForm.innerHTML = "";
    return;
  }

  questionText.textContent = q.question;

  // Atualiza progresso (sempre mostrando 20 como total previsto)
  progressText.textContent = `Pergunta ${currentIndex + 1} de ${QUESTIONS_PER_TEST}`;
  const percent = (currentIndex / QUESTIONS_PER_TEST) * 100;
  progressBar.style.width = `${percent}%`;

  prevBtn.disabled = currentIndex === 0;

  nextBtn.textContent =
    currentIndex === QUESTIONS_PER_TEST - 1 ? "Finalizar teste" : "Próxima pergunta";

  optionsForm.innerHTML = "";
  errorMessage.classList.add("hidden");

  q.options.forEach((opt, idx) => {
    const id = `option-${currentIndex}-${idx}`;

    const wrapper = document.createElement("label");
    wrapper.className =
      "flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-700 text-sm cursor-pointer hover:border-emerald-400 transition";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.value = idx;
    input.id = id;
    input.className = "accent-emerald-500";

    if (answers[currentIndex] === idx) {
      input.checked = true;
      wrapper.classList.add("border-emerald-500");
    }

    input.addEventListener("change", () => {
      answers[currentIndex] = idx;
      errorMessage.classList.add("hidden");
      // realça a opção selecionada
      Array.from(optionsForm.querySelectorAll("label")).forEach(l => l.classList.remove("border-emerald-500"));
      wrapper.classList.add("border-emerald-500");
      updateScorePreview();
    });

    const span = document.createElement("span");
    span.textContent = opt;

    wrapper.appendChild(input);
    wrapper.appendChild(span);
    optionsForm.appendChild(wrapper);
  });

  updateScorePreview();
}

function updateScorePreview() {
  let partialScore = 0;
  answers.forEach((ans, idx) => {
    if (ans === questionsAsked[idx].answerIndex) partialScore++;
  });
  scorePreview.textContent = `Pontuação: ${partialScore}`;
}

// ---------------------------
// Navegação
// ---------------------------
nextBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="option"]:checked');

  if (!selected && answers[currentIndex] === null) {
    errorMessage.classList.remove("hidden");
    return;
  }

  // verifica acerto da pergunta atual
  const currentQuestion = questionsAsked[currentIndex];
  const userAns = answers[currentIndex];
  const isCorrect = userAns === currentQuestion.answerIndex;

  // ajusta dificuldade adaptativa
  if (isCorrect) {
    currentDifficultyIndex = Math.min(currentDifficultyIndex + 1, difficultyLevels.length - 1);
  } else {
    currentDifficultyIndex = Math.max(currentDifficultyIndex - 1, 0);
  }

  // se for a última pergunta → finalizar
  if (currentIndex === QUESTIONS_PER_TEST - 1) {
    calculateResult();
    return;
  }

  // avança índice
  currentIndex++;

  // se ainda não geramos a próxima pergunta, gera agora com base na dificuldade adaptativa
  if (currentIndex >= questionsAsked.length) {
    pickNextQuestion();
  }

  renderQuestion();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
});

// ---------------------------
// Cálculo do resultado
// ---------------------------
function calculateResult() {
  score = 0;
  const categoryStats = {}; // { categoria: { total: X, erros: Y } }

  questionsAsked.forEach((q, idx) => {
    if (!categoryStats[q.category]) {
      categoryStats[q.category] = { total: 0, erros: 0 };
    }
    categoryStats[q.category].total++;

    if (answers[idx] === q.answerIndex) {
      score++;
    } else {
      categoryStats[q.category].erros++;
    }
  });

  const totalAsked = questionsAsked.length || 1;
  const percent = Math.round((score / totalAsked) * 100);

  // Nível
  let level = "";
  if (percent <= 40) level = "Iniciante na Bíblia";
  else if (percent <= 70) level = "Conhecedor em crescimento";
  else if (percent <= 90) level = "Bom conhecedor da Bíblia";
  else level = "Conhecimento profundo (continue firme!)";

  // Diagnóstico: pega categorias com mais erros
  const sortedCategories = Object.entries(categoryStats)
    .sort((a, b) => b[1].erros - a[1].erros);

  const pontosFracos = sortedCategories
    .filter(([_, stats]) => stats.erros > 0)
    .slice(0, 3)
    .map(([cat]) => cat);

  // Preenche tela
  finalScoreEl.textContent = `${score} / ${totalAsked}`;
  finalPercentEl.textContent = `${percent}%`;
  finalLevelEl.textContent = level;

  if (pontosFracos.length === 0) {
    diagnosticTextEl.textContent =
      "Parabéns! Você acertou praticamente tudo. Continue aprofundando sua leitura e meditação na Palavra.";
  } else {
    diagnosticTextEl.textContent =
      `Você foi bem, mas pode crescer especialmente em: ${pontosFracos.join(", ")}.`;
  }

  // Sugestões simples
  studyTipsEl.innerHTML = "";
  if (pontosFracos.includes("Gênesis / Início da Bíblia") || pontosFracos.includes("Gênesis / Patriarcas")) {
    addTip("Reserve alguns dias para ler Gênesis com calma, anotando a história da criação, de Noé e dos patriarcas (Abraão, Isaque, Jacó e José).");
  }
  if (pontosFracos.includes("Pentateuco / Êxodo") || pontosFracos.includes("Lei / Mandamentos")) {
    addTip("Leia Êxodo 1–20 para entender a libertação do Egito e os Dez Mandamentos, pedindo ao Espírito Santo entendimento.");
  }
  if (pontosFracos.includes("Profetas") || pontosFracos.includes("Profetas / Exílio")) {
    addTip("Separe um tempo para ler livros proféticos como Elias (em 1 Reis), Jeremias e Daniel, observando as mensagens de correção e esperança.");
  }
  if (pontosFracos.includes("História de Israel")) {
    addTip("Leia Josué, Juízes, Rute e 1–2 Samuel para ver a formação do povo, dos juízes e dos reis de Israel.");
  }
  if (pontosFracos.includes("Salmos")) {
    addTip("Escolha alguns Salmos (como 1, 23, 51, 91) e leia em oração, transformando os textos em conversa com Deus.");
  }
  if (pontosFracos.includes("Evangelhos")) {
    addTip("Leia pelo menos um evangelho inteiro (Mateus, Marcos, Lucas ou João), prestando atenção nas palavras e atitudes de Jesus.");
  }
  if (pontosFracos.includes("Cartas (Epístolas)")) {
    addTip("Leia Romanos, Efésios ou Filipenses para entender melhor doutrina, graça e vida cristã prática.");
  }
  if (pontosFracos.includes("História da Igreja (Atos)")) {
    addTip("Leia Atos dos Apóstolos para ver como a igreja começou, como o Espírito Santo agiu e como o evangelho se espalhou.");
  }
  if (pontosFracos.includes("Apocalipse / Escatologia")) {
    addTip("Leia Apocalipse com calma, de preferência junto com um bom comentário ou com seu pastor, buscando entender as visões e a esperança da volta de Cristo.");
  }

  if (studyTipsEl.children.length === 0) {
    addTip("Mesmo com bom resultado, mantenha o hábito diário de leitura bíblica e meditação. A Palavra é viva e sempre tem algo novo para te ensinar.");
  }

  // troca de seções
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  // mostra botão de compartilhamento (caso esteja oculto por algum motivo)
  const shareBtn = document.getElementById("share-btn");
  if (shareBtn) shareBtn.classList.remove("hidden");
}

function addTip(text) {
  const li = document.createElement("li");
  li.textContent = text;
  studyTipsEl.appendChild(li);
}

// ---------------------------
// Refazer teste
// ---------------------------
retryBtn.addEventListener("click", () => {
  resetRemaining();
  // gera primeira pergunta
  pickNextQuestion();
  currentIndex = 0;
  // reseta UI
  score = 0;
  quizSection.classList.remove("hidden");
  resultSection.classList.add("hidden");
  renderQuestion();
});

// ---------------------------
// Compartilhar / salvar imagem do resultado
// (mantido sem alterações)
// ---------------------------
function shareResultAsImage() {
  const node = document.getElementById("result-section");
  if (!node) return;

  html2canvas(node, { backgroundColor: "#0f1724", scale: 2 }).then((canvas) => {
    canvas.toBlob((blob) => {
      if (!blob) return;

      const fileName = `teste-biblia-${Date.now()}.png`;

      if (navigator.canShare && navigator.canShare({ files: [new File([blob], fileName, { type: blob.type })] })) {
        const file = new File([blob], fileName, { type: blob.type });
        navigator.share({
          files: [file],
          title: "Meu resultado - Teste da Bíblia",
          text: "Veja meu resultado no Teste da Bíblia!"
        }).catch(() => {
          downloadBlob(blob, fileName);
        });
      } else {
        downloadBlob(blob, fileName);
      }
    }, "image/png");
  }).catch(() => {
    alert("Não foi possível gerar a imagem. Tente atualizar a página e tentar novamente.");
  });
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  alert("Imagem gerada e salva. Compartilhe seu resultado!");
}

document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "share-btn") {
    shareResultAsImage();
  }
});

// ---------------------------
// Inicialização
// ---------------------------
resetRemaining();
pickNextQuestion(); // gera a primeira pergunta adaptativa
renderQuestion();