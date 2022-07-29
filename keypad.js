function solution(numbers, hand) {
    var answer = '';

    let lHand = 10;
    let rHand = 12;

    numbers.map(num => {
        if (num === 0) {
            num = 11;
        }
        if (num % 3 === 1) {
            answer += "L";
            lHand = num;
        } else if (num % 3 === 0) {
            answer += "R";
            rHand = num;
        } else {
            const lHandDist = calDistance(handPos(num), handPos(lHand));
            const rHandDist = calDistance(handPos(num), handPos(rHand));

            if (lHandDist === rHandDist) {
                if (hand === "left") {
                    answer += "L";
                    lHand = num;
                } else {
                    answer += "R";
                    rHand = num;
                }
            } else if (lHandDist > rHandDist) {
                answer += "R";
                rHand = num;
            } else {
                answer += "L";
                lHand = num;
            }
        }
    })
    console.log(rHand, lHand)
    console.log(answer);
    return answer;
}

function handPos(num) {
    return [Math.floor((num - 1) / 3), (num - 1) % 3];
}

function calDistance(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5])