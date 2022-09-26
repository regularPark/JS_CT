const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = 0;
const [n, m] = input.shift().split(" ");
const [r, c, d] = input.shift().split(" ");
const room = [];

for (let i = 0; i < input.length; i++) {
  let tmp = input[i].split(" ").map(Number);
  room.push(tmp);
}

for(let )

console.log(room);
