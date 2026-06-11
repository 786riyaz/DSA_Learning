# Problem Kya Keh Raha Hai?

Maan lo bars ki height hai:

```js
[4, 2, 0, 3, 2, 5]
```

Visualization:

```text
                █
█               █
█       █       █
█ █     █ █     █
█ █ █   █ █     █
---------------
4 2 0 3 2 5
```

Barish hone ke baad pillars ke beech me paani bhar jayega.

Hume total water calculate karna hai.

---

# Stack Approach Ka Main Idea

Hum left se right traverse karenge.

Stack me **indices** store karenge.

Aur stack ko aise maintain karenge ki heights decreasing order me rahe.

Example:

```js
[4,2,0]
```

Stack:

```text
[0,1,2]
```

Height:

```text
4 > 2 > 0
```

Sab decreasing hai.

---

# Water Kab Trap Hota Hai?

Water trap hone ke liye 3 cheeze chahiye:

```text
Left Wall
    |
    v

█     █
█  ?  █
█  ?  █
---------
```

1. Left wall
2. Right wall
3. Beech me koi chhota bar (bottom)

Tabhi container banega.

---

# Example Step By Step

Array:

```js
[4,2,0,3]
```

---

## i = 0

Height = 4

Stack empty.

Push:

```text
Stack = [0]
```

---

## i = 1

Height = 2

```text
2 < 4
```

Push:

```text
Stack = [0,1]
```

---

## i = 2

Height = 0

```text
0 < 2
```

Push:

```text
Stack = [0,1,2]
```

---

## i = 3

Height = 3

Ab interesting part shuru.

Current:

```text
4 2 0 3
      ^
```

Current bar = 3

Stack top = 0

```text
3 > 0
```

Matlab hume right wall mil gayi.

Ab water calculate kar sakte hain.

---

# Pehla Pop

```js
bottom = stack.pop()
```

```text
bottom = index 2
```

Height:

```text
4 2 0 3
    ^ ^
```

Ab:

```text
Left Wall = 2
Bottom    = 0
Right Wall= 3
```

---

## Width

```js
width = i - leftWall - 1
```

```js
3 - 1 - 1 = 1
```

Ek block beech me hai.

---

## Height

Container ki height:

```js
min(leftWall, rightWall)
```

Kyuki chhoti wall tak hi paani bhar sakta hai.

```js
min(2,3)=2
```

Bottom ki height:

```js
0
```

Toh water height:

```js
2 - 0 = 2
```

---

## Water

```js
width * height
```

```js
1 * 2 = 2
```

Water = 2

---

# Fir Check

Ab stack top = index 1

Height:

```text
4 2 0 3
  ^
```

Current:

```text
3
```

Again:

```js
3 > 2
```

Pop again.

---

# Dusra Pop

```js
bottom = 1
```

Ab:

```text
4 2 0 3
^     ^
```

Left wall:

```text
4
```

Right wall:

```text
3
```

Bottom:

```text
2
```

---

## Width

```js
3 - 0 - 1
```

```js
= 2
```

---

## Height

```js
min(4,3) - 2
```

```js
= 1
```

---

## Water

```js
2 * 1
```

```js
= 2
```

---

Total:

```js
2 + 2 = 4
```

---

# Ye Formula Kyu Kaam Karta Hai?

Jab bhi pop karte ho:

```text
Left Wall
    |
    v

█       █
█   ?   █
█   x   █
---------
```

Pop hua element (`x`) bottom hai.

Current index right wall hai.

Stack ka next top left wall hai.

Ab container complete ho gaya.

Toh:

```js
water =
width *
(min(leftWall,rightWall)-bottom)
```

---

# Stack Me Indices Hi Kyu Store Karte Hain?

Water nikalne ke liye hume chahiye:

### Width

```js
right - left - 1
```

Ye index se hi niklega.

Agar sirf heights rakhenge:

```text
4 2 0 3
```

Toh pata nahi chalega ki walls kitni door hain.

Isliye stack me indices store karte hain.

---

# Monotonic Stack Kya Hai?

Ye stack:

```text
4
4 2
4 2 0
```

Always decreasing heights rakhta hai.

Jab bada element milta hai:

```text
4 2 0 3
      ^
```

Toh pop karke water calculate karte hain.

Isi pattern ko **Monotonic Decreasing Stack** bolte hain.

Yehi pattern use hota hai:

* Next Greater Element
* Daily Temperatures
* Largest Rectangle in Histogram
* Stock Span
* Trapping Rain Water

---

Ek line me intuition:

> Stack me hum potential left walls store karte rehte hain. Jab koi badi height (right wall) mil jati hai, tab stack ke top ko bottom maan kar left wall aur right wall ke beech trapped water calculate kar lete hain.
