const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

const li = [];

for (let x of input) {
  li.push(x.split(" ").map(Number));
}

li.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else return a[1] - b[1];
});

console.log(li);
let i = 0;
let cnt = 0;
let endTime = 0;

while (i < N) {
  const [start, end] = li[i++];
  if (start >= endTime) {
    cnt++;
    endTime = end;
  }
}

console.log(cnt);
