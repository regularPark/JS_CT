function dart(result) {
    let nums = [];
    let cnt = 0;
    for (var i = 0; i < result.length; i++) {
        if (!isNaN(result[i]) && isNaN(result[i + 1])) nums.push(parseInt(result[i]));
        else if (result[i] === '1' && result[i + 1] === '0') {
            nums.push(10)
            i++;
        } else if (result[i] === 'S') cnt++;
        else if (result[i] === 'D') {
            nums[cnt] = nums[cnt] ** 2;
            cnt++;
        } else if (result[i] === 'T') {
            nums[cnt] = nums[cnt] ** 3;
            cnt++;
        } else if (result[i] === '#') {
            nums[cnt - 1] *= -1;
        } else if (result[i] === '*') {
            for (var j = cnt - 1; j >= cnt - 2; j--) {
                nums[j] *= 2;
            }
        }
    }
    return nums.reduce((a, b) => a + b);
}

// dart("1S2D*3T")
// dart("1D2S#10S")
// dart("1D2S0T")
dart("1S*2T*3S")

dart("1D2S3T*")



// using regular Expression
function solution(dartResult) {
    const bonus = {
            'S': 1,
            'D': 2,
            'T': 3
        },
        options = {
            '*': 2,
            '#': -1,
            undefined: 1
        };

    let darts = dartResult.match(/\d.?\D/g);

    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
}