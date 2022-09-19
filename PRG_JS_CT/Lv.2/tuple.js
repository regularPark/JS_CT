const solution = (s) => {
  let answer = [];
  let nums = s.replace(/[{}]/g, "").split(",");
  let tuple = {};
  for (let num of nums) {
    !tuple[num] ? (tuple[num] = 1) : (tuple[num] += 1);
  }

  let sorted = Object.entries(tuple).sort((a, b) => b[1] - a[1]);

  for (let el of sorted) {
    answer.push(parseInt(el[0]));
  }

  return answer;
};

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
