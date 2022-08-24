function solution(q1, q2) {
    let cnt = 0;
    const total = [...q1, ...q2];
    const sum = total.reduce((a, b) => a + b);
    let maxCnt = 4 * total.length;

    let target = sum / 2;
    let start = 0;
    let end = q1.length;
    let halfSum = total.slice(start, end).reduce((a, b) => a + b);

    console.log(target)
    console.log(halfSum)
    while (cnt <= maxCnt) {
        if (target > halfSum) {
            halfSum += total[end];
            end++;
            // console.log(q1)
            // console.log(q2)
        } else if (target < halfSum) {
            halfSum -= total[start];
            start++;
            // console.log(q1)
            // console.log(q2)
        } else if (halfSum === target) {
            console.log(cnt)
            return cnt;
        }
        cnt++;
    }
    return -1
}



// solution([1, 1], [1, 5])
solution([1, 2, 1, 2], [1, 10, 1, 2])
// solution([3, 2, 7, 2], [4, 6, 5, 1])