const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("")
  .map((x) => +x);

const answer = new Array(10).fill(0);

for (let i = 0; i < input.length; i++) {
  if (input[i] === 9 && answer[9] > answer[6]) {
    answer[6]++;
  } else if (input[i] === 6 && answer[9] < answer[6]) {
    answer[9]++;
  } else {
    answer[input[i]]++;
  }
}

console.log(Math.max(...answer));
// if (freq[0][0] !== "") {
// }

// 6과 9가 같이 같은 수로 쓰였을때는 어떻게?
// 99966 -> 3
// 999966 -> 3
// max가 9나 6일 경우 : 9와 6이 동시 존재한다면 둘을 합쳐서 더한 후 Math.ceil(/2) 연산.
// 둘중 하나만 있는 경우도 Math.ceil(/2)
