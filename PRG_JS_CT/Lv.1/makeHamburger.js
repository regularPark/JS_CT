const solution = (ingredient) => {
  let answer = 0;
  let burger = [1, 2, 3, 1];
  for (let i = 0; i < ingredient.length - burger.length; i++) {
    if (burger[0] == ingredient[i]) {
      for (let j = 1; j < 4; j++) {
        i++;
        if (j < 3 && burger[j] == ingredient[i]) {
          continue;
        } else if (j == 3 && burger[j] == ingredient[i]) {
          answer++;
        } else {
          i--;
          break;
        }
      }
    } else continue;
  }
  return answer;
};

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
