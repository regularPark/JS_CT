const solution = (n, arr) => {
  let answer = 0;
  let cache = new Array(n).fill("");
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < n; i++) {
      if (x.toLowerCase() === cache[i].toLowerCase()) {
        answer += 1;
        pos = i;
      }
    }
    if (pos === -1) {
      cache.unshift(x);
      answer += 5;
      if (cache.length > n) cache.pop();
    } else {
      cache.splice(pos, 1);
      cache.unshift(x);
    }
  });
  return answer;
};

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ])
);
console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
);
