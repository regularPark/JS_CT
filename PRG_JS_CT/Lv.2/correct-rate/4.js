const solution = (s) => {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(1);
    if (s[i] === ')') {
      if (stack.length) stack.pop();
      else return false;
    }
  }
  return stack.length ? false : true;
};
