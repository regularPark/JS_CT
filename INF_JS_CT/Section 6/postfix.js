const solution = (s) => {
  let answer;
  let stack = [];
  const reg = /[0-9]/;
  for (let x of s) {
    if (reg.test(x)) stack.push(parseInt(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  return stack;
};

console.log(solution("352+*9-"));
