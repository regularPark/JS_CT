const solution = (b, y) => {
  let answer = [];
  for (let i = 1; i <= y; i++) {
    if (y % i === 0 && y / i >= i && (y / i + 2) * 2 + (i + 2) * 2 - 4 === b) {
      answer.push(parseInt(y / i) + 2);
      answer.push(i + 2);
    }
  }
  return answer;
};

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
