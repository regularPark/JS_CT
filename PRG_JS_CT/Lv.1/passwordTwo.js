const solution = (s, skip, index) => {
  let tmp = s.split("").map((v) => v.charCodeAt() + index);
  let skipList = skip.split("").map((v) => v.charCodeAt());

  const idxList = [];
  tmp.map((v) =>
    idxList.push(skipList.filter((el) => v - index < el && v >= el).length)
  );

  tmp.forEach((val, idx) => {
    tmp[idx] = val + idxList[idx];
    if (tmp[idx] > 122) tmp[idx] = tmp[idx] - 26;
  });

  return tmp.map((v) => String.fromCharCode(v)).join("");
};

console.log(solution("aukks", "wbqd", 5));
