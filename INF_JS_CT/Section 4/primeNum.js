const isPrime = (n) => {
  if (n === 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const solution = (arr) => {
  let answer = [];

  for (let x of arr) {
    let tmp = parseInt(x.toString().split("").reverse().join(""));
    if (isPrime(tmp)) {
      answer.push(tmp);
    }
  }

  return answer;
};

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
