/* útfæra */

const correctElement = document.querySelector('.counter .correct');
const incorrectElement = document.querySelector('.counter .incorrect');

if (!correctElement || !incorrectElement) {
  console.error('unable to find elements');
}

function questionAnswerHandler(e) {
  const button = e.target;

  const isCorrect = button.classList.contains('button-correct');
  const isIncorrect = button.classList.contains('button-incorrect');
  if (!isCorrect && !isIncorrect) return;

  const parentQuestion = button.closest('.question');

  if (!correctElement) {
    throw new Error('missing correct element');
  }

  if (isCorrect) {
    const currentCorrectText = correctElement.textContent;
    const currentCorrect = Number.parseInt(currentCorrectText ?? '0');

    const updatedCorrect = currentCorrect + 1;

    correctElement.textContent = updatedCorrect.toString();
  } else {
    const currentIncorrectText = incorrectElement.textContent;
    const currentIncorrect = Number.parseInt(currentIncorrectText ?? '0');

    const updatedIncorrect = currentIncorrect + 1;

    incorrectElement.textContent = updatedIncorrect.toString();
  }

  parentQuestion.querySelector('.button.button-correct').remove();
  parentQuestion.querySelector('.button.button-incorrect').remove();
}

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', questionAnswerHandler);
}

function toggleAnswerHandler(e) {
  const button = e.target;
  if (!button.classList.contains('button-toggle-answer')) return;

  const questionEl = button.closest('.question');
  if (!questionEl) return;

  const answerEl = questionEl.querySelector('.answer');
  if (!answerEl) return;

  const correctButton = questionEl.querySelector('.button.button-correct');
  const incorrectButton = questionEl.querySelector('.button.button-incorrect');

  const isHidden = answerEl.hasAttribute('hidden');

  if (isHidden) {
    answerEl.removeAttribute('hidden');
    button.textContent = 'Fela svar';

    correctButton.removeAttribute('hidden');
    incorrectButton.removeAttribute('hidden');
  } else {
    answerEl.setAttribute('hidden', '');
    button.textContent = 'Sýna svar';
  }
}

document.addEventListener('click', toggleAnswerHandler);
