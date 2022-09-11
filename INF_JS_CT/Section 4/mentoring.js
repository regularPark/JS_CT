const solution = (arr) => {
  let answer = 0;
  let n = arr[0].length;
  let m = arr.length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let mento = (mentee = 0);
        for (let l = 0; l < n; l++) {
          if (i === j) continue;
          if (arr[k][l] === i) mento = l;
          if (arr[k][l] === j) mentee = l;
        }
        if (mento < mentee) cnt++;
      }
      // 모든 시험에서 mento가 mentee보다 등수가 높은 경우를 의미
      if (cnt === m) answer++;
    }
  }
  return answer;
};

console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
