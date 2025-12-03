// ---------------------------
// Banco de perguntas
// ---------------------------
const questions = [
  {
    question: "Quem construiu a arca que salvou sua família do dilúvio?",
    options: ["Moisés", "Noé", "Abraão", "Davi"],
    answerIndex: 1,
    category: "Gênesis / Início da Bíblia"
  },
  {
    question: "Em qual jardim Adão e Eva viviam antes do pecado?",
    options: ["Jardim de Getsêmani", "Jardim de Éden", "Jardim de Nazaré", "Jardim do Rei"],
    answerIndex: 1,
    category: "Gênesis / Início da Bíblia"
  },
  {
    question: "Deus libertou o povo de Israel do Egito através de qual líder?",
    options: ["Josué", "Samuel", "Moisés", "Elias"],
    answerIndex: 2,
    category: "Pentateuco / Êxodo"
  },
  {
    question: "Qual profeta enfrentou os profetas de Baal no Monte Carmelo?",
    options: ["Elias", "Jeremias", "Isaías", "Ezequiel"],
    answerIndex: 0,
    category: "Profetas"
  },
  {
    question: "Qual rei de Israel escreveu muitos salmos e era músico?",
    options: ["Saul", "Salomão", "Davi", "Ezequias"],
    answerIndex: 2,
    category: "História de Israel"
  },
  {
    question: "Qual livro começa com a frase: 'No princípio era o Verbo'?",
    options: ["Gênesis", "João", "Lucas", "Atos"],
    answerIndex: 1,
    category: "Evangelhos"
  },
  {
    question: "Quantos evangelhos existem no Novo Testamento?",
    options: ["3", "4", "5", "7"],
    answerIndex: 1,
    category: "Evangelhos"
  },
  {
    question: "Quem negou Jesus três vezes antes do galo cantar?",
    options: ["João", "Pedro", "Tiago", "Tomé"],
    answerIndex: 1,
    category: "Evangelhos"
  },
  {
    question: "Quem foi usado por Deus para levar o evangelho aos gentios e escreveu muitas cartas?",
    options: ["Pedro", "Tiago", "Paulo", "Barnabé"],
    answerIndex: 2,
    category: "Cartas (Epístolas)"
  },
  {
    question: "Qual é o primeiro livro da Bíblia?",
    options: ["Êxodo", "Salmos", "Mateus", "Gênesis"],
    answerIndex: 3,
    category: "Gênesis / Início da Bíblia"
  },
  {
    question: "Qual é o último livro da Bíblia?",
    options: ["Judas", "Apocalipse", "Hebreus", "Romanos"],
    answerIndex: 1,
    category: "Apocalipse / Escatologia"
  },
  {
    question: "Jesus multiplicou pães e peixes para alimentar aproximadamente quantas pessoas (homens) em um dos milagres?",
    options: ["500", "5.000", "500.000", "50"],
    answerIndex: 1,
    category: "Evangelhos"
  },
  {
    question: "Quem foi lançado na cova dos leões por permanecer fiel em oração?",
    options: ["José", "Daniel", "Neemias", "Ester"],
    answerIndex: 1,
    category: "Profetas / Exílio"
  },
  {
    question: "Qual personagem ficou governador do Egito após interpretar sonhos?",
    options: ["José", "Moisés", "Gideão", "Elias"],
    answerIndex: 0,
    category: "Gênesis / Patriarcas"
  },
  {
    question: "Qual mulher da Bíblia é conhecida por ter sido rainha e usada para livrar o povo judeu?",
    options: ["Ester", "Rute", "Débora", "Maria"],
    answerIndex: 0,
    category: "História de Israel"
  },
  {
    question: "Qual é o famoso Salmo que começa com: 'O Senhor é o meu pastor'?",
    options: ["Salmo 1", "Salmo 23", "Salmo 91", "Salmo 119"],
    answerIndex: 1,
    category: "Salmos"
  },
  {
    question: "Quem escreveu a maioria dos Salmos?",
    options: ["Davi", "Salomão", "Asafe", "Moisés"],
    answerIndex: 0,
    category: "Salmos"
  },
  {
    question: "Qual apóstolo caminhou sobre as águas em direção a Jesus?",
    options: ["André", "João", "Pedro", "Tiago"],
    answerIndex: 2,
    category: "Evangelhos"
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
    category: "Lei / Mandamentos"
  },
  {
    question: "Qual livro fala muito sobre a igreja primitiva e as viagens missionárias?",
    options: ["Atos", "Romanos", "Hebreus", "Tiago"],
    answerIndex: 0,
    category: "História da Igreja (Atos)"
  }
];

let currentIndex = 0;
let answers = Array(questions.length).fill(null); // guarda índice da opção marcada
let score = 0;

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
  const q = questions[currentIndex];
  questionText.textContent = q.question;

  // Atualiza progresso
  progressText.textContent = `Pergunta ${currentIndex + 1} de ${questions.length}`;
  const percent = ((currentIndex) / questions.length) * 100;
  progressBar.style.width = `${percent}%`;

  // Atualiza estado do botão anterior
  prevBtn.disabled = currentIndex === 0;

  // Troca texto do botão próximo na última pergunta
  nextBtn.textContent =
    currentIndex === questions.length - 1 ? "Finalizar teste" : "Próxima pergunta";

  // Limpa opções
  optionsForm.innerHTML = "";
  errorMessage.classList.add("hidden");

  q.options.forEach((opt, idx) => {
    const id = `option-${idx}`;

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
    if (ans === questions[idx].answerIndex) partialScore++;
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

  // Última pergunta → finalizar
  if (currentIndex === questions.length - 1) {
    calculateResult();
    return;
  }

  currentIndex++;
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

  questions.forEach((q, idx) => {
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

  const percent = Math.round((score / questions.length) * 100);

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
  finalScoreEl.textContent = `${score} / ${questions.length}`;
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
  currentIndex = 0;
  answers = Array(questions.length).fill(null);
  score = 0;
  quizSection.classList.remove("hidden");
  resultSection.classList.add("hidden");
  renderQuestion();
});

// ---------------------------
// Inicialização
// ---------------------------
renderQuestion();
