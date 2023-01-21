const solution = (ingredient) => {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    if (stack.length < 4) continue;
    if (
      stack[stack.length - 4] == 1 &&
      stack[stack.length - 3] == 2 &&
      stack[stack.length - 2] == 3 &&
      stack[stack.length - 1] == 1
    ) {
      for (let j = 0; j < 4; j++) stack.pop();
      answer++;
    }
  }
  return answer;
};

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));

/** 초기 구상했던 코드와 매우 유사한 코드를 가져와 보았다. */
function solution(ingredient) {
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    if (ingredient.slice(i, i + 4).join("") === "1231") {
      count++;
      ingredient.splice(i, 4);
      i -= 3;
    }
  }

  return count;
}
