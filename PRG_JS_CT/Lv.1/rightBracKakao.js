// 다시

function isPairBracket(u) {

    let stack = [];
    for (let i = 0; i < u.length; i++) {
        if (u[i] === '(') {
            stack.push('(');
        } else {
            if (stack.length > 0) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length ? false : true;
}

function solution(s) {
    if (s.length === 0) return s;
    let lcnt = 0;
    let rcnt = 0;
    let pos = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') lcnt++;
        if (s[i] === ')') rcnt++;
        if (lcnt === rcnt) {
            pos = i + 1
            console.log(u)
            break;
        }

    }
    let u = s.slice(0, pos);
    let v = s.slice(pos + 1);
    let answer = '';

    if (isPairBracket(u)) {
        return u.concat(solution(v));
    } else {

    }

}

// solution("(()())()");
// solution(")(");
solution("()))((()");