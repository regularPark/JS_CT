const solution = (want, number, discount) => {
  let answer = 0;
  let start = 0;
  let end = 0;
  for (let i = 0; i < discount.length; i++) {
    if (want[start] === discount[i]) {
      end++;
    }
    start++;
  }

  return answer;
};

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);