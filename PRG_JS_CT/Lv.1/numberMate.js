const solution = (X, Y) => {
  let answer = [];
  let xArr = X.split("");
  let yArr = Y.split("");
  let numMap = new Map();
  for (let num of xArr) {
    if (yArr.includes(num)) {
      numMap.get(num)
        ? numMap.set(num, numMap.get(num) + 1)
        : numMap.set(num, 1);
    }
  }

  return numMap;
};

console.log(solution("100", "2345"));
