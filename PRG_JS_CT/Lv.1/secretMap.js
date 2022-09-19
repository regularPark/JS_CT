function solution(n, arr1, arr2) {
    let new_arr1 = [];
    let new_arr2 = [];
    let answer = [];

    for (var num in arr1) {
        new_arr1.push(arr1[num].toString(2))
        new_arr2.push(arr2[num].toString(2))
        answer.push((arr1[num] | arr2[num]).toString(2).padStart(n, '0').replace(/0/g, ' ').replace(/1/g, '#'))
    }
    // console.log(answer);
    return answer;
}


solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])

solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])