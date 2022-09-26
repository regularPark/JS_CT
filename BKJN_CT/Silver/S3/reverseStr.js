const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("");

let answer = "";
let isSign = false;
let tmp = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] === "<") {
    isSign = true;
    answer += tmp.split("").reverse().join("");
    answer += input[i];
    tmp = "";
  } else if (isSign && input[i] === ">") {
    isSign = false;
    answer += tmp + input[i];
    tmp = "";
  } else if (!isSign && input[i] === " ") {
    answer += tmp.split("").reverse().join("") + input[i];
    tmp = "";
  } else if (!isSign && i === input.length - 1) {
    answer += input[i] + tmp.split("").reverse().join("");
    tmp = "";
  } else {
    tmp += input[i];
  }
}

console.log(answer.replace(/\n/g, ""));

/**short coding */
const input_ = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(
  input_.replace(/<[a-z0-9 ]+>|[a-z0-9]+/g, (match) => {
    if (match.startsWith("<")) {
      return match;
    }
    return [...match].reverse().join("");
  })
);
