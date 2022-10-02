const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = input.shift();
const line = [];
const tallThan = input.shift().split(" ").map(Number);

for (let i = n - 1; i >= 0; i--) {
  if (tallThan[i] === 0) line.unshift(i + 1);
  else {
    let pt = 0;
    while (pt < tallThan[i]) {
      if (line[pt] > i) {
        pt++;
      }
    }
    line.splice(pt, 0, i + 1);
  }
}

// console.log(tallThan);
console.log(line.join(" "));
