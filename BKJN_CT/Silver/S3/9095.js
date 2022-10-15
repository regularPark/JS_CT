const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = input.shift();
const arr = [0, 1, 2, 4];

for (let i = 0; i < T; i++) {
  let num = input[i];
  for (let j = 4; j <= num; j++) {
    arr[j] = arr[j - 3] + arr[j - 2] + arr[j - 1];
  }
  console.log(arr[num]);
}
