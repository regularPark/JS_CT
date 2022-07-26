const solution = (n) => {
  let answer = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    answer[i] = (answer[i - 2] + answer[i - 1]) % 1234567;
  }
  return answer[n];
};

console.log(solution(5));
