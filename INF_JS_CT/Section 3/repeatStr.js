const solution = (s) => {
  let n = s.length;
  mid = Math.floor(n / 2);
  s = s.toLowerCase();
  for (let i = 0; i < mid; i++) {
    if (s[i] !== s[n - i - 1]) return "NO";
  }
  return "YES";
};

// console.log(solution("gooG"));
// console.log(solution("asdf"));
// console.log(solution("hoooH"));

const solution_ = (s) => {
  let answer = "YES";
  s = s.toLowerCase();
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
};

console.log(solution_("gooG"));
console.log(solution_("asdf"));
console.log(solution_("hoooH"));
