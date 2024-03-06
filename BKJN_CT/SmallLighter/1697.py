import sys
from collections import deque

sys.stdin = open("./BKJN_CT/SmallLighter/input.txt", "r")

input = sys.stdin.readline

N, K = map(int, input().split())

# 가장 빠른 시간 = BFS

visited = [False] * 100001

def BFS(v):
    q = deque([v])
    ans = 0

    while(q):
        length = len(q)
        for _ in range(length):
            x = q.popleft()
            if x == K:
                print(ans)
                break
            for nx in (x -1 , x + 1, x * 2):
                if 0 <= nx < 100001 and not visited[nx]:
                    visited[nx] = True
                    q.append(nx)
        ans += 1

BFS(N)