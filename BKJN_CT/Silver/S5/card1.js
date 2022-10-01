const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

const n = input;

// console.log(n);
const li = [];
const answer = [];
for (let i = 1; i <= n; i++) {
  li.push(i);
}

let cnt = 0;
while (li.length > 1) {
  cnt++;
  if (cnt % 2 === 1) {
    let discard = li.shift();
    answer.push(discard);
  } else {
    let tmp = li.shift();
    li.push(tmp);
  }
}

console.log([...answer, ...li].join(" "));
