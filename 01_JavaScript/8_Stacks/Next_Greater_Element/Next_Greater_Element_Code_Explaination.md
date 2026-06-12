Bilkul. Chaliye is code ka **intuition** aur **approach** simple Hindi me samajhte hain.

---

# Problem Kya Keh Rahi Hai?

Har element ke liye uska **Next Greater Element** dhoondho.

Example:

```js
[1, 2, 3, 4, 3]
```

Output:

```js
[2, 3, 4, -1, 4]
```

Kyuki:

```text
1 ka next greater = 2
2 ka next greater = 3
3 ka next greater = 4
4 ka next greater = nahi mila => -1
3 ka next greater = 4
```

Aur array **circular** hai.

Matlab:

```text
[5,4,3,2,1]
```

ke last element `1` ke baad fir se array start ho jayega:

```text
5,4,3,2,1,5,4,3,2,1
```

---

# Stack Me Kya Store Kar Rahe Hain?

Hum stack me **indices** store karte hain.

```js
stack = [0,1,2]
```

Matlab:

```js
nums[0]
nums[1]
nums[2]
```

inke answers abhi tak nahi mile hain.

---

# Result Array

```js
let result = new Array(n).fill(-1);
```

Initially:

```js
[-1,-1,-1,-1,-1]
```

Assume kar lo kisi ko next greater nahi milega.

Baad me jisko mil jayega uski value update kar denge.

---

# Main Idea

Jab bhi koi bada number milta hai:

```js
nums[index]
```

to stack ke andar jo chhote elements pade hain unka answer mil jata hai.

Example:

```text
Stack me:

3
2
1

Current Number = 5
```

Ab:

```text
1 ka next greater = 5
2 ka next greater = 5
3 ka next greater = 5
```

Sabka answer ek saath fill ho jayega.

Isi liye stack efficient hai.

---

# Circular Array Kaise Handle Hui?

Ye line:

```js
for (let i = 0; i < 2 * n; i++)
```

Array ko 2 baar traverse kar rahi hai.

Example:

```js
nums = [5,4,3,2,1]
```

Actual traversal:

```text
5 4 3 2 1
5 4 3 2 1
```

---

# Ye Line Kya Kar Rahi Hai?

```js
let index = i % n;
```

Example:

```text
n = 5
```

| i | index |
| - | ----- |
| 0 | 0     |
| 1 | 1     |
| 2 | 2     |
| 3 | 3     |
| 4 | 4     |
| 5 | 0     |
| 6 | 1     |
| 7 | 2     |
| 8 | 3     |
| 9 | 4     |

Dekho 5 ke baad fir se 0 aa gaya.

Isliye circular traversal ho gayi.

---

# While Loop Ka Logic

```js
while (
  stack.length &&
  nums[stack[stack.length - 1]] < nums[index]
)
```

Hindi me:

```text
Jab tak stack khaali nahi hai
Aur current element stack ke top wale element se bada hai
Tab tak pop karte raho.
```

---

Example:

```text
Stack:
[1,2,3]

Current = 5
```

Check:

```text
3 < 5 ✔
```

Pop:

```text
result[3] = 5
```

Fir:

```text
2 < 5 ✔
```

Pop:

```text
result[2] = 5
```

Fir:

```text
1 < 5 ✔
```

Pop:

```text
result[1] = 5
```

---

# Pop Karne Ke Baad

```js
let topElement = stack.pop();
result[topElement] = nums[index];
```

Matlab:

```text
Jo element stack se nikla
Uska next greater mil gaya
```

---

Example:

```text
nums = [5,4,3,2,1]
```

Current:

```text
5
```

Stack Top:

```text
1
```

To:

```text
1 ka next greater = 5
```

---

# Push Kab Kar Rahe Hain?

```js
if (i < n)
  stack.push(index);
```

Sirf first traversal me.

---

### Kyun?

Pehli baar:

```text
5 4 3 2 1
```

dekhte waqt hi indices stack me daal dete hain.

Second traversal:

```text
5 4 3 2 1
```

sirf answers dhoondhne ke liye hai.

Agar second pass me bhi push karoge:

```text
0 1 2 3 4
0 1 2 3 4
```

to duplicate indices aa jayenge.

Isliye:

```js
if (i < n)
```

lagaya hai.

---

# Stack Me Kya Property Maintain Ho Rahi Hai?

Stack hamesha:

```text
Bade → Chhote
```

order me rehti hai.

Example:

```text
5
4
3
2
```

Ye **Monotonic Decreasing Stack** kehlati hai.

---

# Example

```js
[5,4,3,2,1]
```

First pass ke baad:

```text
stack = [0,1,2,3,4]
```

Sab pending hain.

---

Second pass me jab fir se:

```text
5
```

milta hai.

To:

```text
1 ka answer = 5
2 ka answer = 5
3 ka answer = 5
4 ka answer = 5
```

sab pop ho jaate hain.

Sirf:

```text
5
```

bachta hai.

Kyuki usse bada koi number nahi hai.

Isliye:

```text
result[0] = -1
```

rehta hai.

---

# Ek Line Me Pura Logic

**Stack me un indices ko rakho jinka Next Greater Element abhi tak nahi mila hai. Jab koi bada element mile, to stack se chhote elements nikaal kar unka answer fill kar do. Circular array handle karne ke liye array ko 2 baar traverse karo.**

Isi wajah se solution:

```text
Time Complexity = O(n)
Space Complexity = O(n)
```

hai, jo is problem ka optimal solution hai.
