function solution(id_list, report, k) {
    var answer = [];

    const idList = {};
    const reportCount = {};
    const banList = [];

    // 초기화
    id_list.map(id => idList[id] = 0);

    const set = new Set(report);
    const reportList = [...set];
     
    const updateReport = reportList.map(rep => rep.split(" "));
    
    updateReport.map(rep => {
        if (!reportCount[rep[1]]) { // 0 False
            reportCount[rep[1]] = 1;
        } else if (reportCount[rep[1]]) {
            reportCount[rep[1]]++;
        }
    })


    // 밴 리스트에 k 횟수를 넘은 아이디만 추가
    Object.keys(reportCount).map(key => {
        if (reportCount[key] >= k) {    // value와 비교
            banList.push(key);
        }
    })  

    updateReport.map(rep => {
        if (banList.includes(rep[1])) {
            idList[rep[0]]++;
        }
    })

    answer = Object.values(idList);
    console.log(answer);
    return answer;
}

solution(["muzi", "frodo", "apeach", "neo"],
	["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],	2)

solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)


/* shortest one
function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    let counts = new Map();
    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1)
    }
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    let answer = id_list.map(a=>good.get(a)||0)
    return answer;
}
*/