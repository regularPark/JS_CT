const solution = (n) => {
  let result = 1;
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    let tmp = i;
    for (let j = i; j <= Math.floor(n / 2); j++) {
      tmp += j;
      if (tmp > n) {
        break;
      } else if (tmp === n) {
        result++;
        break;
      }
    }
  }
  return result;
};
