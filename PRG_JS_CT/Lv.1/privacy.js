const compareDate = (todayArr, privacyDate, term) => {
  if (privacyDate[1] + term > 12 && (privacyDate[1] + term) % 12 !== 0) {
    privacyDate[0] += Math.floor((privacyDate[1] + term) / 12);
    privacyDate[1] =
      privacyDate[1] + term - 12 * Math.floor((privacyDate[1] + term) / 12);
  } else if (privacyDate[1] + term > 12 && (privacyDate[1] + term) % 12 === 0) {
    privacyDate[0] += Math.floor((privacyDate[1] + term) / 12) - 1;
    privacyDate[1] = 12;
  } else {
    privacyDate[1] += term;
  }
  console.log(todayArr, privacyDate);

  if (
    todayArr[0] < privacyDate[0] ||
    (todayArr[0] === privacyDate[0] && todayArr[1] < privacyDate[1]) ||
    (todayArr[0] === privacyDate[0] &&
      todayArr[1] === privacyDate[1] &&
      todayArr[2] < privacyDate[2])
  )
    return false;
  return true;
};

const solution = (today, terms, privacies) => {
  let answer = [];

  let todayArr = today.split('.').map(Number);

  let termsMap = new Map();
  terms.forEach((term) => {
    const termApart = term.split(' ');
    termsMap.set(termApart[0], Number(termApart[1]));
  });

  privacies.forEach((privacy, idx) => {
    let privacyArr = privacy.split(' ');
    let privacyDate = privacyArr[0].split('.').map(Number);

    if (compareDate(todayArr, privacyDate, termsMap.get(privacyArr[1]))) {
      answer.push(idx + 1);
    }
  });

  return answer;
};

console.log(solution('2009.12.31', ['A 13'], ['2008.11.03 A']));
