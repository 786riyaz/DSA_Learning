Bilkul. Pehle intuition samajhte hain, phir algorithm.

---

# 1. Problem kya bol raha hai?

Hume do numbers diye gaye hain:

* `K`
* `M`

Aur hume **sabse chhota N** nikalna hai jiske liye:

```text
F(N, K) = M
```

jahan:

```text
F(N, K)
```

matlab:

> 1 se N tak ke numbers ko **dictionary order (lexicographical order)** mein sort karo, aur dekho K kis position par aata hai.

---

## Example

`N = 11`

Normal order:

```text
1 2 3 4 5 6 7 8 9 10 11
```

Lexicographical order:

```text
1
10
11
2
3
4
5
6
7
8
9
```

Positions:

```text
1  -> 1st
10 -> 2nd
11 -> 3rd
2  -> 4th
3  -> 5th
...
```

Isliye:

```text
F(11, 2) = 4
```

---

# 2. Brute Force kyun nahi chalega?

Constraints:

```text
K, M <= 10^9
```

Agar har N ke liye list banaoge:

```js
[1...N]
```

aur sort karoge, to impossible ho jayega.

Hume smart tarika chahiye.

---

# 3. Lexicographical order ko Tree ki tarah socho

Example:

```text
1
├──10
│  ├──100
│  ├──101
│  └──...
├──11
├──12
└──...

2
├──20
├──21
└──...

3
...
```

Ye ek prefix tree (Trie) jaisa hai.

Lexicographical traversal:

```text
1
10
100
101
...
11
12
...
2
20
21
...
3
...
```

---

# 4. Rank nikalne ka idea

Maan lo:

```text
N = 200
K = 23
```

Hume dekhna hai:

```text
23 se pehle kitne numbers aate hain?
```

Rank =

```text
(23 se pehle wale numbers) + 1
```

---

## Kaun kaun pehle aayega?

Lexicographically:

```text
1...
```

se start hone wale sab numbers pehle aayenge.

Phir:

```text
2
20
21
22
```

phir

```text
23
```

aayega.

To hume count karna hai:

```text
prefix 1 ke niche kitne numbers hain?
prefix 20 ke niche kitne?
prefix 21 ke niche kitne?
prefix 22 ke niche kitne?
```

---

# 5. countPrefix kya karta hai?

Ye sabse important function hai.

Maan lo:

```text
N = 200
prefix = 2
```

Kitne numbers `<= 200` hain jo 2 se start hote hain?

```text
2
20-29
200
```

Total:

```text
1 + 10 + 1 = 12
```

---

## Formula

Standard trick:

```js
cur = prefix
next = prefix + 1
```

Example:

```text
prefix = 2

cur=2
next=3
```

Range:

```text
[2,3)
```

contains:

```text
2
```

Count:

```text
3-2 = 1
```

---

Next level:

```text
20-29
```

```js
cur *= 10
next *= 10

cur=20
next=30
```

Count:

```text
30-20 = 10
```

---

Next level:

```text
200-299
```

But N=200

So only:

```text
200
```

exists.

Count:

```text
201-200 = 1
```

Total:

```text
1 + 10 + 1 = 12
```

---

# 6. Rank kaise nikalte hain?

Example:

```text
N = 200
K = 23
```

---

### Step 1

23 ka first digit:

```text
2
```

2 se chhote roots:

```text
1
```

To:

```text
countPrefix(1)
```

add karenge.

Ye count karega:

```text
1
10-19
100-199
```

Total:

```text
111
```

---

### Step 2

Ab hum prefix `2` par aa gaye.

23 ka next digit:

```text
3
```

Isse chhote digits:

```text
0,1,2
```

To add:

```text
countPrefix(20)
countPrefix(21)
countPrefix(22)
```

---

Ye numbers 23 se pehle aate hain.

Fir finally:

```text
+1
```

for 23 itself.

Mil gaya rank.

---

# 7. Binary Search kyun?

Ab maan lo:

```text
K = 2
```

Aur N badhate ja rahe hain:

```text
N=2
rank=2

N=11
rank=4

N=19
rank=11

N=29
rank=12

...
```

Notice:

```text
rank kabhi decrease nahi hota.
```

Ya same rahega ya badhega.

Isliye:

```text
F(N,K)
```

monotonic hai.

Monotonic function par binary search lag sakti hai.

---

# 8. Binary Search kya karegi?

Hum smallest N dhoondte hain jahan:

```text
rank(N) >= M
```

---

Example:

```text
K=2
M=4
```

Ranks:

```text
N=10 -> 3
N=11 -> 4
N=12 -> 4
N=13 -> 4
...
```

Smallest N:

```text
11
```

---

Binary search ke baad:

```js
ans = smallest N with rank >= M
```

Check:

```js
rank(ans) == M ?
```

---

Agar:

```text
rank(ans)=M
```

to answer mil gaya.

Otherwise:

```text
aisa N exist hi nahi karta
```

return:

```text
0
```

---

# 9. Example Complete Walkthrough

Input:

```text
K = 2
M = 4
```

---

### N=2

Lexicographical:

```text
1 2
```

Rank:

```text
2
```

---

### N=9

```text
1 2 3 4 5 6 7 8 9
```

Rank:

```text
2
```

---

### N=10

```text
1 10 2 3 4 5 6 7 8 9
```

Rank:

```text
3
```

---

### N=11

```text
1 10 11 2 3 4 5 6 7 8 9
```

Rank:

```text
4
```

Mil gaya.

Answer:

```text
11
```

---

# 10. Special Case: K = 1, 10, 100 ...

Ye bahut important observation hai.

Example:

```text
K=1
```

Chahe N kitna bhi bada ho:

```text
1
```

hamesha first rahega.

Rank:

```text
1
```

---

Example:

```text
K=10
```

Lexicographical order:

```text
1
10
100
101
...
```

Lekin 10 se pehle sirf:

```text
1
```

aata hai.

Isliye:

```text
rank(10)=2
```

hamesha.

---

Example:

```text
K=100
```

Rank:

```text
3
```

hamesha.

---

General:

```text
K = 10^t
```

to:

```text
rank = digits(K)
```

fixed rehta hai.

Examples:

```text
1     -> rank 1
10    -> rank 2
100   -> rank 3
1000  -> rank 4
```

Agar user ka M is rank ke equal nahi hai:

```text
answer = 0
```

---

### Final Idea in One Line

1. `countPrefix()` se kisi prefix ke niche kitne numbers hain wo nikaalo.
2. Usse `rank(N, K)` efficiently calculate karo.
3. Rank monotonic hai, isliye binary search lagao.
4. Smallest `N` jahan `rank(N,K)=M` mile, wahi answer hai.
