function solution(n) {
    var answer = 0;
    var ternary = "";
    ternary = n.toString(3);
    ternary = ternary.split('').reverse().join('');
    console.log(ternary)
    answer = Number.parseInt(ternary, 3);
    console.log(answer)
    return answer;
}


solution(45)