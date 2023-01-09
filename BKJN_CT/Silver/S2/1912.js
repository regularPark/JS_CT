const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let arr = input[1].split(" ").map((x) => +x);
console.log(arr);

let answer = arr[0];
let n = +input[0];

let sum = (lp = 0);
const solution = (m) => {
  for (let rp = 0; rp < n; rp++) {
    sum += arr[rp];
    while (sum > m) {
      sum -= arr[lp++];
    }
    answer;
  }
};
