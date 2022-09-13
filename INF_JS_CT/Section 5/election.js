const solution = (s) => {
  let sH = new Map();
  for (let x of s) {
    if (!sH.has(x)) sH.set(x, 1);
    else sH.set(x, sH.get(x) + 1);
  }
  let max = -1;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
};

console.log(solution("BACBACCACCBDEDE"));
