const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = 0;
const queue = [];
let sum = 0;

const [n, w, L] = input[0].split(" ").map((v) => +v);
const truckList = input[1].split(" ").map((v) => +v);

for (let i = 0; i < n; i++) {
  while (true) {
    if (queue.length === w) {
      sum -= queue.shift();
    }
    if (sum + truckList[i] <= L) break;
    queue.push(0);
    answer++;
  }
  queue.push(truckList[i]);
  sum += truckList[i];
  answer++;
}

console.log(answer + w);
