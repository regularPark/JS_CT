const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const caseNum = Number(input.shift());

for (let i = 0; i < input.length; i += 2) {
  let [N, M] = input[i].split(' ').map(Number);
  let arr = input[i + 1].split(' ').map(Number);

  const priorityArr = [];
  const indexArr = [];

  arr.forEach((val, idx) => {
    priorityArr.push(val);

    idx === M ? indexArr.push(-1) : indexArr.push(idx);
  });

  let count = 0;

  while (true) {
    let maxVal = Math.max(...priorityArr);
    if (priorityArr[0] === maxVal) {
      count++;
      if (indexArr[0] === -1) {
        console.log(count);
        break;
      } else {
        priorityArr.shift();
        indexArr.shift();
      }
    } else {
      priorityArr.push(priorityArr.shift());
      indexArr.push(indexArr.shift());
    }
  }
}
