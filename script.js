// Pool de perguntas (já com propriedade "difficulty")
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

  // + perguntas atuais adicionais
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
  },

  // -----------------------------
  // Novas perguntas (até chegar em 80)
  // Alternando entre intermediário e avançado
  // -----------------------------
  {
    question: "Qual patriarca teve o nome mudado para Israel?",
    options: ["Abraão", "Isaque", "Jacó", "José"],
    answerIndex: 2,
    category: "Gênesis / Patriarcas",
    difficulty: "intermediário"
  },
  {
    question: "Em qual livro encontramos detalhadamente a história de Davi e Golias?",
    options: ["1 Samuel", "2 Samuel", "1 Reis", "Juízes"],
    answerIndex: 0,
    category: "História de Israel",
    difficulty: "avançado"
  },
  {
    question: "Qual profeta anunciou que um menino nos seria dado e seria chamado 'Maravilhoso Conselheiro'?",
    options: ["Jeremias", "Isaías", "Miquéias", "Zacarias"],
    answerIndex: 1,
    category: "Profetas",
    difficulty: "intermediário"
  },
  {
    question: "Qual rei de Judá restaurou a lei após encontrar o Livro da Lei no templo?",
    options: ["Ezequias", "Josias", "Manassés", "Jeoaquim"],
    answerIndex: 1,
    category: "História de Israel",
    difficulty: "avançado"
  },
  {
    question: "Em Romanos, Paulo diz que 'o justo viverá pela fé'. De qual profeta do AT ele cita essa frase?",
    options: ["Habacuque", "Ageu", "Malaquias", "Amós"],
    answerIndex: 0,
    category: "Cartas (Epístolas)",
    difficulty: "intermediário"
  },
  {
    question: "Qual concílio registrado em Atos 15 tratou principalmente sobre qual tema?",
    options: [
      "Jejum obrigatório",
      "Circuncisão dos gentios",
      "Uso de dons espirituais",
      "Construção do templo"
    ],
    answerIndex: 1,
    category: "História da Igreja (Atos)",
    difficulty: "avançado"
  },
  {
    question: "Qual profeta confrontou o rei Davi sobre seu pecado com Bate-Seba?",
    options: ["Natã", "Gade", "Samuel", "Elias"],
    answerIndex: 0,
    category: "História de Israel",
    difficulty: "intermediário"
  },
  {
    question: "Qual carta do Novo Testamento enfatiza a fé demonstrada pelas obras, usando o exemplo de Abraão?",
    options: ["Romanos", "Hebreus", "Tiago", "Gálatas"],
    answerIndex: 2,
    category: "Cartas (Epístolas)",
    difficulty: "avançado"
  },
  {
    question: "Qual livro poético é uma coleção de cânticos de amor e pode ser lido como uma metáfora do amor de Deus?",
    options: ["Eclesiastes", "Cantares de Salomão", "Jó", "Lamentações"],
    answerIndex: 1,
    category: "Sabedoria / Literatura",
    difficulty: "intermediário"
  },
  {
    question: "Quem foi o profeta que declarou: 'Eu e a minha casa serviremos ao Senhor'?",
    options: ["Moisés", "Josué", "Samuel", "Davi"],
    answerIndex: 1,
    category: "História de Israel",
    difficulty: "avançado"
  },
  {
    question: "Em qual carta Paulo fala detalhadamente sobre os frutos do Espírito?",
    options: ["Gálatas", "Efésios", "Filipenses", "Colossenses"],
    answerIndex: 0,
    category: "Cartas (Epístolas)",
    difficulty: "intermediário"
  },
  {
    question: "Qual profeta viu o Senhor assentado sobre um alto e sublime trono e declarou 'ai de mim!'?",
    options: ["Ezequiel", "Isaías", "Jeremias", "Miquéias"],
    answerIndex: 1,
    category: "Profetas",
    difficulty: "avançado"
  },
  {
    question: "Qual livro encerra o Pentateuco narrando a morte de Moisés?",
    options: ["Levítico", "Números", "Deuteronômio", "Josué"],
    answerIndex: 2,
    category: "Pentateuco / Êxodo",
    difficulty: "intermediário"
  },
  {
    question: "Qual rei é conhecido por ter composto muitos provérbios e também pelo livro de Eclesiastes?",
    options: ["Davi", "Salomão", "Saul", "Roboão"],
    answerIndex: 1,
    category: "Sabedoria / Literatura",
    difficulty: "avançado"
  },
  {
    question: "Em qual livro encontramos o relato da visão das quatro bestas simbólicas e do 'Filho do Homem'?",
    options: ["Isaías", "Jeremias", "Daniel", "Ezequiel"],
    answerIndex: 2,
    category: "Profetas / Exílio",
    difficulty: "intermediário"
  },
  {
    question: "Quantos dias Noé ficou aproximadamente dentro da arca até que as águas baixassem?",
    options: ["40 dias", "150 dias", "1 ano", "7 dias"],
    answerIndex: 2,
    category: "Gênesis / Início da Bíblia",
    difficulty: "avançado"
  },
  {
    question: "Em qual carta Paulo fala sobre a armadura de Deus?",
    options: ["1 Coríntios", "Efésios", "Filipenses", "Colossenses"],
    answerIndex: 1,
    category: "Cartas (Epístolas)",
    difficulty: "intermediário"
  },
  {
    question: "Qual profeta casou-se com uma mulher adúltera como sinal profético do relacionamento de Deus com Israel?",
    options: ["Oséias", "Joel", "Amós", "Miqueias"],
    answerIndex: 0,
    category: "Profetas",
    difficulty: "avançado"
  },
  {
    question: "Quem é chamado de 'amigo de Deus' no Antigo Testamento?",
    options: ["Moisés", "Abraão", "Davi", "Jacó"],
    answerIndex: 1,
    category: "Gênesis / Patriarcas",
    difficulty: "intermediário"
  },
  {
    question: "Qual dos evangelhos foi escrito por um médico e enfatiza muitos detalhes históricos?",
    options: ["Mateus", "Marcos", "Lucas", "João"],
    answerIndex: 2,
    category: "Evangelhos",
    difficulty: "avançado"
  },
  {
    question: "Quem foi o primeiro mártir cristão mencionado em Atos?",
    options: ["Tiago", "Estevão", "Pedro", "João"],
    answerIndex: 1,
    category: "História da Igreja (Atos)",
    difficulty: "intermediário"
  },
  {
    question: "Qual profeta recebeu a ordem de profetizar para o rei Acabe e predisse a seca em Israel?",
    options: ["Elias", "Eliseu", "Jeremias", "Isaías"],
    answerIndex: 0,
    category: "Profetas",
    difficulty: "avançado"
  },
  {
    question: "Qual das cartas paulinas trata extensamente de questões práticas da igreja em Corinto, incluindo dons espirituais?",
    options: ["Gálatas", "1 Coríntios", "Romanos", "Tito"],
    answerIndex: 1,
    category: "Cartas (Epístolas)",
    difficulty: "intermediário"
  },
  {
    question: "Qual profeta teve seu livro composto por apenas quatro capítulos e fala sobre o avivamento em Nínive?",
    options: ["Ageu", "Jonas", "Obadias", "Naum"],
    answerIndex: 1,
    category: "Profetas",
    difficulty: "avançado"
  },
  {
    question: "Qual personagem bíblico é conhecido por sua grande paciência e sofrimento, mantendo-se fiel a Deus?",
    options: ["Jó", "Elias", "Neemias", "Esdras"],
    answerIndex: 0,
    category: "Sabedoria / Literatura",
    difficulty: "intermediário"
  },
  {
    question: "Em qual livro encontramos a expressão 'debaixo do sol' repetida muitas vezes, refletindo sobre a vaidade da vida?",
    options: ["Provérbios", "Eclesiastes", "Salmos", "Jó"],
    answerIndex: 1,
    category: "Sabedoria / Literatura",
    difficulty: "avançado"
  },
  {
    question: "Qual líder reconstruiu os muros de Jerusalém após o exílio babilônico?",
    options: ["Neemias", "Esdras", "Zorobabel", "Josué, o sumo sacerdote"],
    answerIndex: 0,
    category: "História de Israel",
    difficulty: "intermediário"
  },
  {
    question: "Qual profeta tem um livro com cinco capítulos que expressam profunda lamentação pela queda de Jerusalém?",
    options: ["Lamentações", "Malaquias", "Ageu", "Habacuque"],
    answerIndex: 0,
    category: "Profetas / Exílio",
    difficulty: "avançado"
  },
  {
    question: "Em Apocalipse, quantas igrejas da Ásia recebem cartas específicas?",
    options: ["3", "5", "7", "12"],
    answerIndex: 2,
    category: "Apocalipse / Escatologia",
    difficulty: "intermediário"
  },
  {
    question: "Qual imagem é usada em Apocalipse para representar Jesus no início do livro?",
    options: [
      "Um leão apenas",
      "Um cordeiro como tendo sido morto",
      "Um anjo poderoso",
      "Um cavaleiro vermelho"
    ],
    answerIndex: 1,
    category: "Apocalipse / Escatologia",
    difficulty: "avançado"
  },
  {
    question: "Qual personagem do livro de Atos é conhecido por ser um grande incentivador, apelidado de 'filho da consolação'?",
    options: ["Barnabé", "Silas", "Timóteo", "Marcos"],
    answerIndex: 0,
    category: "História da Igreja (Atos)",
    difficulty: "intermediário"
  },
  {
    question: "Qual carta do Novo Testamento destaca Cristo como sumo sacerdote segundo a ordem de Melquisedeque?",
    options: ["Hebreus", "Colossenses", "Romanos", "1 Pedro"],
    answerIndex: 0,
    category: "Cartas (Epístolas)",
    difficulty: "avançado"
  },
  {
    question: "Qual rei de Israel pediu uma prova com o velo de lã para confirmar a vontade de Deus?",
    options: ["Gideão", "Saul", "Davi", "Jeú"],
    answerIndex: 0,
    category: "História de Israel",
    difficulty: "intermediário"
  },
  {
    question: "Qual profeta anunciou o nascimento do Messias em Belém de Efrata?",
    options: ["Miquéias", "Ageu", "Zacarias", "Malaquias"],
    answerIndex: 0,
    category: "Profetas",
    difficulty: "avançado"
  },
  {
    question: "Em qual carta encontramos a famosa descrição do amor que 'tudo sofre, tudo crê, tudo espera, tudo suporta'?",
    options: ["Romanos 8", "1 Coríntios 13", "Efésios 4", "Filipenses 2"],
    answerIndex: 1,
    category: "Cartas (Epístolas)",
    difficulty: "intermediário"
  },
  {
    question: "Qual profeta teve sua boca purificada com uma brasa viva tirada do altar?",
    options: ["Ezequiel", "Isaías", "Jeremias", "Zacarias"],
    answerIndex: 1,
    category: "Profetas",
    difficulty: "avançado"
  }
];

