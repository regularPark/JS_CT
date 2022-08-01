function solution(id) {
    var answer = '';
    const re = /[-_.~!@#$%^&*()=+\[\{\]\}\:?,<>\/]/g;
    answer = id.toLowerCase().replace(/[~!@#$%^&*()=+\[\{\]\}\:?,<>\/]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, "")
        .substr(0, 15)
        .replace(/\.{2,}/g, ".")
        .replace(/^\.|\.$/g, "");

    if (!answer) answer += 'a';
    while (answer.length < 3) answer += answer[answer.length - 1];
    console.log(answer);
    return answer;
}

solution("...!@BaT#*..y.abcdefghijklm.")
solution("z-+.^.")
solution("=.=")
solution("123_.def")
solution("abcdefghijklmn.p")