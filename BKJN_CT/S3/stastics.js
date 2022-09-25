const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const amount = Number(input[0]);
const li = [];
const mid = Math.floor(amount / 2);
let freq = {};

for (let i = 1; i < input.length; i++) {
  li.push(Number(input[i]));
}
li.sort((a, b) => b - a);

for (let i = 0; i < li.length; i++) {
  freq[li[i]] ? freq[li[i]]++ : (freq[li[i]] = 1);
}

let avg = Math.round(li.reduce((a, b) => a + b) / amount);
let range = Math.abs(li[0] - li[li.length - 1]);
let freqLi = Object.entries(freq).sort((a, b) => b[1] - a[1]);
let mostFreq = [Number(freqLi[0][0])];

if (amount > 1 && freqLi[0][1] === freqLi[1][1]) {
  let mostIdx = 0;
  for (var i = 1; i < freqLi.length; i++) {
    if (freqLi[mostIdx][1] > freqLi[i][1]) break;
    mostFreq.push(Number(freqLi[i][0]));
  }
}
mostFreq.sort((a, b) => a - b);

console.log(avg === -0 ? 0 : avg);
console.log(li[mid]);
console.log(mostFreq.length > 1 ? mostFreq[1] : mostFreq[0]);
console.log(range);