// Número de perguntas por teste
const QUESTIONS_PER_TEST = 20;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// URL do App Script para salvar ranking
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const RANKING_ENDPOINT = "https://script.google.com/macros/s/AKfycbwGpbTEKSsqsxXufLaAsOD-pHxU9WJSLAjVhQQY23WvzVGZF10Ha00EimK5i9vUD4Sb6g/exec";

// pesos por dificuldade (para o score 0–1000)
function getDifficultyWeight(diff) {
  if (diff === "avançado") return 70;
  if (diff === "intermediário") return 50;
  return 30; // iniciante (default)
}

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
const difficultyLevels = ["iniciante", "intermediário", "avançado"];
let remainingByDifficulty = {};
let questionsAsked = [];
let answers = [];
let currentIndex = 0;
let score = 0; // score final normalizado 0–1000
let currentDifficultyIndex = 1; // começa em intermediário

// guarda o nível textual (pra enviar pro ranking)
let lastLevelName = "";

// ---------------------------
// Funções de seleção de perguntas
// ---------------------------
function resetRemaining() {
  remainingByDifficulty = {
    iniciante: shuffle(allQuestions.filter(q => q.difficulty === "iniciante")),
    "intermediário": shuffle(allQuestions.filter(q => q.difficulty === "intermediário")),
    avançado: shuffle(allQuestions.filter(q => q.difficulty === "avançado"))
  };

  questionsAsked = [];
  answers = [];
  currentIndex = 0;
  score = 0;
  currentDifficultyIndex = 1;
}

