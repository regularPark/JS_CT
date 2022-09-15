const solution = (r, c) => {
  let q = r.split("");
  for (let x of c) {
    if (q.includes(x)) {
      if (x !== q.shift()) return "NO";
    }
  }
  return "YES";
};

console.log(solution("CBA", "CADBGE"));
