function solve(A) {
    let freq = new Map();
    let queue = [];
    let front = 0;
    let ans = "";

    for (let ch of A) {

        freq.set(ch, (freq.get(ch) || 0) + 1);

        queue.push(ch);

        while (
            front < queue.length &&
            freq.get(queue[front]) > 1
        ) {
            front++;
        }

        if (front < queue.length) {
            ans += queue[front];
        } else {
            ans += '#';
        }
    }

    return ans;
}

console.log(solve("abadbc"));
console.log(solve("abcabc"));