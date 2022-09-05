function solution(m, d) {
    let date = {
        1: 31,
        2: 29,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }
    let week = {
        0: "THU",
        1: "FRI",
        2: "SAT",
        3: "SUN",
        4: "MON",
        5: "TUE",
        6: "WED"
    }
    let day = 0;
    let answer = '';
    for (var i = 1; i < m; i++) {
        day += date[i];
    }
    day += d;
    return week[day % 7];
}

solution(5, 24)