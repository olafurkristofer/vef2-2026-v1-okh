export function generateIndexHtml() {
  const html = /* HTML */ ` <html>
    <head>
      <script src="scripts.js" type="module"></script>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <h1>Spurningaleikur!</h1>
      <p>Velkomin! Hér eru bestu spurningarnar sem ég get boðið upp á. Veldu flokkinn sem þú vilt svara.</p>
      <ul>
        <li><a href="almennt.html">Almenn kunnátta</a></li>
        <li><a href="nattura.html">Náttúra og vísindi</a></li>
        <li><a href="bokmenntir.html">Bókmenntir og listir</a></li>
        <li><a href="saga.html">Saga</a></li>
        <li><a href="landafraedi.html">Landafræði</a></li>
        <li><a href="skemmtun.html">Skemmtun og afþreying</a></li>
        <li><a href="ithrottir.html">Íþróttir og tómstundir</a></li>
      </ul>
    </body>
  </html>`;

  return html;
}

export function generateQuestionHtml(q) {
  const html = /* HTML */ ` <section class="question" data-answered="false">
    <h3>${q.question}</h3>
    <p class = "answer" hidden>${q.answer}</p>
    <button type="button" class="button button-toggle-answer">Sýna svar</button>
    <button type="button" class="button button-correct" hidden>Rétt 🫡</button>
    <button type="button" class="button button-incorrect" hidden>Rangt 🥹</button>
  </section>`;

  return html;
}

export function generateQuestionCategoryHtml(title, questionsHtml) {
  const html = /* HTML */ `
    <html>
      <head>
        <script src="scripts.js" type="module"></script>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <h1>Spurningaleikur!</h1>
        <p><a href="index.html" class="back-button">Til baka</a></p>
        <div class="counter">
          <div class="correct">0</div>
          <div class="incorrect">0</div>
        </div>
        <div class="questions">
          <h2>${title}</h2>
          ${questionsHtml}
        </div>
      </body>
    </html>
  `;

  return html;
}
