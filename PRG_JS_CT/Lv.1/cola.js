const solution = (a, b, n) => {
  let answer = 0;
  let empty = n;
  while (true) {
    let change = parseInt(empty / a) * b;
    answer += change;
    empty -= parseInt(empty / a) * a;
    empty += change;
    if (empty < a) break;
  }
  return answer;
};

console.log(solution(2, 1, 20));
