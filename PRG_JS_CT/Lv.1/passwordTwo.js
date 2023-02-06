const solution = (s, skip, index) => {
  let answer = "";
  const regex = new RegExp(`[^${skip}]`, "g");
  const alphabet = "abcdefghijklmnopqrstuvwxyz".match(regex);

  s.split("").forEach(
    (val) =>
      (answer += alphabet[(alphabet.indexOf(val) + index) % alphabet.length])
  );

  return answer;
};

console.log(solution("aukks", "wbqd", 5));
