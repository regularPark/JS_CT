const solution = (n) => {
  let answer = n;
  while (true) {
    answer++;
    let a = n.toString(2).replaceAll('0', '').length;
    let b = answer.toString(2).replaceAll('0', '').length;
    if (a === b) break;
  }

  return answer;
};
