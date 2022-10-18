const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
let answer = "";
// set으로 만들어서 ?
let numSet = new Set();

let arr = input
  .shift()
  .split(" ")
  .map((v) => +v);

for (let x of arr) {
  numSet.add(x);
}

const newArr = Array.from(numSet);

newArr.sort((a, b) => a - b);

let dict = {};
newArr.forEach((val, idx) => {
  dict[val] = idx;
});

for (let i = 0; i < arr.length; i++) {
  answer += dict[arr[i]] + " ";
}

console.log(answer);

// console.log(answer.join(" ").trim());
