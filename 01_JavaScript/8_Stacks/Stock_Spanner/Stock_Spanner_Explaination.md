JavaScript me optimal **Monotonic Stack** solution:

```js
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
        let span = 1;

        while (
            this.stack.length &&
            this.stack[this.stack.length - 1][0] <= price
        ) {
            span += this.stack.pop()[1];
        }

        this.stack.push([price, span]);

        return span;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
```

---

### Dry Run

Input:

```js
100, 80, 60, 70, 60, 75, 85
```

#### next(100)

```js
span = 1

stack = [[100,1]]

return 1
```

---

#### next(80)

```js
100 <= 80 ? No

stack = [
  [100,1],
  [80,1]
]

return 1
```

---

#### next(60)

```js
80 <= 60 ? No

stack = [
  [100,1],
  [80,1],
  [60,1]
]

return 1
```

---

#### next(70)

```js
60 <= 70 ? Yes

span = 1 + 1 = 2

stack = [
  [100,1],
  [80,1]
]

80 <= 70 ? No

push [70,2]
```

```js
stack = [
  [100,1],
  [80,1],
  [70,2]
]

return 2
```

---

#### next(60)

```js
70 <= 60 ? No

push [60,1]

return 1
```

---

#### next(75)

```js
span = 1

60 <= 75
span = 2

70 <= 75
span = 4

80 <= 75 ? No

push [75,4]
```

```js
return 4
```

---

#### next(85)

```js
span = 1

75 <= 85
span = 5

80 <= 85
span = 6

100 <= 85 ? No

push [85,6]
```

```js
return 6
```

Output:

```js
[1, 1, 1, 2, 1, 4, 6]
```

---

### Sabse Important Observation

Jab hum:

```js
span += this.stack.pop()[1];
```

karte hain, to hum ek-ek day count nahi kar rahe.

Example:

```js
[70, 2]
```

ka matlab:

```text
70 ka span already 2 hai
(70 aur uske pichhle 1 element)
```

To jab current price `75` aata hai aur `70 <= 75` hota hai, hum direct:

```js
span += 2
```

kar dete hain.

Isi wajah se har element **sirf ek baar push** aur **ek baar pop** hota hai.

Total complexity:

```text
Time: O(n)
Space: O(n)
```

Aur har `next()` call ki amortized complexity:

```text
O(1)
```

jo is problem ka expected solution hai.
