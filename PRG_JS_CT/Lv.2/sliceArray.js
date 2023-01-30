const solution = (n, left, right) => {
  let answer = [];

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(parseInt(i / n), i % n) + 1);
  }

  return answer;
};

console.log(solution(4, 7, 14));
