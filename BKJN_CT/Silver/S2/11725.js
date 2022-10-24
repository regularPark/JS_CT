const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const numOfVertex = +input.shift();

const edges = input.map((v) => v.split(" ").map((v) => +v));
const tree = [...Array(numOfVertex + 1)].map(() => []);
const answer = []; // 부모를 입력

edges.forEach(([a, b]) => {
  tree[a].push(b);
  tree[b].push(a);
});

const bfs = () => {
  const visited = Array(numOfVertex + 1).fill(false);
  visited[1] = true;
  let queue = [1];
  let stack;
  while (queue.length > 0) {
    stack = queue;
    queue = [];
    while (stack.length > 0) {
      const node = stack.pop();
      const children = tree[node];
      if (children) {
        children.forEach((child) => {
          if (!visited[child]) {
            visited[child] = true;
            answer[child] = node;
            queue.push(child);
          }
        });
      }
    }
  }
};

bfs();
// console.log(edges);
// console.log(tree);
console.log(answer.slice(2).join("\n"));
