import sys
from collections import deque

sys.stdin = open("./BKJN_CT/SmallLighter/input.txt", "r") 


N, M, V = map(int, sys.stdin.readline().split())

graph = [[False] * (N + 1) for _ in range(N + 1)]

for _ in range(M):
    a,b = map(int, sys.stdin.readline().split())
    graph[a][b] = True
    graph[b][a] = True

dfsVisited = [False] * (N + 1)
bfsVisited = [False] * (N + 1)

def dfs(v):
    dfsVisited[v] = True
    print(v, end=" ")
    for i in range(1, N + 1):
        if not dfsVisited[i] and graph[v][i]:
            dfs(i)

def bfs(v):
    q = deque([v])
    bfsVisited[v] = True
    while(q):
        v = q.popleft()
        print(v, end=" ")
        for i in range(1, N + 1):
            if not bfsVisited[i] and graph[v][i]:
                q.append(i)
                bfsVisited[i] = True

dfs(V)
print()
bfs(V)