function solution(numbers, hand) {
    var answer = '';

    let lHand = 10;
    let rHand = 12;

    numbers.map(num => {
        if (num % 3 === 1) {
            answer += "L";
            console.log(parseInt(num / 3));
        } else if (num % 3 === 0) {
            answer += "R";
            console.log(parseInt(num / 3));
        }
    })


    return answer;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5])