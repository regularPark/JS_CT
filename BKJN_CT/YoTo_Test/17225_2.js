const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let [a, b, n] = input.shift().split(' ');

let sm = 0;
let js = 0;
let smStart = 0;
let jsStart = 0;
let smStartArr = [];
let jsStartArr = [];
let smComplete = [];
let jsComplete = [];
let smResult = [];
let jsResult = [];
let cnt = 1;

const workTable = input.map((val) => val.split(' '));

while (+n > 0) {
  n--;
  const [time, type, amount] = workTable.shift();

  if (type === 'B') {
    sm += +amount;
    for (let i = 0; i < +amount; i++) {
      if (smComplete[smComplete.length - 1] > +time) {
        smStartArr.push(smComplete[smComplete.length - 1]);
        smComplete.push(smComplete[smComplete.length - 1] + +a);
      } else {
        smStartArr.push(smStart + +time);
        smComplete.push(smStart + +time + +a);
      }
      smStart += +a;
    }
    smStart = 0;
  } else {
    js += +amount;
    for (let i = 0; i < +amount; i++) {
      if (jsComplete[jsComplete.length - 1] > +time) {
        jsStartArr.push(jsComplete[jsComplete.length - 1]);
        jsComplete.push(jsComplete[jsComplete.length - 1] + +b);
      } else {
        jsStartArr.push(jsStart + +time);
        jsComplete.push(jsStart + +time + +b);
      }
      jsStart += +b;
    }
    jsStart = 0;
  }
}

let i = 0;
j = 0;

while (i < smStartArr.length && j < jsStartArr.length) {
  const smCur = smStartArr[i];
  const jsCur = jsStartArr[j];

  if (smCur < jsCur) {
    smResult.push(cnt++);
    i++;
  } else if (smCur == jsCur) {
    smResult.push(cnt++);
    jsResult.push(cnt++);
    i++;
    j++;
  } else {
    jsResult.push(cnt++);
    j++;
  }

  if (i == smStartArr.length && j < jsStartArr.length) {
    while (j < jsStartArr.length) {
      jsResult.push(cnt++);
      j++;
    }
  } else if (i < smStartArr.length && j == jsStartArr.length) {
    while (j < jsStartArr.length) {
      smResult.push(cnt++);
      i++;
    }
  }
}

console.log(sm);
console.log(smResult.join(' '));
console.log(js);
console.log(jsResult.join(' '));
