const { hasUncaughtExceptionCaptureCallback } = require("process");

const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const chick_pos = [];
const house_pos = [];

const answer = input.map((x) => x.split(" "));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (Number(answer[i][j]) === 2) chick_pos.push([i + 1, j + 1]);
    else if (Number(answer[i][j]) === 1) house_pos.push([i + 1, j + 1]);
  }
}

let chick_dist = [];

for (let i = 0; i < chick_pos.length; i++) {
  chick_dist.push([]);
  for (let j = 0; j < house_pos.length; j++) {
    chick_dist[i].push(
      Math.abs(chick_pos[i][0] - house_pos[j][0]) +
        Math.abs(chick_pos[i][1] - house_pos[j][1])
    );
  }
}

console.log(chick_pos);
console.log(house_pos);

console.log(chick_dist);

// chick;
