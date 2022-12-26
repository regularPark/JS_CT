const solution = (brackets) => {
  let answer = 0;
  let len = brackets.length;

  let tmp = brackets.split("");
  let stack;

  if (!tmp.includes("[") && !tmp.includes("{") && !tmp.includes("("))
    return answer;

  for (let i = 0; i < len; i++) {
    stack = [];
    for (let j = 0; j < tmp.length; j++) {
      if (["[", "{", "("].includes(tmp[j])) stack.push(tmp[j]);
      if (tmp[j] == "]" && stack[stack.length - 1] == "[") stack.pop();
      if (tmp[j] == "}" && stack[stack.length - 1] == "{") stack.pop();
      if (tmp[j] == ")" && stack[stack.length - 1] == "(") stack.pop();
    }
    let tmpBracket = tmp.shift();
    tmp.push(tmpBracket);
    if (stack.length == 0) answer++;
  }
  return answer;
};

console.log(solution("))"));
