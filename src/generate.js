import fs from 'node:fs/promises';

const MAX_QUESTIONS_PER_CATEGORY = 100;

function parseLine(line) {
  const split = line.split(',');
  // TODO mappa categoryNumber í streng svk skölun
  // og ákveða formatið á gögnunum
  const catergoryNumber = split[0];
  const subCategory = split[1];
  const difficulty = split[2];
  const quality = split[3];
  const question = split[4];
  const answer = split[5];

  const q = {
    catergoryNumber,
    subCategory,
    difficulty,
    quality,
    question,
    answer,
  };

  return q;
}

function generateQuestionsHtml(q) {
  const html = `
  <section>
    <h3>${q.question}</h3>
    <p>${q.answer}</p>
  </section>`;

  return html
}

async function main() {
  const content = await fs.readFile('./questions.csv', 'utf-8');
  const lines = content.split('\n');

  const questions = lines.map(parseLine);

  const qualityHistoryQuestions = questions
    .filter((q) => q.catergoryNumber === "4" && q.quality === "3")
    .slice(0, MAX_QUESTIONS_PER_CATEGORY);

  const output = qualityHistoryQuestions.map(generateQuestionsHtml).join('\n');
  const path = './dist/saga.html';

  fs.writeFile(path, output, 'utf-8');
}

main().catch((error) => {
  console.error('error generating', error);
});