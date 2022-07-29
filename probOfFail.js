function solution(N, stages) {
    var answer = [];
    let clearClient = {};
    let numOfClient = stages.length;

    for (var i = 1; i <= N; i++) {
        clearClient[i] = 0;
    }

    stages.map(stage => {
        if (stage <= N) {
            clearClient[stage] += 1
        }
    })

    for (var i = 0; i < Object.keys(clearClient).length; i++) {
        if (Object.keys(clearClient)[i] > N) {

        }
        const client = Object.values(clearClient)[i]
        if (client === 0) {
            answer.push([parseInt(Object.keys(clearClient)[i]), 0])
        } else {
            const prob = (client / numOfClient);
            numOfClient -= client;
            answer.push([parseInt(Object.keys(clearClient)[i]), prob]);
        }

    }

    answer.sort((a, b) => b[1] - a[1])
    console.log(answer.map(a => a[0]))

    return answer.map(a => a[0]);
}


solution(5, [2, 1, 2, 6, 2, 4, 3, 3])
solution(4, [4, 4, 4, 4, 4])