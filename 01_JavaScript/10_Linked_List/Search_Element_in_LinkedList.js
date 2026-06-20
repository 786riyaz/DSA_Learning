
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {string}
 */

var search = function(head, target) {
    while (head) {
        if (head.val == target) {
            return "Yes";
        }
        head = head.next;
    }
    return "No";
};

// =================================================================

/**
 * @param {ListNode} head
 * @param {number} target
 * @return {string}
 */
var search = function(head, target) {
    // Base case: reached end of list
    if (head === null) {
        return "No";
    }

    // Base case: target found
    if (head.val === target) {
        return "Yes";
    }

    // Recursive call for remaining list
    return search(head.next, target);
};