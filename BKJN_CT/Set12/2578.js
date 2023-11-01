const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8') // filePath를 0으로 바꿨어야 하는 문제
  .toString()
  .trim()
  .split('\n');

const csBoard = input.splice(0, 5).join(' ').split(' ');

const mcBoard = input.join(' ').split(' ');

const checked = [];

const visitedX = [0, 0, 0, 0, 0];
const visitedY = [0, 0, 0, 0, 0];
let visitedLD = 0;
let visitedRD = 0;

mcBoard.forEach((val) => {
  checked.push(csBoard.indexOf(val));
});

for (let i = 0; i < checked.length; i++) {
  visitedX[Math.floor(checked[i] / 5)] += 1;
  visitedY[checked[i] % 5] += 1;

  if (Math.floor(checked[i] / 5) == checked[i] % 5) visitedLD += 1;
  if (Math.floor(checked[i] / 5) + (checked[i] % 5) == 4) visitedRD += 1;

  if (
    visitedX.filter((v) => v == 5).length +
      visitedY.filter((v) => v == 5).length +
      Math.floor(visitedLD / 5) +
      Math.floor(visitedRD / 5) >=
    3
  ) {
    console.log(i + 1);
    break;
  }
}
