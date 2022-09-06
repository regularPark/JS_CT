const solution = (arr) => {
  let answer = 0;
  let row = arr.length;
  let col = arr[0].length;

  if (row < 2 || col < 2) return 1;

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (arr[i][j] !== 0) {
        let min = Math.min(
          Math.min(arr[i - 1][j - 1], arr[i][j - 1], arr[i - 1][j])
        );
        arr[i][j] = min + 1;
      }
      if (answer < arr[i][j]) answer = arr[i][j];
    }
  }
  return answer * answer;
};

console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ])
);
console.log(
  solution([
    [0, 0, 1, 1],
    [1, 1, 1, 1],
  ])
);
