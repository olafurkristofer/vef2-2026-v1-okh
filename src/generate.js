import fs from 'node:fs/promises';
import { parseLine } from './lib/parse.js';

const MAX_QUESTIONS_PER_CATEGORY = 100;


function generateQuestionsHtml(q) {
  const html = `
  <section>
    <h3>${q.question}</h3>
    <p>${q.answer}</p>
  </section>`;

  return html
}

async function main() {

  //Búa til dist möppu ef ekki til
  const distPath = './dist';
  await fs.mkdir(distPath)

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