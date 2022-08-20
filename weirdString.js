function solution(s) {
    let arr = s.split(" ")
    let answer = '';
    console.log(arr)
    for (let word of arr) {
        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) answer += word[i].toUpperCase();
            else answer += word[i];
        }
        answer += ' ';
    }
    console.log(answer);
    return answer.trim();
}

solution("try hello world")