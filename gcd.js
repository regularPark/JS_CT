function solution(arr) {
  let answer = 1;
  if (arr.length === 1) return arr[0];
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }
  // console.log(answer);
  return answer;
}

function gcd(a, b) {
  while (b !== 0) {
    let res = a % b;
    a = b;
    b = res;
  }
  return a;
}
// 유클리드 호제법 -> 최소공배수는 두수의 곱 / 최대공약수
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

solution([2, 6, 8, 14]);

// Short code
function nlcm(num) {
  return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}
