const solution = (n, k) => {
  let arr = [];
  let q = [];
  for (let i = 1; i <= n; i++) {
    q.push(i);
  }
  let idx = 0;
  /*
   * [1 2 3 4 5 6 7 8]
   * [    3 4 5 6 7 8 1 2]
   * [      4 5 6 7 8 1 2]
   * [          6 7 8 1 2 4 5]
   * [            7 8 1 2 4 5]
   * ...
   * [ 7 ]
   */
  while (q.length > 1) {
    idx++;
    if (k > idx) q.push(q.shift());
    else if (k === idx) {
      q.shift();
      idx = 0;
    }
  }

  return q[0];
};

console.log(solution(8, 3));
