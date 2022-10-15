const solution = (num1, num2) => {
  let answer;
  let arr1 = num1.split("");
  let arr2 = num2.split("");
  let tmp = [];

  for (let x of arr1) {
    let idx;
    if (arr2.includes(x)) {
      idx = arr2.indexOf(x);
      tmp.push(x);
      arr2.splice(idx, 1);
    }
  }

  return tmp.length ? tmp.join("") : -1;
};

console.log(solution("100", "203045"));
