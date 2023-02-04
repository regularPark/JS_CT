const solution = (want, number, discount) => {
  let answer = 0;
  const dict = {};

  for (let i = 0; i < want.length; i++) {
    dict[want[i]] = number[i];
  }

  for (let i = 0; i <= discount.length - 10; i++) {
    if (!want.includes(discount[i])) continue;
    let tmp = discount.slice(i, i + 10);
    if (tmp.filter((el) => !want.includes(el)).length) continue;
    let isCheck = true;
    for (let i = 0; i < want.length; i++) {
      if (dict[want[i]] !== tmp.filter((el) => el === want[i]).length) {
        isCheck = false;
        break;
      }
    }
    if (isCheck) answer++;
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

/** little shorter code */
function solution(want, number, discount) {
  let count = 0;
  for (let i = 0; i < discount.length - 9; i++) {
    const slice = discount.slice(i, i + 10);

    let flag = true;
    for (let j = 0; j < want.length; j++) {
      if (slice.filter((item) => item === want[j]).length !== number[j]) {
        flag = false;
        break;
      }
    }
    if (flag) count += 1;
  }
  return count;
}
