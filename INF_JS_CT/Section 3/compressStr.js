const solution = (s) => {
  let cnt = 1;
  s = s + " ";
  let answer = "";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      cnt++;
    } else {
      answer += s[i];
      if (cnt > 1) answer += cnt;
      cnt = 1;
    }
  }
  return answer;
};

console.log(solution("KKHSSSSSSSE"));
