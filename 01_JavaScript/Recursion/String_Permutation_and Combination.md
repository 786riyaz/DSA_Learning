This is a very common recursion interview problem.

## Idea

For a string `"abc"`:

At each step, pick one character and put it in the current answer.

```
abc

Pick a
Remaining = bc

Pick b
Remaining = c

Pick c
Remaining = ""
Answer = abc
```

Then backtrack and try other choices:

```
a + cb = acb
b + ac = bac
b + ca = bca
c + ab = cab
c + ba = cba
```

---

## Recursive Code (JavaScript)

```javascript
function permutations(str) {
    let result = [];

    generate("", str, result);

    return result;
}

function generate(current, remaining, result) {

    // Base Case
    if (remaining.length === 0) {
        result.push(current);
        return;
    }

    // Recursive Case
    for (let i = 0; i < remaining.length; i++) {

        let chosen = remaining[i];

        let left = remaining.substring(0, i);
        let right = remaining.substring(i + 1);

        let newRemaining = left + right;

        generate(current + chosen, newRemaining, result);
    }
}

console.log(permutations("abc"));
```

### Output

```text
[
  'abc',
  'acb',
  'bac',
  'bca',
  'cab',
  'cba'
]
```

---

# Dry Run

Let's trace `"abc"`.

### Initial Call

```javascript
generate("", "abc", result)
```

```
current = ""
remaining = "abc"
```

Loop:

### i = 0

Choose:

```text
a
```

Remaining:

```text
bc
```

Call:

```javascript
generate("a", "bc", result)
```

---

### Inside

```javascript
generate("a", "bc", result)
```

Loop:

### i = 0

Choose:

```text
b
```

Remaining:

```text
c
```

Call:

```javascript
generate("ab", "c", result)
```

---

### Inside

```javascript
generate("ab", "c", result)
```

Choose:

```text
c
```

Remaining:

```text
""
```

Call:

```javascript
generate("abc", "", result)
```

Base case:

```javascript
result.push("abc")
```

---

Then recursion returns (backtracking).

Now:

### generate("a","bc")

Try next character:

```text
c
```

Remaining:

```text
b
```

Call:

```javascript
generate("ac", "b", result)
```

Produces:

```text
acb
```

---

Similarly:

```
generate("b","ac")
→ bac
→ bca

generate("c","ab")
→ cab
→ cba
```

---

# Recursion Tree

```text
                    ""
             /       |       \
            a        b        c
          /  \     /  \     /  \
        ab   ac  ba   bc  ca   cb
        |     |   |    |   |    |
       abc  acb bac  bca cab  cba
```

Every level chooses one character.

---

# Time Complexity

For a string of length `n`:

```text
Number of permutations = n!
```

For `"abc"`:

```text
3! = 6
```

For `"abcd"`:

```text
4! = 24
```

For `"abcde"`:

```text
5! = 120
```

Time Complexity:

```text
O(n!)
```

Space Complexity:

```text
O(n)
```

(recursion stack depth)

---

## Interview Explanation (1-minute version)

> At every recursive call, I choose one character from the remaining string and append it to the current permutation. Then I recursively generate permutations for the remaining characters. When no characters remain, I have formed one complete permutation, which I store in the result array. The recursion explores all possible character choices at every position, generating all `n!` permutations.
