const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// 최단 => bfs

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return false;
    }

    const data = this.head.data;
    this.head = this.head.next;
    this.length--;

    return data;
  }
}

const [M, N] = input.shift().split(' ').map(Number);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const graph = input.map((row) => row.split(' ').map(Number));

const q = new Queue();

let day = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (graph[i][j] === 1) {
      q.enqueue([i, j, 0]);
    }
  }
}

// 사실 큐를 구현하는게 관건이고, 그렇게 어렵지는 않다. 같은 날짜에 동시에 존재하는
// 익은 토마토를 큐에 넣고 bfs로 탐색하면 해결.
const bfs = (graph, queue) => {
  while (queue.length) {
    let [x, y, cnt] = queue.dequeue();

    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && graph[nx][ny] === 0) {
        graph[nx][ny] = 1;
        queue.enqueue([nx, ny, cnt + 1]);
      }
    }
    day = cnt;
  }
  let answer = day;

  for (let i = 0; i < graph.length; i++) {
    if (graph[i].includes(0)) {
      answer = -1;
    }
  }

  return answer;
};

console.log(bfs(graph, q));
