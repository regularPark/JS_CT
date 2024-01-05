const solution = (s) => {
  let arr = s.split(' ');

  let answer = arr
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  return answer;
};
