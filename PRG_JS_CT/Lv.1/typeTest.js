const initType = { A: 0, N: 0, M: 0, J: 0, R: 0, T: 0, C: 0, F: 0 };

const compareType = (a, b) => (initType[a] >= initType[b] ? a : b);

function solution(survey, choices) {
  const parsedType = survey.map((el) => el.split(''));

  choices.forEach((choice, idx) => {
    if (choice < 4) {
      initType[parsedType[idx][0]] += 4 - choice;
    } else if (choice === 4) {
      return;
    } else {
      initType[parsedType[idx][1]] += choice - 4;
    }
  });

  return (
    compareType('R', 'T') +
    compareType('C', 'F') +
    compareType('J', 'M') +
    compareType('A', 'N')
  );
}

console.log(solution(['TR', 'RT', 'TR'], [7, 1, 3]));
