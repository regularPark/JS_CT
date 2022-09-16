const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    // if (i !== lowest) {
    //   let tmp = arr[i];
    //   arr[i] = arr[lowest];
    //   arr[lowest] = tmp;
    // }
    [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
  }

  return arr;
};

console.log(solution([13, 5, 11, 7, 23, 15]));
