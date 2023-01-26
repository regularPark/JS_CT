const solution = (k, score) => {
  let answer = [];
  let tmp = [];
  for (let num of score) {
    tmp.push(num);
    tmp.sort((a, b) => b - a);
    if (tmp.length < k) answer.push(tmp[tmp.length - 1]);
    else answer.push(tmp[k - 1]);
  }
  return answer;
};

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
