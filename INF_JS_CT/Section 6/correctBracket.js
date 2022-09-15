const solution = (s) => {
  let stack = [];
  if (s[0] === ")") return "NO";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    else {
      if (stack.length > 0) stack.pop();
      else return "NO";
    }
  }
  return stack.length ? "NO" : "YES";
};

console.log(solution("(()(()))(()"));
