const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

let keywords = new Set(input.slice(1, N + 1));
let keywordArray = Array.from(keywords).sort(); // 정렬된 배열

let count = keywordArray.length;

let answer = '';

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

for (let i = N + 1; i <= N + M; i++) {
  const newKeywords = input[i].split(',');

  for (const newKeyword of newKeywords) {
    if (binarySearch(keywordArray, newKeyword) !== -1) {
      keywords.delete(newKeyword);

      count--;
    }
  }

  answer += keywords.size;
  if (i !== N + M) answer += '\n';
}

console.log(answer);
