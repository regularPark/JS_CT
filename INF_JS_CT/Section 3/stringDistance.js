const solution = (s, c) => {
  let dist = 0;
  let answer = [];
  for (let spell of s) {
    if (spell === c) {
      dist = 0;
      answer.push(dist);
    } else {
      dist++;
      answer.push(dist);
    }
  }
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) {
      dist = 0;
      answer[i] = Math.min(answer[i], dist);
    } else {
      dist++;
      answer[i] = Math.min(answer[i], dist);
    }
  }

  return answer;
};

console.log(solution("teachermode", "e"));
