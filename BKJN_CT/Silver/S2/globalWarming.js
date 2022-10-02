const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [r, c] = input.shift().split(" ").map(Number);

const mapList = [];
const answer = [];

for (let i = 0; i < r; i++) {
  mapList.push(input.shift().split(""));
}

const isSink = (r, c) => {
  let cnt = 0;
  if (mapList[r - 1][c] === ".") cnt++;
  if (mapList[r + 1][c] === ".") cnt++;
  if (mapList[r][c - 1] === ".") cnt++;
  if (mapList[r][c + 1] === ".") cnt++;

  return cnt > 2 ? true : false;
};

for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (mapList[i][j] === "X") {
      if (isSink(i, j)) {
        answer.push(".");
      } else answer.push("X");
    }
  }
}

console.log(answer);
