const solution = (brown, yellow) => {
  let answer = [];
  for (let i = 1; i <= yellow; i++) {
    if (
      yellow % i == 0 &&
      yellow / i >= i &&
      (yellow / i + 2) * 2 + (i + 2) * 2 - 4 == brown
    ) {
      answer.push(parseInt(yellow / i) + 2);
      answer.push(i + 2);
    }
  }
  return answer;
};

console.log(solution(26, 10));
