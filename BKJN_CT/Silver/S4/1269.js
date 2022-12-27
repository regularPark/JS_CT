const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map(Number));

let first = new Set(input[1]);
let second = new Set(input[2]);
let answer = new Set([...first, ...second]);

first.forEach((num) => {
  if (second.has(num)) answer.delete(num);
});

return answer.size;

/** 시간 초과 */
// for (let num of input[1]) {
//   if (input[2].includes(num)) firstLen--;
// }
// for (let num of input[2]) {
//   if (input[1].includes(num)) secondLen--;
// }

// return firstLen + secondLen;
