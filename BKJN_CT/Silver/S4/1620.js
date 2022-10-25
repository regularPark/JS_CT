const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((v) => +v);

const pokeDict = new Map();
const pokeDictNum = new Map();

for (let i = 1; i <= N; i++) {
  pokeDict.set(i, input[i]);
  pokeDictNum.set(input[i], i);
}

const questions = input.slice(N + 1, input.length);
let answer = "";

questions.forEach((q) => {
  if (isNaN(q)) answer += pokeDictNum.get(q) + "\n";
  else answer += pokeDict.get(+q) + "\n";
});

console.log(answer);
