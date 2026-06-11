class StockSpanner {
  constructor() {
    // [price, span]
    this.stack = [];
  }

  /**
   * @param {number} price
   * @return {number}
   */
  next(price) {
    // console.log("Input ::", price);
    let span = 1;

    while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
      
      span += this.stack.pop()[1];
      // console.log("Stack After Poping ::", ...this.stack);
    }

    this.stack.push([price, span]);
    // console.log("Stack After Pushing ::", ...this.stack);
    // console.log("Span ::", span);
    // console.log("===================================");
    return span;
  }
}
/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
var obj = new StockSpanner();
var param_1 = obj.next(85);
var param_1 = obj.next(76);
var param_1 = obj.next(43);
var param_1 = obj.next(26);
var param_1 = obj.next(52);
