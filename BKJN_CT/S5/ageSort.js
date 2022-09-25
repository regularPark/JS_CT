const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

// const li = [];
// const answer = [];

// for (let i = 1; i < input.length; i++) {
//   li.push(input[i]);
// }

// for (let j = 0; j < li.length; j++) {
//   let tmp = li[j].split(" ");
//   answer.push(tmp);
// }

// answer.sort((a, b) => {
//   if (a[0] === b[0]) return;
//   else {
//     return a[0] - b[0];
//   }
// });

// for (let k = 0; k < answer.length; k++) {
//   console.log(answer[k][0] + " " + answer[k][1]);
// }

const len = input.shift();

input.sort((a, b) => parseInt(a) - parseInt(b));

console.log(input.join("\n"));
