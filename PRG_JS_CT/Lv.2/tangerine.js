const solution = (k, tangerine) => {
  let answer = 0;
  let tngMap = new Map();
  tangerine.forEach((val) => {
    tngMap.has(val) ? tngMap.set(val, tngMap.get(val) + 1) : tngMap.set(val, 1);
  });

  let arr = Array.from(tngMap);
  arr.sort((a, b) => b[1] - a[1]);

  let i = 0;
  while (k > 0) {
    k -= arr[i][1];
    i++;
    answer++;
  }

  return answer;
};

console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
