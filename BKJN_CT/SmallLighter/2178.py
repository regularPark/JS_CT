import sys
from collections import deque

sys.stdin = open("./BKJN_CT/SmallLighter/input.txt", "r") 

input = sys.stdin.readline

N, M = map(int, input().split())

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

graph = []

for _ in range(N):
    graph.append(list(map(int, input().rstrip())))

# 최소의 칸 문제 => BFS

def bfs():
    q = deque([[0,0]])
    while(q):
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < M and graph[nx][ny] == 1:
                q.append([nx, ny])
                graph[nx][ny] = graph[x][y] + 1

bfs()
print(graph[N - 1][M - 1])