const solution = (s, n, arr) => {
  let answer = new Array(s).fill(0);
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < s; i++) if (x === answer[i]) pos = i;
    // 같은 원소가 없으면
    if (pos === -1) {
      answer.unshift(x);
      if (answer.length > s) answer.pop();
    } else {
      answer.splice(pos, 1);
      answer.unshift(x);
    }
  });
  return answer;
};

console.log(solution(5, 9, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
