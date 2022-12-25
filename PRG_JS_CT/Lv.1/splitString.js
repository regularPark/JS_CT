const solution = (str) => {
  let stack = [];
  let answer = 0;
  stack.push(str.substr(0, 1));

  for (let i = 1; i < str.length; i++) {
    if (stack.length == 0) {
      stack.push(str[i]);
      if (i == str.length - 1) answer++;
    } else if (str[i] !== stack[stack.length - 1]) {
      stack.pop();
      if (stack.length == 0) answer++;
    } else if (str[i] == stack[stack.length - 1]) stack.push(str[i]);
  }

  return answer;
};

console.log(solution("abracadabra"));