function pickNextQuestion() {
  if (questionsAsked.length >= QUESTIONS_PER_TEST) return null;

  let q = null;
  const tryLevel = (idx) => {
    const lvl = difficultyLevels[idx];
    const arr = remainingByDifficulty[lvl];
    if (arr && arr.length) return arr.pop();
    return null;
  };

  q = tryLevel(currentDifficultyIndex);

  if (!q) {
    const offsets = [1, -1, 2, -2];
    for (const off of offsets) {
      const idx = currentDifficultyIndex + off;
      if (idx >= 0 && idx < difficultyLevels.length) {
        q = tryLevel(idx);
        if (q) {
          currentDifficultyIndex = idx;
          break;
        }
      }
    }
  }

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
const finalLevelEl = document.getElementById("final-level");
const diagnosticTextEl = document.getElementById("diagnostic-text");
const studyTipsEl = document.getElementById("study-tips");
const retryBtn = document.getElementById("retry-btn");

const badgeIcon = document.getElementById("badge-icon");
const badgeRibbon = document.getElementById("badge-ribbon");
const badgeLabelEl = document.getElementById("badge-label");

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
      Array.from(optionsForm.querySelectorAll("label")).forEach(l =>
        l.classList.remove("border-emerald-500")
      );
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
  let correct = 0;
  answers.forEach((ans, idx) => {
    if (ans === questionsAsked[idx].answerIndex) correct++;
  });
  scorePreview.textContent = `Respostas corretas: ${correct}`;
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

  const currentQuestion = questionsAsked[currentIndex];
  const userAns = answers[currentIndex];
  const isCorrect = userAns === currentQuestion.answerIndex;

  if (isCorrect) {
    currentDifficultyIndex = Math.min(currentDifficultyIndex + 1, difficultyLevels.length - 1);
  } else {
    currentDifficultyIndex = Math.max(currentDifficultyIndex - 1, 0);
  }

  if (currentIndex === QUESTIONS_PER_TEST - 1) {
    calculateResult();
    return;
  }

  currentIndex++;

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
// Função para enviar resultado ao ranking (Google Sheets)
// ---------------------------
function sendResultToRanking(name, scoreValue, levelName) {
  if (!RANKING_ENDPOINT || RANKING_ENDPOINT.includes("SEU_ID_AQUI")) return;

  const payload = {
    nome: name,
    score: scoreValue,
    nivel: levelName,
    origem: "TesteBiblia",
    dataHora: new Date().toISOString()
  };

  // usa no-cors só pra garantir que não quebre o front (não precisa ler resposta)
  fetch(RANKING_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  }).catch((err) => {
    console.error("Erro ao enviar pro ranking:", err);
  });
}

