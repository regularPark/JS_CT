const solution = (day, arr) => {
  let answer = 0;
  for (let num of arr) {
    if (num % 10 === day) {
      answer++;
    }
  }
  return answer;
};

console.log(solution(3, [33, 23, 11, 17, 43]));
