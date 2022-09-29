const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = input.shift();

const numbers = [];
for (let i = 1; i <= n; i++) {
  numbers.push(i);
}

const li = input[0].split(" ").map(Number);
// console.log(li);

// console.log(li);

if (li.every((el, idx) => el === numbers[idx])) console.log(-1);
else {
  let i = n - 2;
  while (li[i] < li[i + 1]) i--;

  let j = n - 1;
  while (li[i] < li[j]) j--;

  [li[i], li[j]] = [li[j], li[i]];

  let next = li.slice(i + 1);
  next.sort((a, b) => b - a);
  console.log([...li.slice(0, i + 1), ...next].join(" "));
}
