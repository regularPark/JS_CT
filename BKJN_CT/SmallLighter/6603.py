import sys

sys.stdin = open('./BKJN_CT/SmallLighter/input.txt', 'r')

input = sys.stdin.readline

# 모든 방법 => DFS

def DFS(len, idx):
    if len == 6:
        print(*out)
        return
    for i in range(idx ,K):
        out.append(S[i])
        DFS(len + 1, i + 1)
        out.pop()

while True:
    arr = list(map(int, input().split()))
    K = arr[0]
    S = arr[1:]
    out = []
    DFS(0, 0)
    if K == 0:
        exit()
    print()
