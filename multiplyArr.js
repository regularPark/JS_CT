function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let arr = arr1[i];
    answer.push([]);
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr2.length; k++) {
        sum += arr[k] * arr2[k][j];
      }
      answer[i].push(sum);
    }
  }

  //   console.log(answer);
  return answer;
}

// other code
function productMatrix(A, B) {
  return A.map(function (row) {
    return row.map(function (_, i) {
      return row.reduce(function (sum, cell, j) {
        return sum + cell * B[j][i];
      }, 0);
    });
  });
}

productMatrix(
  [
    [1, 4],
    [3, 2],
    [4, 1],
  ],
  [
    [3, 3],
    [3, 3],
  ]
);

// short code
function solution_(arr1, arr2) {
  return arr1.map((row) =>
    arr2[0].map((x, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0))
  );
}

solution_(
  [
    [1, 4],
    [3, 2],
    [4, 1],
  ],
  [
    [3, 3],
    [3, 3],
  ]
);
