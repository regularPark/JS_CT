const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const russian = {
  B: 'v',
  E: 'ye',
  H: 'n',
  P: 'r',
  C: 's',
  Y: 'u',
  X: 'h',
};

let word = input;

for (let i = 0; i < word.length; i++) {
  if (russian[word[i]]) {
    word = word.replace(word[i], russian[word[i]]);
  }
}

console.log(word.toLowerCase());
