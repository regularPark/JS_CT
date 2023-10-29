const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = Number(require('fs').readFileSync(filePath).toString().trim());

console.log(input);

console.log(Math.sqrt(input));
