var reverseList = function(head) {

    if (!head || !head.next) {
        return head;
    }

    let newHead = reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
};


=====================================


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
var reverseList = function(head) {

    let prev = null;
    let curr = head;

    while (curr) {

        let next = curr.next; // save next node

        curr.next = prev;     // reverse link

        prev = curr;          // move prev forward
        curr = next;          // move curr forward
    }

    return prev;
};