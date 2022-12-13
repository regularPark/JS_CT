const solution = (arr) => {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == 0) continue;
      if (arr[i] <= arr[j] && temp < arr[i]) {
        temp++;
      }
    }
    answer = Math.max(answer, temp);
  }
  return answer;
};

console.log(solution([1, 1, 1, 1, 1, 1]));

// 다른 풀이
const sol = (arr) => {
  arr.sort((a, b) => b - a);
  let i = 0;
  while (i + 1 <= arr[i]) {
    i++;
  }
  return i;
};

console.log(sol([88, 89]));
