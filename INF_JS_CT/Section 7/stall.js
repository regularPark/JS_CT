const count = (arr, dist) => {
  let cnt = 1,
    ep = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - ep >= dist) {
      cnt++;
      ep = arr[i];
    }
  }
  return cnt;
};

const solution = (m, arr) => {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 1; // 가장 가까울 수 있는 거리지, 첫번째 인덱스가 아니다.
  let rt = arr[arr.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(arr, mid) >= m) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }
  return answer;
};

console.log(solution(3, [1, 2, 8, 4, 9]));
