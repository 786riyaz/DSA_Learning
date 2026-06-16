Bilkul. Ye problem pehli baar dekhne par thodi confusing lagti hai, lekin iska core idea bahut simple hai.

---

# Problem Kya Hai?

```js
nums = [1,3,-1,-3,5,3,6,7]
k = 3
```

Har size `3` ki window ka maximum nikalna hai.

```js
[1,3,-1]    => 3
[3,-1,-3]   => 3
[-1,-3,5]   => 5
[-3,5,3]    => 5
[5,3,6]     => 6
[3,6,7]     => 7
```

Answer:

```js
[3,3,5,5,6,7]
```

---

# Brute Force Approach

Har window ke andar loop lagao aur max nikalo.

```js
for every window
    find max
```

Time Complexity:

```js
O(n * k)
```

Agar

```js
n = 100000
k = 50000
```

ho gaya to TLE aa sakta hai.

---

# Optimal Approach Ka Main Idea

Hum ek **Monotonic Decreasing Queue** maintain karte hain.

Queue ke andar values nahi,

```js
indices
```

store karte hain.

---

# Monotonic Decreasing Queue Kya Hoti Hai?

Aisi queue jisme values hamesha decreasing order me rahe.

Example:

```js
[8,5,3]
```

Ye valid hai.

Lekin:

```js
[8,5,10]
```

Ye valid nahi hai.

Kyuki 10, 5 se bada hai.

To 10 aate hi 5 aur 8 ke baad wali chhoti values ko nikal denge.

---

# Chhoti Values Kyu Hata Rahe Hain?

Maan lo:

```js
[1,3]
```

Ab 3 aa gaya.

Kya 1 kabhi maximum ban sakta hai?

```js
Nahi
```

Kyuki 3 uske baad bhi hai aur usse bada bhi hai.

To 1 bekaar ho gaya.

Isliye remove kar do.

---

# Step By Step Dry Run

Input:

```js
nums = [1,3,-1,-3,5,3,6,7]
k = 3
```

Deque me indices store honge.

---

## i = 0

Value:

```js
1
```

Deque:

```js
[0]
```

Representing:

```js
[1]
```

---

## i = 1

Value:

```js
3
```

Back par:

```js
1
```

Hai.

Aur

```js
1 < 3
```

To 1 kabhi max nahi banega.

Remove kar do.

Deque:

```js
[]
```

Phir 1 add karo.

Deque:

```js
[1]
```

Representing:

```js
[3]
```

---

## i = 2

Value:

```js
-1
```

Back par:

```js
3
```

Hai.

```js
3 > -1
```

To remove nahi karenge.

Deque:

```js
[1,2]
```

Representing:

```js
[3,-1]
```

Ab first window complete ho gayi.

```js
[1,3,-1]
```

Maximum:

```js
nums[deque[0]]
=
nums[1]
=
3
```

Answer:

```js
[3]
```

---

## i = 3

Value:

```js
-3
```

Pehle check:

```js
window ke bahar to nahi?
```

Current window:

```js
[3,-1,-3]
```

Index 1 abhi bhi window ke andar hai.

To remove nahi karenge.

Deque:

```js
[1,2,3]
```

Representing:

```js
[3,-1,-3]
```

Maximum:

```js
3
```

Answer:

```js
[3,3]
```

---

## i = 4

Value:

```js
5
```

Ab maza aata hai.

Back se compare:

```js
-3 < 5
```

Remove

```js
-1 < 5
```

Remove

```js
3 < 5
```

Remove

Deque:

```js
[]
```

Phir 5 add.

Deque:

```js
[4]
```

Representing:

```js
[5]
```

Maximum:

```js
5
```

Answer:

```js
[3,3,5]
```

---

# Important Observation

Deque ka first element hamesha current window ka maximum hota hai.

Kyuki:

1. Window ke bahar wale elements remove kar diye.
2. Chhote elements remove kar diye.
3. Sabse bada element front par bacha.

Isliye:

```js
result.push(nums[deque[front]])
```

kar dete hain.

---

# Code Ke 2 Important While Loops

## Loop 1

```js
while (front < deque.length &&
       deque[front] <= i - k)
{
    front++;
}
```

Kaam:

```js
Window ke bahar wale indices hatao.
```

Example:

```js
k = 3
i = 4
```

Window:

```js
[2,3,4]
```

Agar deque me index 1 hai to wo bahar hai.

Remove.

---

## Loop 2

```js
while (
    deque.length > front &&
    nums[deque[deque.length - 1]] <= nums[i]
) {
    deque.pop();
}
```

Kaam:

```js
Current value se chhoti values hatao.
```

Example:

```js
Deque = [3,-1,-3]

Current = 5
```

Sab remove.

Kyuki 5 ke hote hue ye kabhi max nahi banenge.

---

# Technique Ka Naam

Ye technique generally kehlati hai:

**Monotonic Queue / Monotonic Deque**

Aur iska use hota hai:

* Sliding Window Maximum (LeetCode 239)
* Sliding Window Minimum
* Shortest Subarray Problems
* Monotonic Stack/Queue based optimization

---

# Ek Line Me Idea

**Deque me sirf un elements ke indices rakho jo future me maximum ban sakte hain. Jo element current element se chhota hai, usko turant hata do kyuki wo kabhi maximum nahi banega.**
