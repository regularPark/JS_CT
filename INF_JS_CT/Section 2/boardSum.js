const solution = (arr) => {
  let answer;
  let len = arr.length;

  // col
  for (let i = 0; i < len; i++) {
    let c_sum = 0;
    let r_sum = 0;
    for (let j = 0; j < len; j++) {
      c_sum += arr[i][j];
      r_sum += arr[j][i];
    }
    answer = Math.max(c_sum, r_sum);
  }

  let ld_sum = 0;
  let rd_sum = 0;
  for (let i = 0; i < len; i++) {
    ld_sum += arr[i][i];
    rd_sum += arr[i][len - i - 1];
  }
  console.log(rd_sum, ld_sum);
  answer = Math.max(answer, rd_sum, ld_sum);
  return answer;
};

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
