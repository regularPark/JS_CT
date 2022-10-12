const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
let answer = "";

for (let i = 0; input.length; i += 3) {
  let isReversed = false;
  let cycle = input.splice(0, 3);
  let cmd = cycle[0].split("");
  let arr = cycle[2].slice(1, -2).split(",");

  for (let x of cmd) {
    var isEmpty = false;

    if (x === "R") isReversed = !isReversed;
    else if (x === "D") {
      if (arr.length === 0 || Number(cycle[1]) === 0) {
        answer += "error\n";
        isEmpty = !isEmpty;
        break;
      }
      isReversed ? arr.pop() : arr.shift();
    }
  }

  if (isReversed) arr.reverse();
  if (!isEmpty) answer += "[" + arr.join(",") + "]\n";
}

console.log(answer.trim());
