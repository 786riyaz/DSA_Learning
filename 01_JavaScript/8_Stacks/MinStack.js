/**
 * @param {string} val
 * @return {string}
 * 
 * Push ::  Push all the elements in normal stack
 *          If minStack top is bigger then the element then push into minStack
 * Pop ::   Pop all element from normal stack
 *          If popped element equals minstack top then pop from minstack
 * 
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    console.log("Pushing Value ::", val);
    this.stack.push(val);
    if (this.minStack.length == 0 || val <= this.minStack[this.minStack.length - 1]) {
      console.log("Pushing Value in Min Stack ::", val);
      this.minStack.push(val);
    }
    console.log("Stack ::", this.stack);
    console.log("Stack ::", this.minStack);
  }

  pop() {
    let removed = this.stack.pop();
    console.log("Popping Value ::", removed);

    if (removed === this.minStack[this.minStack.length - 1]) {
      let top = this.minStack.pop();
      console.log("Popping Value in Min Stack ::", top);
    }
    console.log("Stack ::", this.stack);
    console.log("Stack ::", this.minStack);
  }

  top() {
    console.log("Stack Top ::", this.stack[this.stack.length - 1]);
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    console.log("Min Top ::", this.minStack[this.minStack.length - 1]);
    return this.minStack[this.minStack.length - 1];
  }
}

//  Your MinStack object will be instantiated and called as such:
var obj = new MinStack();
obj.push(3);
obj.push(2);
obj.push(1);
console.log("===========");
obj.push(1);
obj.push(1);
obj.push(3);
obj.push(5);
console.log("===========");
obj.pop();
obj.pop();
obj.pop();
console.log("===========");
obj.push(11);
obj.push(8);
obj.push(6);
obj.push(9);
console.log("===========");
obj.pop();
obj.pop();
var param_3 = obj.top();
var param_4 = obj.getMin();
