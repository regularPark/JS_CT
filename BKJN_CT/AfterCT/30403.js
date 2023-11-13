const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const n = +input.shift();

if (n < 7) {
  console.log('NO!');
  return;
}

let RAINBOW = ['R', 'O', 'Y', 'G', 'B', 'I', 'V'];
let rainbow = ['r', 'o', 'y', 'g', 'b', 'i', 'v'];

input
  .shift()
  .split('')
  .forEach((val) => {
    RAINBOW = RAINBOW.filter((el) => el != val);
    rainbow = rainbow.filter((el) => el != val);
  });

if (rainbow.length == 0 && RAINBOW.length > 0) console.log('yes');
else if (rainbow.length > 0 && RAINBOW.length == 0) console.log('YES');
else if (rainbow.length == 0 && RAINBOW.length == 0) console.log('YeS');
else console.log('NO!');
