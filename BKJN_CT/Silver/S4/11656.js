const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("");

const li = [];

while (input.length > 0) {
  li.push(input.join(""));
  input.shift();
}

li.sort((a, b) => {
  if (a > b) return 1;
  else return -1;
});
console.log(li.join("\n"));
