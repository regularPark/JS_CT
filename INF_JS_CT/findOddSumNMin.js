const solution = (...arguments) => {
  const answer = [];
  let sum = 0;
  let min = Infinity;
  for (let num of arguments) {
    if (num % 2 === 1) {
      sum += num;
      min = Math.min(min, num);
    }
  }

  answer.push(sum);
  answer.push(min);
  return answer;
};

console.log(solution(12, 77, 38, 41, 53, 92, 85));
