const solution = (number, limit, power) => {
  let answer = 0;
  let weapons = [];
  for (let i = 1; i <= number; i++) {
    let cnt = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        if (i / j == j) cnt++;
        else cnt += 2;
      }
    }
    weapons.push(cnt);
  }

  for (let i = 0; i < weapons.length; i++) {
    if (weapons[i] > limit) weapons[i] = power;
    answer += weapons[i];
  }

  return answer;
};

console.log(solution(5, 3, 2));
