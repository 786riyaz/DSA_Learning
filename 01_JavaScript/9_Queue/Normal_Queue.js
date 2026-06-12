class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(val) {
        this.items[this.rear] = val;
        this.rear++;
    }

    dequeue() {
        if (this.isEmpty()) return null;

        const value = this.items[this.front];
        delete this.items[this.front];
        this.front++;

        return value;
    }

    isEmpty() {
        return this.front === this.rear;
    }

    get_first_element() {
        return this.items[this.front];
    }
}

let queue = new Queue();
console.log("",queue.enqueue(0));
console.log("",queue.enqueue(1));
console.log("",queue.enqueue(2));
console.log("",queue.dequeue());
console.log("",queue.dequeue());
console.log("",queue.isEmpty());
console.log("",queue.get_first_element());
