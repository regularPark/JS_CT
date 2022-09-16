// const solution = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     let curVal = arr[i];
//     for (var j = i - 1; j >= 0 && arr[j] > curVal; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = curVal;
//   }
//   return arr;
// };

const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i];
    for (var j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return arr;
};

console.log(solution([11, 7, 5, 6, 10, 9]));
