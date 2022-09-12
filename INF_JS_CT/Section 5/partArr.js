const solution = (m, arr) => {
  let answer = 0;
  let n = arr.length;

  let p1 = (sum = 0);
  for (let p2 = 0; p2 < n; p2++) {
    sum += arr[p2];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[p1++];
      if (sum === m) answer++;
    }
  }
  return answer;
};

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
