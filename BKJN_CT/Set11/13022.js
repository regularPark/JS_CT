const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const State = {
  START: 'Start',
  W: 'w',
  O: 'o',
  L: 'l',
  F: 'f',
};

let answer = 0;

let wCnt = 0,
  oCnt = 0,
  lCnt = 0,
  fCnt = 0;

let state = State.START;

for (let i = 0; i < input.length; i++) {
  if (state === State.START) {
    if (input[i] !== 'w') {
      console.log(0);
      return;
    }
    wCnt++;
    state = State.W;
  } else if (state === State.W) {
    if (input[i] === 'w') {
      wCnt++;
    } else if (input[i] === 'o') {
      oCnt++;
      state = State.O;
    } else {
      console.log(0);
      return;
    }
  } else if (state === State.O) {
    if (input[i] === 'o') {
      oCnt++;
    } else if (input[i] === 'l') {
      if (wCnt !== oCnt) {
        console.log(0);
        return;
      }

      lCnt++;
      state = State.L;
    } else {
      console.log(0);
      return;
    }
  } else if (state === State.L) {
    if (input[i] === 'l') {
      lCnt++;
    } else if (input[i] === 'f') {
      if (oCnt !== lCnt) {
        console.log(0);
        return;
      }

      fCnt++;
      state = State.F;
    } else {
      console.log(0);
      return;
    }
  } else {
    if (input[i] === 'f') {
      fCnt++;
    } else if (input[i] === 'w') {
      if (lCnt !== fCnt) {
        console.log(0);
        return;
      }
      wCnt = oCnt = lCnt = fCnt = 0;
      i -= 1;
      state = State.START;
    } else {
      console.log(0);
      return;
    }
  }
}

if (wCnt != fCnt) console.log(0);
else console.log(1);
