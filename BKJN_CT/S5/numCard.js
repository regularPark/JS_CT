const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n");
const hasCard = input[1].split(" ").map(Number);
const checkCard = input[3].split(" ").map(Number);

const set = new Set(hasCard);

let answer = "";

checkCard.map((x) => {
  if (set.has(x)) answer += "1 ";
  else answer += "0 ";
});

console.log(answer);
