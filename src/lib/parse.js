export function parseQuestions() {
  return 'test';
}

export function parseLine(line) {
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
