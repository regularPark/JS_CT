const solution = (...arguments) => {
  let min = Infinity;
  for (let num of arguments) {
    min = Math.min(min, num);
  }
  return min;
};

console.log(solution(5, 3, 7, 11, 2, 15, 1, 20, 17));
