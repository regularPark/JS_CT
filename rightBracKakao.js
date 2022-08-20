function solution(s) {
    let u = '';
    let v = '';
    let cnt = 0;
    let pos = 0;
    for (let brac of s) {
        let move = s.slice(0, 1)
        if (u.length % 2 === 0 && v.length % 2 !== 1) {
            if (brac === '(') u += move;
            else v += move;
        } else {
            if (brac === ')') u += move;
            else v += move;
        }
        s = s.slice(1);
    }
    console.log(u)
    console.log(v)
}

solution("(()())()");
// solution(")(");
// solution("()))((()");