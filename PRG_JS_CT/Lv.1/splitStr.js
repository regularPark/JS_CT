const solution = (s) => {
  let answer = 0;
  let x = 0;
  let notX = 0;
  let tmp = "";
  for (let spell of s) {
    if (tmp == "") {
      tmp = spell;
      x += 1;
    } else if (x != notX && tmp != spell) {
      notX += 1;
    }
    if (x == notX) {
      tmp = "";
      answer += 1;
    }
  }
  return answer;
};

console.log(solution("banana"));
