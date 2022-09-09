const solution = (s) => {
  let cnt = 0;
  let answer = [];
  let tmp = s;
  let rmvCnt = 0;
  while (tmp !== "1") {
    let len = tmp.length;
    tmp = tmp.replace(/[0]/g, "");
    rmvCnt += len - tmp.length;
    tmp = tmp.length.toString(2);
    cnt++;
  }
  answer.push(cnt, rmvCnt);
  return answer;
};

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));
