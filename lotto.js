function solution(lottos, win_nums) {
    var answer = [];
    var min = 0;
    var zero = 0;
    for (i of lottos){
        if (i === 0) {
            zero ++;
        }
        for (j of win_nums){
            if (i === j){
                min ++;
            }
        }
    }
    

    if (zero === 0 && min === 0)
        answer.push(6,6)
    else {
        if (min !== 0) {
            answer.push(7 - (min + zero))
            answer.push(7 - min)
        }
        else {
            answer.push(7 - (min + zero))
            answer.push(6)
        }            
    }

    console.log(answer)
    return answer;
}


solution([1,2,3,4,5,6], [7,8,9,10,11,12])