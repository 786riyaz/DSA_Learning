Bilkul. Ye problem pehle thodi confusing lagti hai, lekin agar tumne **Next Greater Element** aur **Stock Spanner** samajh liya hai, to ye bhi same monotonic stack pattern hai.

Input:

```js
[2,1,5,6,2,3]
```

Histogram:

```txt
      |
      | |
      | |
|     | |
| |   | |   |
| | | | | | |
-------------
2 1 5 6 2 3
```

Hume largest rectangle ka area nikalna hai.

---

# Sabse important baat

Har bar ke liye hume pata karna hai:

```txt
Ye bar left aur right me kitna extend kar sakta hai?
```

Example:

```txt
[2,1,5,6,2,3]
     ^
```

Height = 5

Ye left me kahan tak ja sakta hai?

```txt
2 1 5 6 2 3
  ^
```

1 chhota hai 5 se.

To left boundary mil gayi.

---

Right me kahan tak ja sakta hai?

```txt
2 1 5 6 2 3
        ^
```

2 chhota hai 5 se.

To right boundary bhi mil gayi.

---

Ab rectangle:

```txt
5 6
```

Minimum height:

```txt
5
```

Width:

```txt
2
```

Area:

```txt
5 × 2 = 10
```

---

# Stack me kya store karenge?

Value nahi.

Index store karenge.

```js
stack = [index]
```

Kyuki baad me width calculate karni hai.

---

# Stack ka rule

Stack hamesha increasing heights rakhega.

Example:

```txt
[2,1,5,6]
```

Process karte waqt:

```txt
stack = [1,2,3]
```

Matlab:

```txt
1 < 5 < 6
```

Increasing order.

---

# Dry Run

Input:

```js
[2,1,5,6,2,3]
```

End me ek dummy 0 add kar dete hain:

```js
[2,1,5,6,2,3,0]
```

Ye trick bahut important hai.

```js
heights.push(0);
```

Taaki end me stack ke saare elements nikal jaye.

---

## Step 1

```js
i = 0
height = 2
```

Stack empty hai.

Push:

```txt
stack = [0]
```

---

## Step 2

```js
i = 1
height = 1
```

Current:

```txt
1
```

Stack top:

```txt
2
```

Aur:

```txt
1 < 2
```

To 2 ka rectangle ab khatam ho gaya.

Pop:

```js
top = 0
```

---

Height:

```js
height = heights[0]
       = 2
```

Stack empty ho gaya.

```txt
[]
```

---

Jab stack empty ho jaye:

```js
width = i
```

Matlab:

```js
width = 1
```

Area:

```js
2 * 1 = 2
```

Maximum:

```js
maxArea = 2
```

---

Ab current index push karo:

```txt
stack = [1]
```

---

## Step 3

```js
i = 2
height = 5
```

Top:

```txt
1
```

Current:

```txt
5
```

```txt
5 > 1
```

Push.

```txt
stack = [1,2]
```

---

## Step 4

```js
i = 3
height = 6
```

```txt
6 > 5
```

Push.

```txt
stack = [1,2,3]
```

---

## Step 5

```js
i = 4
height = 2
```

Ab interesting part.

Current:

```txt
2
```

Top:

```txt
6
```

```txt
2 < 6
```

To 6 ka rectangle khatam.

Pop.

```js
top = 3
```

Height:

```js
6
```

---

Stack:

```txt
[1,2]
```

Ab stack top:

```txt
2
```

Matlab index 2 wala bar (height 5).

Ye 6 ke left me pehla smaller hai.

---

Right smaller:

```txt
i = 4
```

Current index.

---

Width formula:

```js
width = i - stackTop - 1
```

```js
width = 4 - 2 - 1
```

```js
width = 1
```

Area:

```js
6 × 1 = 6
```

---

Ab fir check:

```txt
2 < 5
```

To 5 bhi pop.

---

Height:

```js
5
```

Stack:

```txt
[1]
```

Left smaller:

```txt
index 1
```

Right smaller:

```txt
index 4
```

Width:

```js
4 - 1 - 1
```

```js
2
```

Area:

```js
5 × 2
```

```js
10
```

Maximum:

```js
10
```

---

# Ye formula kyu kaam karta hai?

Maan lo:

```txt
2 1 5 6 2 3
  L 5 6 R
```

Jab 5 pop hua:

```txt
L = index 1
R = index 4
```

5 rectangle bana sakta hai:

```txt
index 2 se index 3 tak
```

Width:

```txt
2 elements
```

Formula:

```js
R - L - 1
```

```js
4 - 1 - 1
```

```js
2
```

Isi liye:

```js
width = i - stack[stack.length - 1] - 1;
```

poore solution ki jaan hai.

---

# Simple Rule Yaad Rakho

Jab bhi koi element stack se pop ho:

```js
let top = stack.pop();
```

To:

```txt
Current index i
=
First Smaller Right
```

Aur

```txt
Stack ka naya top
=
First Smaller Left
```

Bas in dono se width nikal jaati hai.

```js
width = rightSmaller - leftSmaller - 1
```

Aur area:

```js
height * width
```

Isi wajah se Largest Rectangle in Histogram ko log bolte hain:

> "Next Smaller Element Left + Next Smaller Element Right using one monotonic increasing stack"

Ye problem monotonic stack ka sabse famous application hai.
