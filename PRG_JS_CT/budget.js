function solution(arr, bud) {
    arr.sort((a, b) => a - b);
    while (arr.reduce((a, b) => (a + b), 0) > bud) {
        arr.pop();
    }
    console.log(arr.length)
    return arr.length;
}

solution([1, 3, 2, 5, 4], 9)
solution([2, 2, 3, 3], 10)