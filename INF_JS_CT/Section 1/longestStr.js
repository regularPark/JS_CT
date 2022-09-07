const solution = (arr) => {
  let longest = -1;
  let answer;
  for (word of arr) {
    if (longest < word.length) {
      longest = word.length;
      answer = word;
    }
  }
  return answer;
};

console.log(solution(["teacher", "time", "student", "beautiful", "good"]));
