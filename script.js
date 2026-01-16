// Pool de perguntas (com explanação e referência bíblica)
const allQuestions = [
  {
    question: "Quem construiu a arca que salvou sua família do dilúvio?",
    options: ["Moisés", "Noé", "Abraão", "Davi"],
    answerIndex: 1,
    category: "Gênesis / Início da Bíblia",
    difficulty: "iniciante",
    explanation: "Noé foi escolhido por Deus para construir a arca devido à sua retidão. Ele tinha 600 anos quando o dilúvio começou e passou um ano dentro da arca com sua família e os animais.",
    reference: "Gênesis 6:14-22; 7:6"
  },
  {
    question: "Em qual jardim Adão e Eva viviam antes do pecado?",
    options: ["Jardim de Getsêmani", "Jardim de Éden", "Jardim de Nazaré", "Jardim do Rei"],
    answerIndex: 1,
    category: "Gênesis / Início da Bíblia",
    difficulty: "iniciante",
    explanation: "O Jardim do Éden foi o paraíso criado por Deus onde Adão e Eva viviam em perfeita comunhão com Ele, antes da queda. Éden significa 'delícia' ou 'prazer'.",
    reference: "Gênesis 2:8-15"
  },
  {
    question: "Deus libertou o povo de Israel do Egito através de qual líder?",
    options: ["Josué", "Samuel", "Moisés", "Elias"],
    answerIndex: 2,
    category: "Pentateuco / Êxodo",
    difficulty: "iniciante",
    explanation: "Moisés foi escolhido por Deus para liderar os israelitas para fora da escravidão no Egito. Ele realizou os dez sinais e maravilhas diante de Faraó e conduziu o povo através do Mar Vermelho.",
    reference: "Êxodo 3:10; 14:21-31"
  },
  {
    question: "Qual profeta enfrentou os profetas de Baal no Monte Carmelo?",
    options: ["Elias", "Jeremias", "Isaías", "Ezequiel"],
    answerIndex: 0,
    category: "Profetas",
    difficulty: "intermediário",
    explanation: "Elias desafiou 450 profetas de Baal no Monte Carmelo para provar quem era o verdadeiro Deus. O fogo de Deus desceu do céu e consumiu o sacrifício, a lenha, as pedras e até a água.",
    reference: "1 Reis 18:19-40"
  },
  {
    question: "Qual rei de Israel escreveu muitos salmos e era músico?",
    options: ["Saul", "Salomão", "Davi", "Ezequias"],
    answerIndex: 2,
    category: "História de Israel",
    difficulty: "iniciante",
    explanation: "Davi, além de ser rei, era conhecido como 'o doce salmista de Israel'. Ele escreveu cerca de 73 dos 150 salmos e tocava harpa para acalmar o rei Saul.",
    reference: "1 Samuel 16:23; Salmos (diversos)"
  },
  {
    question: "Qual livro começa com a frase: 'No princípio era o Verbo'?",
    options: ["Gênesis", "João", "Lucas", "Atos"],
    answerIndex: 1,
    category: "Evangelhos",
    difficulty: "iniciante",
    explanation: "O evangelho de João começa de forma única, apresentando Jesus como o Verbo (Logos) que estava com Deus e era Deus desde o princípio, enfatizando Sua divindade.",
    reference: "João 1:1-3"
  },
  {
    question: "Quantos evangelhos existem no Novo Testamento?",
    options: ["3", "4", "5", "7"],
    answerIndex: 1,
    category: "Evangelhos",
    difficulty: "iniciante",
    explanation: "São quatro evangelhos canônicos: Mateus, Marcos, Lucas e João. Cada um apresenta Jesus de uma perspectiva diferente: Rei (Mateus), Servo (Marcos), Homem (Lucas) e Deus (João).",
    reference: "Mateus, Marcos, Lucas, João"
  },
  {
    question: "Quem negou Jesus três vezes antes do galo cantar?",
    options: ["João", "Pedro", "Tiago", "Tomé"],
    answerIndex: 1,
    category: "Evangelhos",
    difficulty: "iniciante",
    explanation: "Pedro negou conhecer Jesus três vezes na noite em que Ele foi preso, exatamente como Jesus havia predito. Após o galo cantar, Pedro se lembrou e chorou amargamente.",
    reference: "Mateus 26:69-75; Lucas 22:54-62"
  },
  {
    question: "Quem foi usado por Deus para levar o evangelho aos gentios e escreveu muitas cartas?",
    options: ["Pedro", "Tiago", "Paulo", "Barnabé"],
    answerIndex: 2,
    category: "Cartas (Epístolas)",
    difficulty: "iniciante",
    explanation: "Paulo, inicialmente chamado Saulo, perseguia os cristãos até seu encontro com Jesus no caminho de Damasco. Tornou-se o apóstolo dos gentios e escreveu 13 livros do Novo Testamento.",
    reference: "Atos 9:1-19; Romanos 11:13"
  },
  {
    question: "Qual é o primeiro livro da Bíblia?",
    options: ["Êxodo", "Salmos", "Mateus", "Gênesis"],
    answerIndex: 3,
    category: "Gênesis / Início da Bíblia",
    difficulty: "iniciante",
    explanation: "Gênesis, que significa 'origem' ou 'começo', é o primeiro livro tanto da Bíblia quanto do Pentateuco. Relata a criação do mundo, a queda do homem e a história dos patriarcas.",
    reference: "Gênesis 1-50"
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

// Sistema de Achievements
const ACHIEVEMENTS = {
  first_try: {
    id: 'first_try',
    name: 'Primeira Jornada',
    description: 'Completou o primeiro teste',
    icon: '🎯',
    rarity: 'common'
  },
  perfect_score: {
    id: 'perfect_score',
    name: 'Perfeição Divina',
    description: 'Alcançou 1000 pontos (20/20 corretas)',
    icon: '👑',
    rarity: 'legendary'
  },
  speed_demon: {
    id: 'speed_demon',
    name: 'Raio Veloz',
    description: 'Completou o teste em menos de 5 minutos',
    icon: '⚡',
    rarity: 'rare'
  },
  comeback_king: {
    id: 'comeback_king',
    name: 'Ressurreição',
    description: 'Melhorou 300+ pontos',
    icon: '🔄',
    rarity: 'rare'
  },
  expert_level: {
    id: 'expert_level',
    name: 'Conhecedor Expert',
    description: 'Alcançou nível Expert',
    icon: '🌟',
    rarity: 'epic'
  },
  no_mistakes: {
    id: 'no_mistakes',
    name: 'Sem Erros',
    description: 'Acertou todas as últimas 10 perguntas',
    icon: '💯',
    rarity: 'rare'
  },
  gospel_master: {
    id: 'gospel_master',
    name: 'Mestre dos Evangelhos',
    description: 'Acertou todas sobre Evangelhos',
    icon: '📖',
    rarity: 'epic'
  }
};

function getUnlockedAchievements() {
  try {
    return JSON.parse(localStorage.getItem('achievements') || '[]');
  } catch (e) {
    return [];
  }
}

function unlockAchievement(achievementId) {
  const unlocked = getUnlockedAchievements();
  if (!unlocked.includes(achievementId)) {
    unlocked.push(achievementId);
    localStorage.setItem('achievements', JSON.stringify(unlocked));
    return true; // Novo achievement
  }
  return false; // Já tinha
}

function checkAchievements(testData) {
  const newAchievements = [];
  const previousTests = JSON.parse(localStorage.getItem('test_history') || '[]');
  
  // Primeira Jornada
  if (previousTests.length === 0) {
    if (unlockAchievement('first_try')) {
      newAchievements.push(ACHIEVEMENTS.first_try);
    }
  }
  
  // Perfeição Divina
  if (testData.score === 1000) {
    if (unlockAchievement('perfect_score')) {
      newAchievements.push(ACHIEVEMENTS.perfect_score);
    }
  }
  
  // Raio Veloz (menos de 5 minutos)
  const testDuration = (Date.now() - testData.startTime) / 1000;
  if (testDuration < 300) {
    if (unlockAchievement('speed_demon')) {
      newAchievements.push(ACHIEVEMENTS.speed_demon);
    }
  }
  
  // Ressurreição (melhorou 300+ pontos)
  if (previousTests.length > 0) {
    const lastScore = previousTests[previousTests.length - 1].score;
    if (testData.score - lastScore >= 300) {
      if (unlockAchievement('comeback_king')) {
        newAchievements.push(ACHIEVEMENTS.comeback_king);
      }
    }
  }
  
  // Expert
  if (testData.level === 'Expert') {
    if (unlockAchievement('expert_level')) {
      newAchievements.push(ACHIEVEMENTS.expert_level);
    }
  }
  
  // Sem Erros (últimas 10 perguntas certas)
  const last10 = testData.answers.slice(-10);
  const last10Questions = testData.questionsAsked.slice(-10);
  const allCorrect = last10.every((ans, idx) => ans === last10Questions[idx].answerIndex);
  if (allCorrect) {
    if (unlockAchievement('no_mistakes')) {
      newAchievements.push(ACHIEVEMENTS.no_mistakes);
    }
  }
  
  // Mestre dos Evangelhos
  const gospelQuestions = testData.questionsAsked.filter(q => q.category === 'Evangelhos');
  if (gospelQuestions.length >= 3) {
    const gospelCorrect = gospelQuestions.every((q, idx) => {
      const qIndex = testData.questionsAsked.indexOf(q);
      return testData.answers[qIndex] === q.answerIndex;
    });
    if (gospelCorrect) {
      if (unlockAchievement('gospel_master')) {
        newAchievements.push(ACHIEVEMENTS.gospel_master);
      }
    }
  }
  
  // Salvar histórico
  previousTests.push({
    score: testData.score,
    level: testData.level,
    date: Date.now()
  });
  localStorage.setItem('test_history', JSON.stringify(previousTests.slice(-10))); // Manter últimos 10
  
  return newAchievements;
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// QUICK WINS: Sound System (Quick Win #3)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let soundEnabled = localStorage.getItem('sound_enabled') !== 'false';

// Simple sound effects using Web Audio API
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

function playSound(frequency, duration, type = 'sine') {
  if (!soundEnabled) return;
  
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  oscillator.frequency.value = frequency;
  oscillator.type = type;
  
  gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
  
  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + duration);
}

function playCorrectSound() {
  playSound(880, 0.1, 'sine');
  setTimeout(() => playSound(1046, 0.15, 'sine'), 100);
}

function playIncorrectSound() {
  playSound(200, 0.2, 'sawtooth');
}

function playClickSound() {
  playSound(400, 0.05, 'sine');
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// QUICK WINS: Haptic Feedback (Quick Win #2)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function triggerHaptic(pattern = 'light') {
  if (!navigator.vibrate) return;
  
  const patterns = {
    light: 10,
    medium: 50,
    heavy: 100,
    success: [10, 50, 10],
    error: [50, 100, 50]
  };
  
  navigator.vibrate(patterns[pattern] || patterns.light);
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// QUICK WINS: Subtle Confetti (Quick Win #4)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function subtleConfetti() {
  if (typeof confetti === 'undefined') return;
  
  confetti({
    particleCount: 30,
    spread: 50,
    origin: { y: 0.6 },
    colors: ['#10b981', '#34d399', '#6ee7b7'],
    ticks: 100,
    gravity: 1.2,
    scalar: 0.8
  });
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// QUICK WINS: Progress Saving (Quick Win #5)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function saveProgress() {
  const progressData = {
    questionsAsked: questionsAsked.map(q => ({
      question: q.question,
      answerIndex: q.answerIndex,
      category: q.category,
      difficulty: q.difficulty,
      options: q.options
    })),
    answers,
    currentIndex,
    score,
    currentDifficultyIndex,
    timestamp: Date.now()
  };
  
  try {
    localStorage.setItem('quiz_progress', JSON.stringify(progressData));
  } catch (e) {
    console.error('Error saving progress:', e);
  }
}

function loadProgress() {
  try {
    const saved = localStorage.getItem('quiz_progress');
    if (!saved) return null;
    
    const data = JSON.parse(saved);
    
    // Check if progress is less than 24 hours old
    if (Date.now() - data.timestamp > 86400000) {
      localStorage.removeItem('quiz_progress');
      return null;
    }
    
    return data;
  } catch (e) {
    console.error('Error loading progress:', e);
    return null;
  }
}

function clearProgress() {
  localStorage.removeItem('quiz_progress');
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// QUICK WINS: Sticky Header (Quick Win #1)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function updateStickyHeader() {
  const stickyProgress = document.getElementById('sticky-progress');
  const stickyProgressText = document.getElementById('sticky-progress-text');
  const stickyProgressBar = document.getElementById('sticky-progress-bar');
  const mainSection = document.getElementById('quiz-section');
  
  if (!stickyProgress || !mainSection) return;
  
  // Show sticky header when scrolled down
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stickyProgress.classList.add('hidden');
      } else {
        stickyProgress.classList.remove('hidden');
      }
    });
  }, { threshold: 0.1 });
  
  observer.observe(mainSection);
  
  // Update content
  if (stickyProgressText) {
    stickyProgressText.textContent = `Pergunta ${currentIndex + 1} de ${QUESTIONS_PER_TEST}`;
  }
  if (stickyProgressBar) {
    const percent = ((currentIndex + 1) / QUESTIONS_PER_TEST) * 100;
    stickyProgressBar.style.width = `${percent}%`;
  }
}

