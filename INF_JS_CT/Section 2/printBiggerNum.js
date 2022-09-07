const solution = (n, arr) => {
  let answer = [];
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
};

console.log(solution(6, [7, 3, 9, 5, 6, 12]));