// ---------------------------
// Função para abrir modal bonito de nome

function openNameModal(onConfirm) {
  let existingModal = document.getElementById("name-modal");
  if (existingModal) existingModal.remove();

  const modal = document.createElement("div");
  modal.id = "name-modal";
  modal.className =
    "fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]";

  modal.innerHTML = `
    <div class="bg-slate-900 w-[90%] max-w-md rounded-2xl p-6 border border-slate-700 shadow-2xl animate-fadeIn">
      <h2 class="text-xl font-bold text-center mb-3">Entrar no Ranking</h2>
      <p class="text-slate-300 text-center mb-4">
        Digite seu nome ou apelido para entrar no ranking:
      </p>

      <input id="name-input"
        type="text"
        class="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-emerald-400"
        placeholder="Ex: Lucas Almeida"
      />

      <div class="mt-6 flex gap-3">
        <button id="cancel-name"
          class="flex-1 py-3 rounded-xl bg-slate-700 text-white hover:bg-slate-600 transition">
          Cancelar
        </button>

        <button id="confirm-name"
          class="flex-1 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 transition">
          Confirmar
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById("confirm-name").onclick = () => {
    const name = document.getElementById("name-input").value.trim();
    if (name.length < 2) return alert("Digite um nome válido.");
    modal.remove();
    onConfirm(name);
  };

  document.getElementById("cancel-name").onclick = () => modal.remove();
}


// ---------------------------
// Loader Big Tech
// ---------------------------
function showLoading() {
  let loading = document.getElementById("loading-overlay");
  if (!loading) {
    loading = document.createElement("div");
    loading.id = "loading-overlay";
    loading.className =
      "fixed inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center z-[99999]";
    loading.innerHTML = `
      <div class="w-12 h-12 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
      <p class="text-slate-300 mt-4">Enviando resultado...</p>
    `;
    document.body.appendChild(loading);
  }
}

function hideLoading() {
  const loading = document.getElementById("loading-overlay");
  if (loading) loading.remove();
}

// ---------------------------
// Confete Big Tech
// ---------------------------
function confettiExplosion() {
  const duration = 2000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

// ---------------------------
// Enviar para ranking + avatar + redirecionar
// ---------------------------
function sendToRankingFinal(name, scoreValue, levelName) {
  const avatar = name
    .split(" ")
    .map(n => n[0].toUpperCase())
    .join("")
    .slice(0, 2);

  const payload = {
    nome: name,
    score: scoreValue,
    nivel: levelName,
    avatar: avatar,
    origem: "TesteBiblia",
    dataHora: new Date().toISOString()
  };

  showLoading();

  fetch(RANKING_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
    .then(() => {
      setTimeout(() => {
        hideLoading();
        confettiExplosion();
        window.location.href = "ranking.html";
      }, 800);
    })
    .catch(() => {
      hideLoading();
      alert("Erro ao enviar. Tente novamente.");
    });
}

// ---------------------------
// Alterar botão "Enviar resultado"
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("send-ranking-btn");
  if (sendBtn) {
    sendBtn.className =
      "w-full py-3 mt-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 hover:opacity-90 text-black font-semibold flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]";
    sendBtn.innerHTML = `🚀 Enviar resultado`;

    sendBtn.addEventListener("click", () => {
      openNameModal((name) => {
        localStorage.setItem("tb_nome", name);
        sendToRankingFinal(name, score, lastLevelName);
      });
    });
  }
});


// ---------------------------
// Cálculo do resultado (score 0–1000 + badge com efeitos)
// ---------------------------
function calculateResult() {
  let rawScore = 0;
  let maxScore = 0;
  const categoryStats = {};

  questionsAsked.forEach((q, idx) => {
    const weight = getDifficultyWeight(q.difficulty);
    maxScore += weight;

    if (!categoryStats[q.category]) {
      categoryStats[q.category] = { total: 0, erros: 0 };
    }
    categoryStats[q.category].total++;

    if (answers[idx] === q.answerIndex) {
      rawScore += weight;
    } else {
      categoryStats[q.category].erros++;
    }
  });

  const normalizedScore = Math.round((rawScore / (maxScore || 1)) * 1000);
  score = normalizedScore;

  // Definição de nível (faixas)
  let levelName = "";
  let ribbonBg = "#ef4444"; // cor da faixa
  let badgeText = "Iniciante";

  if (score < 250) {
    levelName = "Iniciante";
    badgeText = "Iniciante";
    ribbonBg = "#ef4444"; // red-500
  } else if (score < 500) {
    levelName = "Intermediário";
    badgeText = "Intermediário";
    ribbonBg = "#facc15"; // yellow-400
  } else if (score < 800) {
    levelName = "Avançado";
    badgeText = "Avançado";
    ribbonBg = "#22c55e"; // green-500
  } else {
    levelName = "Mestre";
    badgeText = "Mestre";
    ribbonBg = "#a855f7"; // purple-500
  }

  // guarda nível pra poder enviar pro ranking
  lastLevelName = levelName;

  // Atualiza elementos principais
  finalScoreEl.textContent = `${score} / 1000`;
  finalLevelEl.textContent = `Nível ${levelName}`;
  badgeLabelEl.textContent = badgeText;

  // 🌈 Aplica classes visuais na insígnia (círculo com troféu)
  if (badgeIcon) {
    // limpa estados anteriores
    badgeIcon.classList.remove(
      "badge-iniciante",
      "badge-intermediario",
      "badge-avancado",
      "badge-mestre",
      "badge-animated"
    );

    // adiciona classe conforme o nível
    if (levelName === "Iniciante") {
      badgeIcon.classList.add("badge-iniciante");
    } else if (levelName === "Intermediário") {
      badgeIcon.classList.add("badge-intermediario");
    } else if (levelName === "Avançado") {
      badgeIcon.classList.add("badge-avancado");
    } else {
      badgeIcon.classList.add("badge-mestre");
    }

    // garante animação de brilho / partículas
    badgeIcon.classList.add("badge-animated", "badge-base");
  }

  // cor da faixa embaixo do nível
  if (badgeRibbon) {
    badgeRibbon.style.backgroundColor = ribbonBg;
  }

  // ---------- Diagnóstico: categorias com mais erros ----------
  const sortedCategories = Object.entries(categoryStats).sort(
    (a, b) => b[1].erros - a[1].erros
  );

  const pontosFracos = sortedCategories
    .filter(([_, stats]) => stats.erros > 0)
    .slice(0, 3)
    .map(([cat]) => cat);

  if (pontosFracos.length === 0) {
    if (score >= 800) {
      diagnosticTextEl.textContent =
        "Impressionante! Você mandou muito bem. Continue firme estudando e ensinando a Palavra.";
    } else {
      diagnosticTextEl.textContent =
        "Você foi muito bem! Mesmo assim, siga crescendo na leitura e meditação diária.";
    }
  } else {
    diagnosticTextEl.textContent = `Você foi bem, mas pode crescer especialmente em: ${pontosFracos.join(
      ", "
    )}.`;
  }

  // ---------- Sugestões de estudo ----------
  studyTipsEl.innerHTML = "";

  if (
    pontosFracos.includes("Gênesis / Início da Bíblia") ||
    pontosFracos.includes("Gênesis / Patriarcas")
  ) {
    addTip(
      "Reserve alguns dias para ler Gênesis com calma, anotando a história da criação, de Noé e dos patriarcas (Abraão, Isaque, Jacó e José)."
    );
  }
  if (
    pontosFracos.includes("Pentateuco / Êxodo") ||
    pontosFracos.includes("Lei / Mandamentos")
  ) {
    addTip(
      "Leia Êxodo 1–20 para entender a libertação do Egito e os Dez Mandamentos, pedindo ao Espírito Santo entendimento."
    );
  }
  if (
    pontosFracos.includes("Profetas") ||
    pontosFracos.includes("Profetas / Exílio")
  ) {
    addTip(
      "Separe um tempo para ler livros proféticos como Elias (em 1 Reis), Jeremias e Daniel, observando as mensagens de correção e esperança."
    );
  }
  if (pontosFracos.includes("História de Israel")) {
    addTip(
      "Leia Josué, Juízes, Rute e 1–2 Samuel para ver a formação do povo, dos juízes e dos reis de Israel."
    );
  }
  if (pontosFracos.includes("Salmos")) {
    addTip(
      "Escolha alguns Salmos (como 1, 23, 51, 91) e leia em oração, transformando os textos em conversa com Deus."
    );
  }
  if (pontosFracos.includes("Evangelhos")) {
    addTip(
      "Leia pelo menos um evangelho inteiro (Mateus, Marcos, Lucas ou João), prestando atenção nas palavras e atitudes de Jesus."
    );
  }
  if (pontosFracos.includes("Cartas (Epístolas)")) {
    addTip(
      "Leia Romanos, Efésios ou Filipenses para entender melhor doutrina, graça e vida cristã prática."
    );
  }
  if (pontosFracos.includes("História da Igreja (Atos)")) {
    addTip(
      "Leia Atos dos Apóstolos para ver como a igreja começou, como o Espírito Santo agiu e como o evangelho se espalhou."
    );
  }
  if (pontosFracos.includes("Apocalipse / Escatologia")) {
    addTip(
      "Leia Apocalipse com calma, de preferência junto com um bom comentário ou com seu pastor, buscando entender as visões e a esperança da volta de Cristo."
    );
  }

  if (studyTipsEl.children.length === 0) {
    addTip(
      "Mesmo com bom resultado, mantenha o hábito diário de leitura bíblica e meditação. A Palavra é viva e sempre tem algo novo para te ensinar."
    );
  }

  // mostra tela de resultado
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  const shareBtn = document.getElementById("share-btn");
  if (shareBtn) shareBtn.classList.remove("hidden");

  // ---------------------------
  // Pergunta o nome e envia pro ranking
  // ---------------------------
 // try {
 //   const storedName = localStorage.getItem("tb_nome") || "";
 //   const nome = prompt(
 //   "Para entrar no ranking do Teste da Bíblia, digite seu nome (ou apelido):",
 //    storedName
 //  );

 //   if (nome && nome.trim().length >= 2) {
 //     const cleanName = nome.trim();
 //     localStorage.setItem("tb_nome", cleanName);
 //     sendResultToRanking(cleanName, score, lastLevelName);
 //   }
 // } catch (err) {
 //   console.error("Erro ao capturar nome para ranking:", err);
 // }
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
  pickNextQuestion();
  currentIndex = 0;
  score = 0;
  quizSection.classList.remove("hidden");
  resultSection.classList.add("hidden");
  renderQuestion();
});

// ---------------------------
// Compartilhar / salvar imagem do resultado
// ---------------------------
function shareResultAsImage() {
  const node = document.getElementById("result-section");
  if (!node) return;

  html2canvas(node, { backgroundColor: "#0f1724", scale: 2 }).then((canvas) => {
    canvas.toBlob((blob) => {
      if (!blob) return;

      const fileName = `teste-biblia-${Date.now()}.png`;

      if (
        navigator.canShare &&
        navigator.canShare({ files: [new File([blob], fileName, { type: blob.type })] })
      ) {
        const file = new File([blob], fileName, { type: blob.type });
        navigator
          .share({
            files: [file],
            title: "Meu resultado - Teste da Bíblia",
            text: "Veja meu resultado no Teste da Bíblia!"
          })
          .catch(() => {
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
pickNextQuestion();
renderQuestion();
