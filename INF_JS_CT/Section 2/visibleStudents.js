const solution = (n, arr) => {
  let answer = 0;
  let tallest = -1;
  for (let i = 0; i < n; i++) {
    if (tallest < arr[i]) {
      answer++;
      tallest = arr[i];
    }
  }
  return answer;
};

console.log(solution(8, [130, 135, 148, 140, 145, 150, 150, 153]));
