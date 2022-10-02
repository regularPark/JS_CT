const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

const n = +input;
const li = [1, 5, 10, 50];
let answer = [1, 5, 10, 50];

let cnt = 1;

while (cnt < n) {
  let tmp = [];
  li.forEach((val) => {
    for (let i = 0; i < li.length; i++) {
      tmp.push(li[i] + val);
    }
  });
  answer = [...new Set(tmp)];
  cnt++;
}

console.log(answer.length);
