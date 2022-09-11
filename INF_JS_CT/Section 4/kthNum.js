const solution = (n, m, arr) => {
  let answer;
  let tmp = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  let a = Array.from(tmp);
  a.sort((a, b) => b - a);
  return a[m - 1];
};

console.log(solution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
