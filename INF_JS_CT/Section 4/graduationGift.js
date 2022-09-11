const solution = (m, arr) => {
  let answer = 0;
  let n = arr.length;
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    let budget = m - (arr[i][0] / 2 + arr[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && arr[j][0] + arr[j][1] > budget) break;
      if (j !== i && arr[j][0] + arr[j][1] <= budget) {
        budget -= arr[j][0] + arr[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
};

console.log(
  solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
