const solution = (s) => {
  let answer = 0;
  let x = 0;
  let notX = 0;
  let tmp = "";
  for (let i = 0; i < s.length; i++) {
    if (tmp == "") {
      tmp = s[i];
      x += 1;
    } else if (x != notX && tmp != s[i]) {
      notX += 1;
    } else if (s[i] == tmp) x += 1;

    if (x == notX) {
      tmp = "";
      answer += 1;
    } else if (i == s.length - 1) answer += 1;
  }
  return answer;
};

console.log(solution("banana"));
