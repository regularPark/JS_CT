const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let arr = input[1].split(" ").map((x) => +x);

let n = arr.length;

let max = arr[0];

for (let i = 1; i < n; i++) {
  if (arr[i - 1] > 0 && arr[i] + arr[i - 1] > 0) {
    arr[i] += arr[i - 1];
  }

  if (max < arr[i]) max = arr[i];
}

// console.log(arr);

console.log(max);
