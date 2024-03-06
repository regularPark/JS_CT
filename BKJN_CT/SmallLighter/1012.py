import sys
from collections import deque

sys.stdin = open("./BKJN_CT/SmallLighter/input.txt", "r")

input = sys.stdin.readline

tc = int(input())

dx = [-1,1,0,0]
dy = [0,0,-1,1]

def bfs(x,y):
    q = deque([[x,y]])
    while(q):
        x,y = q.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < M and 0 <= ny < N and graph[nx][ny] == 1:
                graph[nx][ny] = 0
                q.append([nx,ny])

for _ in range(tc):
    M, N, K = map(int, input().split())
    graph = [[0] * (N) for _ in range(M)]
    cnt = 0

    for _ in range(K):
        [x, y] = map(int, input().split())
        graph[x][y] = 1
    
    for i in range(M):
        for j in range(N):
            if graph[i][j] == 1:
                bfs(i,j)
                cnt += 1
    
    print(cnt)