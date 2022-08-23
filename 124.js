let answer = '';

function solution(n) {

    if (Math.ceil(n / 3) > 1) solution(Math.ceil(n / 3) - 1)
    if (n % 3 === 0) answer += '4'
    else if (n % 3 === 1) answer += '1'
    else if (n % 3 === 2) answer += '2'

    return answer;
}

solution(6)
// solution(10)
// solution(11)


// Short code...
function change124(n) {
    return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}