const solution = (s) => {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    let lastIdx = s.slice(0, i).lastIndexOf(s[i]);
    if (lastIdx === -1) answer.push(-1);
    else answer.push(i - lastIdx);
  }
  return answer;
};

console.log(solution("banana"));
console.log(solution("foobar"));
