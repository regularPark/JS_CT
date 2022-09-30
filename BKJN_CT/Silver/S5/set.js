const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = input.shift();
const li = input.map((x) => x.split(" "));
const answer = new Set();

li.map((cmd) => {
  // add
  if (cmd[0] === "add") {
    answer.add(Number(cmd[1]));
  }

  // check
  else if (cmd[0] === "check") {
    console.log(answer.has(Number(cmd[1])) ? 1 : 0);
  }

  // remove
  else if (cmd[0] === "remove") {
    answer.delete(Number(cmd[1]));
  }

  // toggle
  else if (cmd[0] === "toggle") {
    answer.has(Number(cmd[1]))
      ? answer.delete(Number(cmd[1]))
      : answer.add(Number(cmd[1]));
  }

  // all
  else if (cmd[0] == "all") {
    for (let i = 1; i <= 20; i++) {
      if (!answer.has(i)) answer.add(i);
    }
  }

  // empty
  else if (cmd[0] === "empty/r") {
    answer.clear();
  }
  console.log(cmd[0]);
});

console.log(li);
