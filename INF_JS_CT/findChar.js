const solution = (target, s) => {
  let answer = 0;
  for (let char of s) {
    if (target === char) {
      answer++;
    }
  }
  return answer;
};

console.log(solution("R", "COMPUTERPROGRAMMING"));

const solution_ = (t, s) => {
  let answer = s.split(t).length;
  return answer - 1;
};

console.log(solution_("R", "COMPUTERPROGRAMMING"));
