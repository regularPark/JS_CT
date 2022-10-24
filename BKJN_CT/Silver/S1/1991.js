const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = "";

const N = +input.shift();

const tree = {};
input.forEach((nodes) => {
  const [node, left, right] = nodes.split(" ");
  tree[node] = [left, right];
});

const preOrder = (node) => {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  answer += node;
  preOrder(lt);
  preOrder(rt);
};

const inOrder = (node) => {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  inOrder(lt);
  answer += node;
  inOrder(rt);
};

const postOrder = (node) => {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  postOrder(lt);
  postOrder(rt);
  answer += node;
};

preOrder("A");
answer += "\n";
inOrder("A");
answer += "\n";
postOrder("A");

console.log(answer);
