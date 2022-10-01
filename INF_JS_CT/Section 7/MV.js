const count = (songs, capacity) => {
  let cnt = 1,
    sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else sum += x;
  }
  return cnt;
};

const solution = (n, m, songs) => {
  let answer = 0;
  let lt = Math.max(...songs); // dvd하나에 들어갈수있는 가장 큰 노래의 첫 기준
  let rt = songs.reduce((a, b) => a + b, 0);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
};

console.log(solution(9, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
