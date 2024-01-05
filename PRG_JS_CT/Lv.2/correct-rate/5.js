const solution = (s) => {
  let zeroCnt = 0;
  let cnt = 0;
  let str = s;
  while (str !== '1') {
    cnt++;
    newStr = str.replaceAll('0', '');
    zeroCnt += str.length - newStr.length;
    str = newStr.length.toString(2);
  }

  return [cnt, zeroCnt];
};

console.log(solution('110010101001'));
