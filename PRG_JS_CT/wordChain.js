const solution = (n, words) => {
  let end = "";
  let chkList = {};
  let answer = [];
  chkList[words[0]] = 1;

  for (let i = 1; i < words.length; i++) {
    end = words[i - 1].substr(-1);
    chkList[words[i]] ? (chkList[words[i]] += 1) : (chkList[words[i]] = 1);
    if (end !== words[i].substr(0, 1) || chkList[words[i]] > 1) {
      if ((i + 1) % n !== 0) {
        answer.push((i + 1) % n);
      } else answer.push(n);
      answer.push(Math.ceil((i + 1) / n));
      break;
    }
  }
  //   console.log(chkList);
  if (answer.length === 0) {
    answer.push(0, 0);
  }
  return answer;
};

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
// console.log(
//   solution(5, [
//     "hello",
//     "observe",
//     "effect",
//     "take",
//     "either",
//     "recognize",
//     "encourage",
//     "ensure",
//     "establish",
//     "hang",
//     "gather",
//     "refer",
//     "reference",
//     "estimate",
//     "executive",
//   ])
// );
// console.log(
//   solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
// );
