function solution(s) {
    let answer = s.length;
    for (let i = 1; i <= parseInt(s.length / 2); i++) {
        let prevStr = s.substr(0, i);
        let tmpStr = '';
        let cnt = 1;
        for (let j = i; j < s.length; j += i) {
            console.log(s.substr(j, i), prevStr)
            if (prevStr === s.substr(j, i)) cnt++;
            else {
                if (cnt > 1) tmpStr += String(cnt) + prevStr;
                else tmpStr += prevStr;
                cnt = 1;
                prevStr = s.substr(j, i);

            }
        }
        if (cnt > 1) tmpStr += String(cnt) + prevStr;
        else tmpStr += prevStr;

        console.log(tmpStr);
        answer = Math.min(answer, tmpStr.length);
    }
    return answer;
}


// function solution(s) {
//     let min_len = s.length;

//     for (let i = 1; i <= parseInt(s.length / 2); i++) {
//         let prev = s.substr(0, i);
//         let cnt = 1;
//         let tmp_str = '';

//         for (let k = i; k < s.length; k += i) {
//             const cur = s.substr(k, i);

//             if (prev === cur) cnt++;
//             else {
//                 tmp_str += (cnt > 1 ? String(cnt) : '') + prev;
//                 cnt = 1;
//                 prev = cur;
//             }
//         }
//         tmp_str += (cnt > 1 ? String(cnt) : '') + prev;
//         console.log(tmp_str)
//         min_len = Math.min(min_len, tmp_str.length)
//     }
//     console.log(min_len);
//     return min_len;
// }

solution("aabbaccc")