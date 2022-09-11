const solution = (n, arr) => {
  let answer = -Infinity;
  let max = -Infinity;
  for (let x of arr) {
    let sum = 0;
    let tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum >= max) {
      max = sum;
      if (sum > max) answer = x;
      else {
        if (answer < x) answer = x;
      }
    }
  }
  return answer;
};

console.log(solution(7, [128, 460, 603, 40, 521, 137, 123]));
