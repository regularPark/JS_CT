import sys
from collections import deque

sys.stdin = open('./BKJN_CT/SmallLighter/input.txt', 'r')

input = sys.stdin.readline

N = int(input())

graph = []

for _ in range(N):
    graph.append(list(map(int, input().rstrip())))

dx = [-1,1,0,0]
dy = [0,0,1,-1]

cntComplex = 0
homeRes = []

def BFS(x,y):
    q = deque([[x,y]])
    cntHome = 1

    while(q):
        x,y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < N and graph[nx][ny] == 1:
                q.append([nx,ny])
                graph[nx][ny] = 0
                cntHome += 1
    homeRes.append(cntHome)
    

for i in range(N):
    for j in range(N):
        if graph[i][j] == 1:
            graph[i][j] = 0
            BFS(i,j)
            cntComplex += 1


homeRes.sort()
print(cntComplex)
print('\n'.join(str(s) for s in homeRes))