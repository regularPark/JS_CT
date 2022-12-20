const solution = (arr) => {
  let answer = "";
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 == 1) arr[i] = arr[i] - 1;
  }

  for (let j = 1; j < arr.length; j++) {
    answer += j.toString().repeat(arr[j] / 2);
  }

  answer += "0" + answer.split("").reverse().join("");

  return answer;
};

console.log(solution([1, 7, 1, 2]));
