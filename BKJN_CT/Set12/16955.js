const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

function check(x, y) {
  for (let i = 0; i < 8; i++) {
    let cnt = 1;
    let empty = 0;
    let newX = x;
    let newY = y;

    for (let j = 0; j < 4; j++) {
      newX += dx[i];
      newY += dy[i];

      if (0 <= newX && newX < 10 && 0 <= newY && newY < 10) {
        if (input[newX][newY] == 'X') cnt++;
        if (input[newX][newY] == '.') empty++;
      }
    }
    if ((cnt == 4 && empty == 1) || cnt > 4) return true;
  }
  return false;
}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (input[i][j] == 'X') {
      if (check(i, j)) {
        console.log(1);
        return;
      }
    }
  }
}
console.log(0);
