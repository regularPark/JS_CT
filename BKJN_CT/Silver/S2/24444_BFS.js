// const input = require("fs")
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

// const [N, M, R] = input
//   .shift()
//   .split(" ")
//   .map((v) => +v);

// let visited = new Array(N + 1).fill(0);
// visited[R] = 1;
// let cnt = 1;
// let graph = new Map();
// for (let i = 0; i < N; i++) {
//   graph.set(i + 1, []);
// }

// for (let x of input) {
//   let [start, end] = x.split(" ").map((v) => +v);
//   graph.get(start).push(end);
//   graph.get(end).push(start);
// }

// graph.forEach((v) => {
//   v.sort((a, b) => a - b);
// });

// const queue = [];

// function bfs(r) {
//   graph.get(r).forEach((v) => {
//     {
//       if (visited[v] === 0) {
//         cnt++;
//         visited[v] = cnt;
//         queue.push(v);
//       }
//     }
//   });

//   newR = queue.shift();
//   if (newR <= graph.size) bfs(newR);
// }

// bfs(R);

// console.log(visited.slice(1).join("\n"));

/** fast code */

let a = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");
const [n, m, k] = a
  .shift()
  .split(" ")
  .map((v) => +v);

const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < a.length; i++) {
  let [from, to] = a[i].split(" ").map((v) => +v);
  graph[from].push(to);
  graph[to].push(from);
}

let visited = Array(n + 1).fill(0);
let cnt = 1;
function bfs(start) {
  let queue = [start];
  let top = 0;
  while (queue.length != top) {
    let node = queue[top++];
    if (visited[node]) continue;
    visited[node] = cnt++;
    queue.push(...graph[node]);
  }
  return visited;
}
graph.forEach((v) => v.sort((a, b) => a - b));
bfs(k);
console.log(visited.slice(1).join("\n"));
