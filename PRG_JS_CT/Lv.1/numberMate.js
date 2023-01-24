const solution = (X, Y) => {
  let xArr = X.split("");
  let yArr = Y.split("");
  let numMap = [];
  for (let num of xArr) {
    if (yArr.includes(num)) {
      numMap.push(num);
      yArr[yArr.lastIndexOf(num)] = "";
    }
  }
  numMap.sort((a, b) => b - a);

  return numMap.length > 1 ? numMap.join("") : "-1";
};

console.log(solution("100", "2345"));
