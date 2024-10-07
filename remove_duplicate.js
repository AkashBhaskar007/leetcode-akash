/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let dummy = new ListNode(0);
  let current = dummy;
  let seen = new Set();
  while (head) {
    if (!seen.has(head.val)) {
      seen.add(head.val);
      current.next = new ListNode(head.val);
      current = current.next;
    }
    head = head.next;
  }

  return dummy.next;
};
let head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(3))));
let result = deleteDuplicates(head);
const printList = (node) => {
  let result = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
};
