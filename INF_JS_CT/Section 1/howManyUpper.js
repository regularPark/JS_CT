const solution = (s) => {
  let answer = 0;
  for (let char of s) {
    let uChar = char.charCodeAt();
    if (uChar >= 65 && uChar <= 90) answer++;
  }
  return answer;
};

console.log(solution("How Much Is It?"));
