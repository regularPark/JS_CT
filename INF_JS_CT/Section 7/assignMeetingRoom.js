const solution = (n, arr) => {
  let answer = 1;
  for (let i = 0; i < n; i++) {
    let start = i;
    let end = i + 1;
    let tmp = 1;
    while (end < n) {
      if (arr[start][1] === arr[end][0]) {
        tmp++;
        start = end;
      }
      end++;
    }
    answer = Math.max(answer, tmp);
  }
  return answer;
};

console.log(
  solution(5, [
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
