/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let reversed = arr.reverse();
  if (arr.length < 2) return true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== reversed[reversed.length - i - 1]) return false;
  }
  return true;
};
