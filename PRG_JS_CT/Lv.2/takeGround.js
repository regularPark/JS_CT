const solution = (ground) => {
  let answer = 0;
  let len = ground.length;
  let tmp = [];
  ground.forEach((val) => {
    tmp.push(val.slice());
  });
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (j == k) continue;
        tmp[i][k] = Math.max(tmp[i - 1][j] + ground[i][k], tmp[i][k]);
      }
    }
  }
  answer = Math.max(...tmp[len - 1]);

  return answer;
};

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
