/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;

    // Step 1: Detect cycle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            // Step 2: Find cycle start
            let ptr = head;

            while (ptr !== slow) {
                ptr = ptr.next;
                slow = slow.next;
            }

            return ptr;
        }
    }

    return null;
};


==============================================

var detectCycle = function(head) {
    const seen = new Set();

    while (head) {
        if (seen.has(head)) {
            return head;
        }

        seen.add(head);
        head = head.next;
    }

    return null;
};