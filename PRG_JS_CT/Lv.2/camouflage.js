const solution = (clothes) => {
  let answer = 1;
  let clothesSet = {};
  clothes.forEach((val) => {
    clothesSet[val[1]] = (clothesSet[val[1]] || 1) + 1;
  });

  for (let key in clothesSet) {
    answer *= clothesSet[key];
  }
  return answer - 1;
};

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);

// short code
function solution(clothes) {
  return (
    Object.values(
      clothes.reduce((obj, t) => {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
      }, {})
    ).reduce((a, b) => a * (b + 1), 1) - 1
  );
}
