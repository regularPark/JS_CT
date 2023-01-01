const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let day = Number(input.shift());

const wear = (len) => {
  let answer = 1;
  let combination = {};
  let clothes = [];
  for (let i = 0; i < len; i++) {
    clothes.push(
      input
        .shift()
        .split(" ")
        .map((x) => x.trim())
    );
  }
  clothes.forEach((val) => {
    combination[val[1]] = (combination[val[1]] || 1) + 1;
  });

  for (let key in combination) {
    answer *= combination[key];
  }
  console.log(answer - 1);
};

while (input.length > 0) {
  wear(Number(input.shift()));
}