// pesos por dificuldade (para o score 0–1000)
function getDifficultyWeight(diff) {
  if (diff === "avançado") return 60;
  if (diff === "intermediário") return 50;
  return 40; // iniciante (default)
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

// Melhoria #5: Rastrear tempo de início do teste
let testStartTime = Date.now();

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

  // Update sticky header (Quick Win #1)
  updateStickyHeader();

  prevBtn.disabled = currentIndex === 0;
  nextBtn.textContent =
    currentIndex === QUESTIONS_PER_TEST - 1 ? "Finalizar teste" : "Próxima pergunta";

  optionsForm.innerHTML = "";
  errorMessage.classList.add("hidden");

  q.options.forEach((opt, idx) => {
    const id = `option-${currentIndex}-${idx}`;

    const wrapper = document.createElement("label");
    wrapper.className =
      "flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-slate-700 text-sm cursor-pointer hover:border-emerald-500/50 hover:bg-slate-800/50 transition-all";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.value = idx;
    input.id = id;
    input.className = "accent-emerald-500";

    if (answers[currentIndex] === idx) {
      input.checked = true;
      wrapper.classList.add("option-selected");
    }

    input.addEventListener("change", () => {
      answers[currentIndex] = idx;
      errorMessage.classList.add("hidden");
      
      // Remove selected class from all options
      Array.from(optionsForm.querySelectorAll("label")).forEach(l =>
        l.classList.remove("option-selected")
      );
      wrapper.classList.add("option-selected");
      
      // Quick Win #2: Haptic feedback
      triggerHaptic('light');
      
      // Quick Win #3: Sound feedback
      playClickSound();
      
      // Quick Win #5: Save progress
      saveProgress();
      
      updateScorePreview();
    });

    const span = document.createElement("span");
    span.textContent = opt;
    span.className = "flex-1 text-slate-200";

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

// Mostrar explicação após resposta
function showExplanation(question, userAnswer, isCorrect) {
  // Só mostrar se a pergunta tiver explicação
  if (!question.explanation) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const modal = document.createElement('div');
    modal.id = 'explanation-modal';
    modal.className = 'fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn';
    
    modal.innerHTML = `
      <div class="relative max-w-lg w-full bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border-2 ${
        isCorrect ? 'border-emerald-500' : 'border-amber-500'
      } p-6 shadow-2xl animate-scaleIn">
        <!-- Header -->
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 rounded-full ${
            isCorrect ? 'bg-emerald-500/20' : 'bg-amber-500/20'
          } flex items-center justify-center text-2xl">
            ${isCorrect ? '✅' : '💡'}
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-lg ${
              isCorrect ? 'text-emerald-400' : 'text-amber-400'
            }">
              ${isCorrect ? 'Parabéns! Resposta correta!' : 'Resposta: ' + question.options[question.answerIndex]}
            </h3>
            <p class="text-xs text-slate-400">
              ${isCorrect ? 'Continue assim!' : 'Aprenda com esta questão'}
            </p>
          </div>
        </div>
        
        <!-- Explanation -->
        <div class="mb-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
          <p class="text-sm text-slate-300 leading-relaxed">
            ${question.explanation}
          </p>
        </div>
        
        <!-- Bible Reference -->
        <div class="flex items-center gap-2 mb-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
          <span class="text-lg">📖</span>
          <span class="text-sm font-medium text-emerald-300">
            ${question.reference}
          </span>
        </div>
        
        <!-- Continue Button -->
        <button
          id="continue-btn"
          class="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-colors">
          Continuar →
        </button>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Botão continuar
    document.getElementById('continue-btn').addEventListener('click', () => {
      modal.remove();
      resolve();
    });
    
    // Fechar com ESC
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        modal.remove();
        document.removeEventListener('keydown', handleEscape);
        resolve();
      }
    };
    document.addEventListener('keydown', handleEscape);
  });
}

// Navegação e validação de resposta
nextBtn.addEventListener("click", async () => {
  const selected = document.querySelector('input[name="option"]:checked');

  if (!selected && answers[currentIndex] === null) {
    errorMessage.classList.remove("hidden");
    triggerHaptic('error');
    playIncorrectSound();
    return;
  }

  const currentQuestion = questionsAsked[currentIndex];
  const userAns = answers[currentIndex];
  const isCorrect = userAns === currentQuestion.answerIndex;

  // Visual feedback for correct/incorrect
  const allOptions = Array.from(optionsForm.querySelectorAll("label"));
  allOptions.forEach((label, idx) => {
    if (idx === currentQuestion.answerIndex) {
      label.classList.add("option-correct");
    } else if (idx === userAns && !isCorrect) {
      label.classList.add("option-incorrect");
    }
  });

  // Feedback haptic e sonoro
  if (isCorrect) {
    triggerHaptic('success');
    playCorrectSound();
    subtleConfetti();
  } else {
    triggerHaptic('error');
    playIncorrectSound();
  }

  // Desabilitar botão durante feedback
  nextBtn.disabled = true;

  // Aguardar feedback visual
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mostrar explicação
  await showExplanation(currentQuestion, userAns, isCorrect);

  // Continuar fluxo
  if (isCorrect) {
    currentDifficultyIndex = Math.min(currentDifficultyIndex + 1, difficultyLevels.length - 1);
  } else {
    currentDifficultyIndex = Math.max(currentDifficultyIndex - 1, 0);
  }

  // Salvar progresso
  saveProgress();

  if (currentIndex === QUESTIONS_PER_TEST - 1) {
    clearProgress();
    calculateResult();
    return;
  }

  currentIndex++;

  if (currentIndex >= questionsAsked.length) {
    pickNextQuestion();
  }

  nextBtn.disabled = false;
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

  // Incluir grupo de igreja se houver
  const churchGroup = localStorage.getItem('church_group') || '';

  const payload = {
    nome: name,
    score: scoreValue,
    nivel: levelName,
    avatar: avatar,
    grupo: churchGroup,
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

  // Definição de nível (faixas ajustadas)
  let levelName = "";
  let ribbonBg = "#ef4444"; // cor da faixa
  let badgeText = "Iniciante";

  if (score < 500) {
    levelName = "Iniciante";
    badgeText = "Iniciante";
    ribbonBg = "#ef4444"; // red-500
  } else if (score < 700) {
    levelName = "Intermediário";
    badgeText = "Intermediário";
    ribbonBg = "#facc15"; // yellow-400
  } else if (score < 900) {
    levelName = "Avançado";
    badgeText = "Avançado";
    ribbonBg = "#22c55e"; // green-500
  } else {
    levelName = "Expert";
    badgeText = "Expert";
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
    } else if (levelName === "Expert") {
      badgeIcon.classList.add("badge-mestre"); // Mantém a classe "mestre" para estilo roxo/purple
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
    if (score >= 900) {
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

  // Verificar e mostrar achievements
  const testData = {
    score,
    level: levelName,
    questionsAsked,
    answers,
    startTime: testStartTime
  };
  
  const newAchievements = checkAchievements(testData);
  
  // mostra tela de resultado
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  const shareBtn = document.getElementById("share-btn");
  if (shareBtn) shareBtn.classList.remove("hidden");
  
  // Mostrar achievements desbloqueados
  if (newAchievements.length > 0) {
    setTimeout(() => showAchievements(newAchievements), 1000);
  }

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

// Mostrar achievements desbloqueados
function showAchievements(achievements) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fadeIn';
  
  const rarityColors = {
    common: 'border-slate-500',
    rare: 'border-blue-500',
    epic: 'border-purple-500',
    legendary: 'border-amber-500'
  };
  
  const rarityGlow = {
    common: 'shadow-slate-500/30',
    rare: 'shadow-blue-500/40',
    epic: 'shadow-purple-500/50',
    legendary: 'shadow-amber-500/60'
  };
  
  const achievementsHTML = achievements.map(ach => `
    <div class="achievement-card bg-gradient-to-br from-slate-900 to-slate-950 border-2 ${rarityColors[ach.rarity]} rounded-2xl p-5 shadow-2xl ${rarityGlow[ach.rarity]} transform hover:scale-105 transition-transform">
      <div class="flex items-center gap-4">
        <div class="text-5xl">${ach.icon}</div>
        <div class="flex-1">
          <h4 class="font-bold text-lg text-emerald-400">${ach.name}</h4>
          <p class="text-sm text-slate-300">${ach.description}</p>
          <p class="text-xs text-slate-500 mt-1 uppercase tracking-wide">${ach.rarity}</p>
        </div>
      </div>
    </div>
  `).join('');
  
  modal.innerHTML = `
    <div class="max-w-md w-full animate-scaleIn">
      <div class="text-center mb-6">
        <h3 class="text-3xl font-bold text-emerald-400 mb-2">🎉 Parabéns!</h3>
        <p class="text-slate-300">Você desbloqueou ${achievements.length} conquista${achievements.length > 1 ? 's' : ''}!</p>
      </div>
      
      <div class="space-y-4 mb-6">
        ${achievementsHTML}
      </div>
      
      <button
        id="close-achievements"
        class="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-colors">
        Continuar
      </button>
      
      <p class="text-center mt-4 text-xs text-slate-500">
        Total desbloqueado: ${getUnlockedAchievements().length}/${Object.keys(ACHIEVEMENTS).length}
      </p>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Confetti para conquistas raras
  if (achievements.some(a => a.rarity === 'legendary' || a.rarity === 'epic')) {
    confettiExplosion();
  }
  
  document.getElementById('close-achievements').addEventListener('click', () => {
    modal.remove();
  });
}


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
// QUICK WINS: Sound Toggle (Quick Win #3)
// ---------------------------
function setupSoundToggle() {
  const soundToggle = document.getElementById('sound-toggle');
  const soundToggleSticky = document.getElementById('sound-toggle-sticky');
  const soundIcon = document.getElementById('sound-icon');
  const soundIconSticky = document.getElementById('sound-icon-sticky');
  
  function updateSoundIcons() {
    const icon = soundEnabled ? '🔊' : '🔇';
    if (soundIcon) soundIcon.textContent = icon;
    if (soundIconSticky) soundIconSticky.textContent = icon;
  }
  
  function toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem('sound_enabled', soundEnabled);
    updateSoundIcons();
    
    // Play a sound to confirm
    if (soundEnabled) {
      playClickSound();
    }
  }
  
  if (soundToggle) soundToggle.addEventListener('click', toggleSound);
  if (soundToggleSticky) soundToggleSticky.addEventListener('click', toggleSound);
  
  updateSoundIcons();
}

// ---------------------------
// QUICK WINS: Theme Toggle (Quick Win #7)
// ---------------------------
function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleSticky = document.getElementById('theme-toggle-sticky');
  const themeIcon = document.getElementById('theme-icon');
  const themeIconSticky = document.getElementById('theme-icon-sticky');
  const body = document.body;
  
  function updateThemeIcons(theme) {
    const icon = theme === 'light' ? '☀️' : '🌙';
    if (themeIcon) themeIcon.textContent = icon;
    if (themeIconSticky) themeIconSticky.textContent = icon;
  }
  
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'light') {
      body.classList.remove('bg-slate-950', 'text-slate-50');
      body.classList.add('bg-white', 'text-slate-900');
    } else {
      body.classList.remove('bg-white', 'text-slate-900');
      body.classList.add('bg-slate-950', 'text-slate-50');
    }
    
    updateThemeIcons(theme);
  }
  
  function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    playClickSound();
  }
  
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (themeToggleSticky) themeToggleSticky.addEventListener('click', toggleTheme);
  
  // Initialize theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
}

