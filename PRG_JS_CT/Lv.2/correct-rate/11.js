const solution = (n, words) => {
  let answer = [];
  let chkList = {};
  for (let i = 0; i < words.length; i++) {
    if (
      chkList[words[i]] ||
      (i > 0 && words[i - 1][words[i - 1].length - 1] !== words[i][0])
    ) {
      answer.push((i + 1) % n ? (i + 1) % n : n, Math.ceil((i + 1) / n));
      break;
    } else {
      chkList[words[i]] = 1;
    }
  }

  return answer.length ? answer : [0, 0];
};

console.log(
  solution(3, [
    'tank',
    'kick',
    'know',
    'wheel',
    'land',
    'dream',
    'mother',
    'robot',
    'tank',
  ])
);
