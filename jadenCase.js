// function solution(s) {
//   let answer = "";
//   answer = s
//     .split(" ")
//     .map(
//       (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
//     )
//     .join(" ");
//   console.log(answer);
//   return answer;
// }

function solution(s) {
  let tmp = s.toLowerCase().split(" ");
  let answer = "";
  answer = tmp
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");
  return answer;
}

solution("3people unFollowed me");
solution("for the last week");
