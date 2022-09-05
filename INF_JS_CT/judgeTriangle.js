function solution(a, b, c) {
  const li = [];
  li.push(...arguments);
  li.sort();
  if (li[2] >= li[0] + li[1]) return "NO";
  else return "YES";
}

console.log(solution(6, 7, 11));
console.log(solution(11, 12, 25));
