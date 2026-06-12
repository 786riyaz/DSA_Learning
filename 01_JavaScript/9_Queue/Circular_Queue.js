/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.queue = new Array(k);
  this.capacity = k;

  this.front = -1;
  this.rear = -1;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false;
  }

  if (this.isEmpty()) {
    this.front = 0;
    this.rear = 0;
  } else {
    this.rear = (this.rear + 1) % this.capacity;
  }

  this.queue[this.rear] = value;

  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false;
  }

  // Last element
  if (this.front === this.rear) {
    this.front = -1;
    this.rear = -1;
  } else {
    this.front = (this.front + 1) % this.capacity;
  }

  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) {
    return -1;
  }

  return this.queue[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) {
    return -1;
  }

  return this.queue[this.rear];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.front === -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return (this.rear + 1) % this.capacity === this.front;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 * 
 * 
 * 
true
true
true
false
3
true
true
true
4
 */

 var obj = new MyCircularQueue(3)
  var param_1 = obj.enQueue(1);
  console.log("==>",param_1);
  var param_1 = obj.enQueue(2);
  console.log("==>",param_1);
  var param_1 = obj.enQueue(3);
  console.log("==>",param_1);
  var param_1 = obj.enQueue(4);
  console.log("==>",param_1);
  var param_2 = obj.deQueue();
  console.log("==>",param_2);
  var param_3 = obj.Front();
  console.log("==>",param_3);
  var param_4 = obj.Rear();
  console.log("==>",param_4);
  var param_5 = obj.isEmpty();
  console.log("==>",param_5);
  var param_6 = obj.isFull();
  console.log("==>",param_6);


