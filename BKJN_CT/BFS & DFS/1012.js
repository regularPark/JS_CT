const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const t = +input.shift();

for (let i = 0; i < t; i++) {
    const [m,n,k] = input.shift().split(' ').map(Number);
    graph
    let visited = 


}