// ---------------------------
// QUICK WINS: WhatsApp Share (Quick Win #6)
// ---------------------------
function setupWhatsAppShare() {
  const shareBtn = document.getElementById('share-whatsapp-btn');
  if (!shareBtn) return;
  
  shareBtn.addEventListener('click', () => {
    const message = `🏆 Fiz ${score} pontos no Teste da Bíblia!\n\nNível: ${lastLevelName}\nVocê consegue me superar?\n\nFaça o teste: ${window.location.origin}/quiz.html\n\n📊 Ver ranking: ${window.location.origin}/ranking.html`;
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Track share event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'share', {
        method: 'WhatsApp',
        content_type: 'quiz_result',
        item_id: 'quiz_result'
      });
    }
  });
}

// ---------------------------
// QUICK WINS: Load Saved Progress (Quick Win #5)
// ---------------------------
function attemptProgressRestore() {
  const savedProgress = loadProgress();
  
  if (!savedProgress) return false;
  
  // Ask user if they want to continue
  const shouldContinue = confirm(
    `Você tem um teste em andamento (pergunta ${savedProgress.currentIndex + 1} de ${QUESTIONS_PER_TEST}).\n\nDeseja continuar de onde parou?`
  );
  
  if (!shouldContinue) {
    clearProgress();
    return false;
  }
  
  // Restore state
  questionsAsked = savedProgress.questionsAsked;
  answers = savedProgress.answers;
  currentIndex = savedProgress.currentIndex;
  score = savedProgress.score || 0;
  currentDifficultyIndex = savedProgress.currentDifficultyIndex || 1;
  
  // Rebuild remaining questions pool
  remainingByDifficulty = {
    iniciante: shuffle(allQuestions.filter(q => q.difficulty === "iniciante")),
    "intermediário": shuffle(allQuestions.filter(q => q.difficulty === "intermediário")),
    avançado: shuffle(allQuestions.filter(q => q.difficulty === "avançado"))
  };
  
  return true;
}

