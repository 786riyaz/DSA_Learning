class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);

    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  }

  pop() {
    const removed = this.stack.pop();

    if (removed === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

var obj = new MinStack();
console.log(obj.push(6));
console.log(obj.push(-2));
console.log(obj.push(0));
console.log(obj.push(-3));
console.log(obj.push(4));
console.log(obj.getMin());
console.log(obj.pop());
console.log(obj.getMin());
console.log(obj.pop());
console.log(obj.top());
console.log(obj.getMin());
console.log(obj.pop());
console.log(obj.top());
console.log(obj.getMin());
console.log(obj.pop());
