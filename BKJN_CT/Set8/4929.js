const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.pop();

const N = input.length;

for (let i = 0; i < N; i += 2) {
  const first = input[i].split(' ').map(Number);
  const second = input[i + 1].split(' ').map(Number);
  first.shift();
  second.shift();

  if (first.length === 0) break;

  const dup = [];

  for (let i = 0; i < first.length; i++) {
    if (second.find((val) => val === first[i])) dup.push(first[i]);
  }

  let sum = 0;
  let p1 = 0;
  let p2 = 0;

  let t1 = 0;
  let t2 = 0;

  if (dup.length > 0) {
    while (p1 < first.length && p2 < second.length) {
      if (first[p1] === second[p2]) {
        sum += Math.max(t1, t2);
        sum += first[p1];
        t1 = t2 = 0;
        p1++;
        p2++;
      } else if (first[p1] < second[p2] && p1 < first.length) t1 += first[p1++];
      else if (first[p1] > second[p2] && p2 < second.length) t2 += second[p2++];
    }
  }

  for (; p1 < first.length; p1++) t1 += first[p1];
  for (; p2 < second.length; p2++) t2 += second[p2];
  sum += Math.max(t1, t2);

  console.log(sum);
}
