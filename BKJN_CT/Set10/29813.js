const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const N = input.shift();
const students = input.map((val) => val.split(' '));

let front = 0;

while (true) {
  if (students.length === 1) {
    console.log(students[0][0]);
    break;
  }

  const [_, x] = students.shift();

  let X = Number(x);

  while (X > 1) {
    const std = students.shift();
    students.push(std);
    X--;
  }
  students.shift();
}
