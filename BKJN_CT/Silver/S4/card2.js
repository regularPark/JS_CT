const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

const n = +input;
const li = [];

for (let i = 1; i <= n; i++) {
  li.push(i);
}

let cnt = 0;
while (li.length > 1) {
  cnt++;
  if (cnt % 2 === 1) {
    li.splice(0, 1);
  } else {
    let tmp = li.splice(0, 1);
    li.push(tmp);
  }
}

console.log(li.join());
