const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const n = Number(input.shift());

const comma = '.';
const short = '...';
const long = '......';

if (n <= 25) {
  console.log(input.shift());
  return;
}

let sentence = input.shift();

if (
  (sentence.slice(11, -11).includes(comma) &&
    sentence.slice(11, -11).indexOf(comma) !==
      sentence.slice(11, -11).lastIndexOf(comma)) ||
  (sentence.slice(11, -11).includes(comma) &&
    sentence.slice(11, -11).indexOf(comma) ===
      sentence.slice(11, -11).lastIndexOf(comma) &&
    sentence.slice(11, -11)[sentence.slice(11, -11).length - 1] !== '.')
) {
  console.log(sentence.slice(0, 9) + long + sentence.slice(-10));
} else {
  console.log(sentence.slice(0, 11) + short + sentence.slice(-11));
}
