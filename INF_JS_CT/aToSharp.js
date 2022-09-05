// const solution = (s) => {
//   let answer = "";
//   for (let spell of s) {
//     if (spell === "A") answer += "#";
//     else answer += spell;
//   }
//   return answer;
// };

const solution = (s) => {
  return s.replace(/A/g, "#");
};

console.log(solution("BANANA"));
