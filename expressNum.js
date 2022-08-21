function solution(n) {
    let cnt = 0;

    for (let i = 1; i < n + 1; i++) {
        let sum = 0;
        for (let j = i; j < n + 1; j++) {
            sum += j;
            if (sum === n) {
                cnt++;
                break;
            }
            if (sum > n) break;
        }
    }
    return cnt;
}

solution(15)