const solution = (s) => {
  let arr = s.split(' ').map(Number);
  let max = -Infinity;
  let min = Infinity;
  max = Math.max(...arr);
  min = Math.min(...arr);

  return `${min} ${max}`;
};
