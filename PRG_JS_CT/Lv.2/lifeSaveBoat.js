const solution = (arr, limit) => {
  let answer = 0;
  let front = 0;
  let end = arr.length - 1;
  arr.sort((a, b) => b - a);
  //   console.log(arr);
  while (front <= end) {
    if (arr[front] + arr[end] <= limit) {
      answer++;
      front++;
      end--;
    } else {
      answer++;
      front++;
    }
  }

  return answer;
};

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 50, 80], 100));
