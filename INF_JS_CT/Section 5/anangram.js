const solution = (a, b) => {
  let sH = new Map();
  for (let x of a) {
    if (!sH.has(x)) sH.set(x, 1);
    else sH.set(x, sH.get(x) + 1);
  }
  for (let y of b) {
    if (!sH.has(y) || sH.get(y) === 0) return "NO";
    else sH.set(y, sH.get(y) - 1);
  }

  for (let [key, val] of sH) {
    if (val !== 0) return "NO";
  }
  return "YES";
};

console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));