// Sistema de Grupos de Igreja
function setupGroupSystem() {
  const groupCodeInput = document.getElementById('group-code-input');
  const joinGroupBtn = document.getElementById('join-group-btn');
  const createGroupBtn = document.getElementById('create-group-btn');
  const groupStatus = document.getElementById('group-status');
  const currentGroupDiv = document.getElementById('current-group');
  const groupNameDisplay = document.getElementById('group-name-display');
  const groupRankingLink = document.getElementById('group-ranking-link');
  
  // Verificar se já está em um grupo
  function checkCurrentGroup() {
    const currentGroup = localStorage.getItem('church_group');
    if (currentGroup) {
      currentGroupDiv.classList.remove('hidden');
      groupNameDisplay.textContent = currentGroup;
      groupRankingLink.href = `ranking.html?group=${encodeURIComponent(currentGroup)}`;
    }
  }
  
  // Criar novo grupo
  if (createGroupBtn) {
    createGroupBtn.addEventListener('click', () => {
      const randomCode = 'GRUPO-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      groupCodeInput.value = randomCode;
      groupStatus.textContent = `💡 Código gerado: ${randomCode} - Clique em "Entrar" para criar`;
      groupStatus.className = 'text-[11px] text-blue-400';
    });
  }
  
  // Entrar em grupo
  if (joinGroupBtn) {
    joinGroupBtn.addEventListener('click', () => {
      const code = groupCodeInput.value.trim().toUpperCase();
      
      if (!code) {
        groupStatus.textContent = '⚠️ Digite um código de grupo';
        groupStatus.className = 'text-[11px] text-amber-400';
        return;
      }
      
      if (code.length < 5) {
        groupStatus.textContent = '⚠️ Código deve ter pelo menos 5 caracteres';
        groupStatus.className = 'text-[11px] text-amber-400';
        return;
      }
      
      // Salvar grupo
      localStorage.setItem('church_group', code);
      
      groupStatus.textContent = `✅ Você entrou no grupo: ${code}`;
      groupStatus.className = 'text-[11px] text-emerald-400';
      
      checkCurrentGroup();
      
      // Limpar após 3 segundos
      setTimeout(() => {
        groupCodeInput.value = '';
        groupStatus.textContent = '';
      }, 3000);
    });
  }
  
  checkCurrentGroup();
}

// Inicialização
setupThemeToggle();
setupSoundToggle();
setupWhatsAppShare();
setupGroupSystem();

// Try to restore progress
const progressRestored = attemptProgressRestore();

if (!progressRestored) {
  resetRemaining();
  pickNextQuestion();
}

renderQuestion();

// Botão de refazer teste
retryBtn.addEventListener("click", () => {
  clearProgress();
  resetRemaining();
  pickNextQuestion();
  currentIndex = 0;
  score = 0;
  testStartTime = Date.now();
  quizSection.classList.remove("hidden");
  resultSection.classList.add("hidden");
  renderQuestion();
});
