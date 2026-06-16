var isPalindrome = function(head) {
    if (!head || !head.next) return true;

    // Find middle
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse second half
    let prev = null;
    let curr = slow;

    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // Compare both halves
    let p1 = head;
    let p2 = prev;

    while (p2) {
        if (p1.val !== p2.val) {
            return false;
        }

        p1 = p1.next;
        p2 = p2.next;
    }

    return true;
};