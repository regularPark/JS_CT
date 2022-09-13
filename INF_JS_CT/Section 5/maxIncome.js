/** sliding window */
const solution = (k, arr) => {
  let answer = (sum = 0);
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  for (let j = k; j < arr.length; j++) {
    sum += arr[j] - arr[j - k];
    answer = Math.max(answer, sum);
  }

  return answer;
};

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
