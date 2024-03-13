import sys

sys.stdin = open('./SWEA/sample_input.txt', 'r')

input = sys.stdin.readline

case = 0

for _ in range(10):
    N = int(input())
    ans = 0
    arr = list(map(int, input().split()))
    case += 1
    for i in range(2, N - 2):
        maxFloor = max(arr[i-2:i] + arr[i+1:i+3])
        if maxFloor >= arr[i]:
            continue
        elif maxFloor < arr[i]:
            ans += arr[i] - maxFloor
    print('#' + str(case) + ' ' + str(ans))