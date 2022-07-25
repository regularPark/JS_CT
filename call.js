function solution(id_list, report, k) {
    var answer = [];
    var re_li = new Set(report);
    var re_li_ = [...re_li];
    var reporter = [];
    var vio_li = [];

    // answer 초기화
    for (var i = 0; i < id_list.length; i++){
        answer.push(0);
    }

    // 신고자가 누굴 신고했는지 리스트
    for (var i = 0; i < id_list.length; i++) {
        reporter.push([]);
        for (var j = 0; j < re_li_.length; j++) {
            if (id_list[i] === re_li_[j].split(" ")[0]) {   // 걸린 경우
                reporter[i].push(re_li_[j].split(" ")[1]);
            }
        }
    }

    // 위반자 신고 당한 횟수 리스트
    for (var i = 0; i < id_list.length; i++) {
        vio_li.push(0)
        for (var j = 0; j < re_li_.length; j++) {
            if (id_list[i] === re_li_[j].split(" ")[1]) {   // 걸린 경우
                vio_li[i]++;
            }
        }
    }
    

    // 메일 가는 횟수 계산
    for (var i = 0; i < vio_li.length; i++) {
        if (vio_li[i] >= k) {
            for (var j = 0; j < reporter.length; j++) {
                if (reporter[j].includes(id_list[i])) {
                    answer[j]++;
                }
            }
        }
    }

    return answer;
}

solution(["muzi", "frodo", "apeach", "neo"],
	["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],	2)

solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)