import fs from 'node:fs/promises';
import { parseLine } from './lib/parse.js';
import {
  generateIndexHtml,
  generateQuestionCategoryHtml,
  generateQuestionHtml,
} from './lib/html.js';

const MAX_QUESTIONS_PER_CATEGORY = 100;

function createQuestionHtml(questions, catNumber, qualityNumber, catName) {
  const selectedQuestions = questions
    .filter(
      (q) => q && q.categoryNumber === catNumber && q.quality === qualityNumber,
    )
    .slice(0, MAX_QUESTIONS_PER_CATEGORY);

  const selectedQuestionsHtml = selectedQuestions
    .map(generateQuestionHtml)
    .join('\n');

  const selectedQuestionsOutput = generateQuestionCategoryHtml(
    catName,
    selectedQuestionsHtml,
  );

  return selectedQuestionsOutput;
}

async function main() {
  // Búa til dist möppu ef ekki til
  const distPath = './dist';
  await fs.mkdir(distPath);

  const content = await fs.readFile('./questions.csv', 'utf-8');

  const lines = content.split('\n');

  const questions = lines.map(parseLine);

  //Búa til HTML fyrir alla flokka
  const generalQuestions = createQuestionHtml(
    questions,
    '1',
    '3',
    'Almenn kunnátta',
  );
  const generalPath = `./dist/almennt.html`;
  await fs.writeFile(generalPath, generalQuestions, 'utf-8');

  const natureAndScienceQuestions = createQuestionHtml(
    questions,
    '2',
    '3',
    'Náttúra og vísindi',
  );
  const naturePath = `./dist/nattura.html`;
  await fs.writeFile(naturePath, natureAndScienceQuestions, 'utf-8');

  const litratureAndArtQuestions = createQuestionHtml(
    questions,
    '3',
    '3',
    'Bókmenntir og listir',
  );
  const litPath = `./dist/bokmenntir.html`;
  await fs.writeFile(litPath, litratureAndArtQuestions, 'utf-8');

  const historyQuestions = createQuestionHtml(questions, '4', '3', 'Saga');
  const historyPath = `./dist/saga.html`;
  await fs.writeFile(historyPath, historyQuestions, 'utf-8');

  const geographyQuestions = createQuestionHtml(
    questions,
    '5',
    '3',
    'Landafræði',
  );
  const geoPath = `./dist/landafraedi.html`;
  await fs.writeFile(geoPath, geographyQuestions, 'utf-8');

  const recQuestions = createQuestionHtml(
    questions,
    '6',
    '3',
    'Skemmtun og afþreying',
  );
  const recPath = `./dist/skemmtun.html`;
  await fs.writeFile(recPath, recQuestions, 'utf-8');

  const sportsQuestions = createQuestionHtml(
    questions,
    '7',
    '3',
    'Íþróttir og tómstundir',
  );
  const sportPath = './dist/ithrottir.html';
  await fs.writeFile(sportPath, sportsQuestions, 'utf-8');


  // TODO bæta index.html skrá
  const indexHtml = generateIndexHtml();

  await fs.writeFile('./dist/index.html', indexHtml, 'utf-8');
}

main().catch((error) => {
  console.error('error generating', error);
});
