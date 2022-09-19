const solution = (arr) => {
  let nums = arr.split(" ");
  let max = -Infinity;
  let min = Infinity;
  for (let num of nums) {
    if (max < parseInt(num)) max = parseInt(num);
    if (min > parseInt(num)) min = parseInt(num);
  }

  return `${min} ${max}`;
};

console.log(solution("1 2 3 4"));
