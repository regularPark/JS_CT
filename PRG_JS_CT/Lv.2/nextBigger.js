const solution = (n) => {
  let answer = n;
  let cnt_1;
  let cnt = n.toString(2).replaceAll("0", "").length;
  while (cnt_1 !== cnt) {
    answer++;
    cnt_1 = 0;
    cnt_1 = answer.toString(2).replaceAll("0", "").length;
  }
  return answer;
};

console.log(solution(78));
