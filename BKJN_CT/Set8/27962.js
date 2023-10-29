const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());

const word = input.shift().split('');

let flag = false;

for (let i = 1; i < word.length; i++) {
  let frontWord = word.slice(0, i);
  let backWord;
  let cnt = 0;
  for (let j = word.length - 1; j > 0; j--) {
    if (frontWord.length === word.slice(j, word.length).length)
      backWord = word.slice(j, word.length);
  }
  if (backWord !== undefined && frontWord.length === backWord.length) {
    frontWord.forEach((val, idx) => {
      if (frontWord[idx] !== backWord[idx]) {
        cnt++;
      }
    });
  }
  if (cnt === 1) flag = true;
}

console.log(flag ? 'YES' : 'NO');
