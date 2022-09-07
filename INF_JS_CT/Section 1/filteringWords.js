const solution = (arr) => {
  let answer;
  answer = arr.filter(function (v, i) {
    return arr.indexOf(v) === i;
  });
  return answer;
};

console.log(solution(["good", "time", "good", "time", "student"]));
