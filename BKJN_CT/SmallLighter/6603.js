const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// 모든 케이스 => dfs

let answer = '';
for (let i = 0; i < 1; i++) {
  const testCase = input[i].split(' ').map(Number);
  const K = testCase.shift();
  const visited = new Array(K).fill(false);
  const lottery = [];

  const dfs = (v) => {
    if (lottery.length === 6) {
      answer += lottery.join(' ') + '\n';
      return;
    }

    for (let i = v; i < K; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      lottery.push(testCase[i]);
      dfs(i + 1);
      lottery.pop();
      visited[i] = false;
    }
  };

  dfs(0);
  answer += '\n';
}

console.log(answer);
