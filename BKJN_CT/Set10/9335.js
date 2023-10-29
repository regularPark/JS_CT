const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const N = input.shift();

for (let i = 0; i < N; i++) {
  const ad = input.shift();
  const adSet = new Set();
  for (let j = 0; j < Number(ad); j++) {
    adSet.add([j + 1, ...input.shift().split(' ').splice(1)].map(Number));
  }

  let answer = 0;

  adSet.forEach((val, key) => {});

  console.log(adSet);

  console.log(answer);
}
