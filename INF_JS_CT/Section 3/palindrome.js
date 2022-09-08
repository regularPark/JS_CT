const solution = (s) => {
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  n_s = s.split("").reverse().join("");
  console.log(s, n_s);
  return n_s === s ? "YES" : "NO";
};

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
