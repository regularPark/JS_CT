const solution = (arr1, arr2) => {
  let answer = 0;
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => b - a);

  for (let i = 0; i < arr1.length; i++) {
    answer += arr1[i] * arr2[i];
  }
  //   console.log(answer);
  return answer;
};

solution([1, 4, 2], [5, 4, 4]);
solution([1, 2], [3, 4]);

// short code
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}
