export function parseLine(line) {
  const split = line.split(',');

  if(split.length !== 6) {
    return null;
  }

  const categoryNumber = split[0];
  const subCategory = split[1];
  const difficulty = split[2];
  const quality = split[3];
  const question = split[4];
  const answer = split[5];

  const q = {
    categoryNumber,
    subCategory,
    difficulty,
    quality,
    question,
    answer,
  };

  return q;
}
