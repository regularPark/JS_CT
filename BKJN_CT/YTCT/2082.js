const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8') // filePath를 0으로 바꿨어야 하는 문제
  .toString()
  .trim()
  .split('\n');

const digit = [
  '####.##.##.####',
  '..#..#..#..#..#',
  '###..#####..###',
  '###..####..####',
  '#.##.####..#..#',
  '####..###..####',
  '####..####.####',
  '###..#..#..#..#',
  '####.#####.####',
  '####.####..####',
];

const board = new Array(4).fill('');
input.map((v) => {
  const line = v.split(' ');
  board[0] += line[0];
  board[1] += line[1];
  board[2] += line[2];
  board[3] += line[3];
});

let answer = '';

let i = 0,
  j = 0,
  k = 0;
for (i = 0; i < 4; i++) {
  for (j = 0; j < 10; j++) {
    for (k = 0; k < 15; k++) {
      if (digit[j][k] == '.' && board[i][k] === '#') break;
    }
    if (k == 15) {
      answer += j;
      break;
    }
  }
  if (i == 1) answer += ':';
}

console.log(answer);
