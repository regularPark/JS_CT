const solution = (s) => {
  if (s.length !== 4 && s.length !== 6) return false;
  for (let x of s) {
    if (isNaN(x)) return false;
  }
  return true;
};

console.log(solution("a234"));
console.log(solution("1234"));
