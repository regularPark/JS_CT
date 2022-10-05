const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input.pop();

const target = "()[]";
let answer = input.map((sentence) => {
  const stack = [];
  for (let word of sentence) {
    if (!target.includes(word)) continue;
    if (word === "(" || word === "[") stack.push(word);
    else if (word === ")") {
      if (stack.length === 0 || stack[stack.length - 1] !== "(") return "no";
      stack.pop();
    } else if (word === "]") {
      if (stack.length === 0 || stack[stack.length - 1] !== "[") return "no";
      stack.pop();
    }
  }
  if (stack.length === 0) return "yes";
  return "no";
});

console.log(answer.join("\n"));
