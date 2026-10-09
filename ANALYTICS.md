# Eventos do quiz no Google Analytics 4

## Diagnóstico e implementação

A tag `G-LMCF5N3D6X` estava apenas em `index.html`. Ao navegar para
`quiz.html`, o contexto JavaScript da página inicial era descartado: o quiz
não tinha `gtag` nem eventos de início/fim. O evento `clique_fazer_teste`
media apenas o clique na página inicial, não uma tentativa do quiz. Um acesso
direto ao quiz não passava por esse clique. O elemento `score-preview` também
estava comentado no HTML, mas o JavaScript tentava atualizá-lo, interrompendo
a inicialização.

`analytics.js` agora inicializa a mesma propriedade nas três páginas. A fila
`dataLayer` recebe eventos mesmo enquanto a biblioteca assíncrona do Google
carrega. O guard para `score-preview` evita a exceção existente.

| Evento | Momento | Parâmetros específicos |
| --- | --- | --- |
| `quiz_start` | Primeira pergunta apresentada em uma nova tentativa, inclusive acesso direto e botão de refazer | `question_count` |
| `quiz_complete` | Depois da última resposta e do cálculo da pontuação, antes do POST/redirecionamento do ranking | `question_count`, `correct_answers`, `score`, `level`, `duration_seconds` |

Ambos incluem `quiz_id` e `quiz_attempt_id`. O ID da tentativa, o início e a
marcação do evento inicial são persistidos junto ao progresso. Aceitar a
retomada não emite outro início; recusar a retomada ou refazer cria outra
tentativa. O fim tem proteção contra repetição na tentativa atual. A duração
é tempo decorrido, incluindo pausas e recargas. Progresso antigo sem os novos
campos recebe um evento de início ao ser retomado.

Nenhum nome, email ou código de igreja é incluído nesses eventos. O transporte
`beacon` é solicitado para favorecer envio durante navegação. A fila e o
transporte não garantem entrega se houver bloqueio de rede, bloqueador de
anúncios, fechamento precoce da página ou configuração incorreta da propriedade.

O Apps Script continua recebendo os resultados do ranking pelo contrato
existente. Ele **não recebe esses eventos de Analytics**: essa integração ficou
para outra etapa, conforme solicitado. Será necessário obter seu `doPost` e
definir um contrato de telemetria separado, para não inserir eventos de início
como resultados no ranking. A resposta opaca de um POST `no-cors` não confirma
que o Apps Script gravou o resultado.

## Teste automatizado

Requer Python 3, Node.js e Chromium. As ferramentas de teste ficam fora do
checkout; não há dependências de produção a instalar.

```sh
npm install --prefix /tmp/testebiblia-validation --cache /tmp/npm-cache --no-audit --no-fund playwright-core
cd /workspace/testebiblia
python3 -m http.server 8000 --bind 127.0.0.1
# Em outro terminal:
cd /workspace/testebiblia
NODE_PATH=/tmp/testebiblia-validation/node_modules node tests/quiz-analytics.cjs
```

`CHROMIUM_PATH` permite escolher o executável; `TEST_BASE_URL` permite escolher
o servidor. O teste abre as três páginas, verifica configuração GA4, início,
validação sem resposta, avanço, recarga/retomada, as 20 respostas, conclusão
antes do ranking e nova tentativa. A tag externa e as chamadas de produção são
interceptadas: valida o código e a fila real da aplicação, sem enviar eventos
ou resultados de teste ao Google. Não comprova ingestão na propriedade GA4.

Para verificar também o transporte com a biblioteca oficial do Google, faça
seu download com TLS verificado e rode o mesmo teste com `GA_TAG_PATH`:

```sh
curl --fail --silent --show-error --location --max-time 30 'https://www.googletagmanager.com/gtag/js?id=G-LMCF5N3D6X' -o /tmp/testebiblia-validation/gtag.js
GA_TAG_PATH=/tmp/testebiblia-validation/gtag.js NODE_PATH=/tmp/testebiblia-validation/node_modules node tests/quiz-analytics.cjs
```

Nesse modo a biblioteca real processa a fila; as requisições `g/collect` são
interceptadas e verificadas quanto ao ID de propriedade, nomes dos eventos,
ID da tentativa e pontuação. Nenhuma coleta chega à propriedade de produção.

## Conferência após publicação do site

1. Publique estes arquivos no site e abra `quiz.html?debug_analytics=1`.
   Essa opção habilita `debug_mode` somente nessa página de teste.
2. No DevTools, confirme HTTP 200 para `analytics.js` e o carregamento de
   `www.googletagmanager.com/gtag/js?id=G-LMCF5N3D6X`. Confirme requisições
   `g/collect` a `www.google-analytics.com` ou `region1.google-analytics.com`,
   com `tid=G-LMCF5N3D6X` e `en=quiz_start`/`en=quiz_complete`.
3. Confira os dois eventos no **DebugView** da propriedade correta. Recarregue
   e aceite continuar: não deve aparecer outro início. Conclua o quiz para
   observar o fim; o site de produção também enviará o resultado ao ranking.
4. Confira **Tempo real**. Relatórios processados podem levar 24–48 horas;
   sua ausência imediata nesses relatórios não prova falha de envio. Verifique
   também filtros de tráfego interno/desenvolvedor e bloqueadores.
5. Para relatórios com parâmetros, registre dimensões de evento para `quiz_id`
   e `level`, e métricas de evento para `score`, `correct_answers`,
   `question_count` e `duration_seconds`. Não registre `quiz_attempt_id` como
   dimensão: sua alta cardinalidade prejudica os relatórios. Pode marcar
   `quiz_complete` como evento principal nas configurações do GA4.

Não é preciso cadastrar os nomes dos eventos previamente para recebê-los.
A confirmação no DebugView exige acesso à propriedade, não disponível neste
repositório. A rede de um ambiente de desenvolvimento precisa permitir
`www.googletagmanager.com`, `www.google-analytics.com` e
`region1.google-analytics.com` para testar envio externo. Uma coleta HTTP
aceita, sozinha, também não comprova exibição na propriedade: confirme no
DebugView após publicar.
