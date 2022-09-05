function solution(board, moves) {
    var answer = 0;
    const pickedList = [];

    moves.map(move => {
        for(var i = 0; i < board.length; i++) {
            if (board[i][move - 1] !== 0) {
                pickedList.push(board[i][move - 1]);
                board[i][move - 1] = 0;
                break;
            }
        }
    })
    
    var i = -1;
    while (true) {
        i++;
        if (i > pickedList.length) break;

        if (pickedList[i] === pickedList[i + 1] && i + 1 <= pickedList.length) {
            pickedList.splice(i + 1, 1);
            pickedList.splice(i, 1);
            answer += 2;
            i = -1;
            continue
        }        
    }
    
    return answer;
}

solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4])