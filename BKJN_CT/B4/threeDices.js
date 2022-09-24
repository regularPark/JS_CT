const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split(" ");

const li = new Array(6).fill(0);

for (let x of input) {
  li[x - 1]++;
}

if (li.includes(2)) {
  console.log((li.indexOf(2) + 1) * 100 + 1000);
} else if (li.includes(3)) {
  console.log((li.indexOf(3) + 1) * 1000 + 10000);
} else {
  console.log((li.lastIndexOf(1) + 1) * 100);
}
