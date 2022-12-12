const solution = (N) => {
  let answer = 0;
  while (0 < N) {
    if (N % 2 == 1) {
      N -= 1;
      answer += 1;
    }
    N /= 2;
  }
  return answer;
};

console.log(solution(5000));
