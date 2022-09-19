function solution(b, y) {
    let answer = [];
    let sum = b + y;

    for (let h = 3; h <= b; h++) {
        if (sum % h === 0) {
            let w = sum / h;

            if ((h - 2) * (w - 2) === y) {
                return [w, h];
            }
        }
    }
    console.log(answer)
    return answer;
}

solution(10, 2)
solution(8, 1)
solution(24, 24)