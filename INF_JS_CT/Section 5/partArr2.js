const solution = (m, arr) => {
  let answer = 0;
  let n = arr.length;
  let lp = (sum = 0);
  for (let rp = 0; rp < n; rp++) {
    sum += arr[rp];
    while (sum > m) {
      sum -= arr[lp++];
    }
    answer += rp - lp + 1;
  }
  return answer;
};

console.log(solution(5, [1, 3, 1, 2, 3]));
