const solution = (n, arr) => {
  let answer = 0;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }
  return answer;
};

console.log(solution(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
