const solution = (s) => {
  let arr = [];
  let pos = -1;
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    ++pos;

    if (arr[pos] === arr[pos - 1]) {
      arr.pop();
      arr.pop();
      pos -= 2;
    }
  }

  return arr.length ? 0 : 1;
};
