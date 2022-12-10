const solution = (n, a, b) => {
  let mid = n / 2;
  if ((a > mid && b <= mid) || (a <= mid && b > mid)) return Math.log2(n);
  if (a > mid && b > mid) return solution(mid, a - mid, b - mid);
  else return solution(mid, a, b);
};

console.log(solution(8, 5, 6));
