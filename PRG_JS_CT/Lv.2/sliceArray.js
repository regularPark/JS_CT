const solution = (n, left, right) => {
  let answer = [];

  for (let i = left; i <= right; i++) {
    let share = parseInt(i / n);
    let remainder = i % n;
    answer.push(Math.max(share, remainder) + 1);
  }

  return answer;
};

console.log(solution(4, 7, 14));
