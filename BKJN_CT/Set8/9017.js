const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const T = input.shift();

const answer = [];

for (let i = 0; i < T * 2; i += 2) {
  const raceResult = input[i + 1].split(' ').map(Number);
  const teams = {};
  const na = new Set();

  raceResult.forEach((val) => {
    if (!teams[val]) teams[val] = 1;
    else teams[val]++;

    if (teams[val] < 6) na.add(val);
    else na.delete(val);
  });

  let rank = 1;
  const result = {};
  raceResult.forEach((val) => {
    if (!na.has(val)) {
      if (!result[val]) {
        result[val] = [1, 0, rank];
      } else {
        if (result[val][0] < 4) {
          result[val][0]++;
          result[val][2] += rank;
        } else if (result[val][0] === 4) {
          result[val][0]++;
          result[val][1] = rank;
        }
      }
      rank++;
    }
  });

  answer.push(
    Object.entries(result).sort((a, b) => {
      if (a[1][2] === b[1][2]) return a[1][1] - b[1][1];
      else return a[1][2] - b[1][2];
    })[0][0]
  );
}

console.log(answer.join('\n'));
