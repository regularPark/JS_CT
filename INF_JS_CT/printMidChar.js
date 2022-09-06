const solution = (s) => {
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) {
    return s.substr(mid, 1);
  } else {
    return s.substr(mid - 1, 2);
  }
};

console.log(solution("study"));
console.log(solution("java"));
