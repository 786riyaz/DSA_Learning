/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // console.log("Input Head ::", head);
  // console.log("Input Value ::", val);

  while (head && head.val == val) {
    head = head.next;
  }
  let current = head;
  // console.log("Removed From Starting ::", current);

  while (current && current.next) {
    // console.log("Current ::", current, "||", current.next.val );
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(6);
const val = 6;
const result = removeElements(head, val);
console.log("Resulting Linked List ::", result);