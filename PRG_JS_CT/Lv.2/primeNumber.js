function isPrimeNumber(n) {
    for (var i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(nums) {
    var answer = 0;
    const sums = [];
    
    for (var i = 0; i < nums.length - 2; i++) {
        for (var j = i + 1; j < nums.length - 1; j++) {
            for (var k = j + 1; k < nums.length; k++) {
                sums.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
   
    sums.map(num => {
        if (isPrimeNumber(num)) answer++;
    })

    console.log(answer);
    return answer;
}

solution([1,2,7,6,4])