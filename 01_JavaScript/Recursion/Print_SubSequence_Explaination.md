This is another classic recursion/backtracking problem.

## Key Idea

For every element, you have **2 choices**:

1. Include it in the current subsequence.
2. Exclude it from the current subsequence.

For `[1,2,3]`:

```text
            []
          /    \
         1      x
       /  \    / \
     2    x   2   x
    / \  / \ / \ / \
   3  x 3 x 3 x 3 x
```

Each level decides whether to take an element or not.

---

## Recursive Solution (JavaScript)

```javascript
function printSubsequences(arr) {
    generate(0, arr, []);
}

function generate(index, arr, current) {

    // Base Case
    if (index === arr.length) {

        // Ignore empty subsequence
        if (current.length > 0) {
            console.log([...current]);
        }

        return;
    }

    // Choice 1: Include current element
    current.push(arr[index]);
    generate(index + 1, arr, current);

    // Backtrack
    current.pop();

    // Choice 2: Exclude current element
    generate(index + 1, arr, current);
}

printSubsequences([1, 2, 3]);
```

---

## Output

```text
[1, 2, 3]
[1, 2]
[1, 3]
[1]
[2, 3]
[2]
[3]
```

The order may differ slightly from your example, but all subsequences are generated.

---

# Dry Run

Start:

```javascript
generate(0, [1,2,3], [])
```

### Include 1

```javascript
current = [1]
generate(1)
```

### Include 2

```javascript
current = [1,2]
generate(2)
```

### Include 3

```javascript
current = [1,2,3]
generate(3)
```

Reached end:

```text
[1,2,3]
```

Backtrack:

```javascript
current = [1,2]
```

Exclude 3:

```text
[1,2]
```

Backtrack:

```javascript
current = [1]
```

Include 3:

```text
[1,3]
```

Exclude 3:

```text
[1]
```

And so on...

---

## Visual Recursion Tree

```text
                     []
                /          \
              [1]           []
            /    \        /    \
        [1,2]   [1]    [2]     []
        /  \    / \    / \     / \
 [1,2,3][1,2][1,3][1][2,3][2][3][]
```

The last `[]` is the empty subsequence. Since your example doesn't include it, we skip printing it.

---

## Store in an Array Instead of Printing

```javascript
function allSubsequences(arr) {
    const result = [];

    function generate(index, current) {
        if (index === arr.length) {
            if (current.length > 0) {
                result.push([...current]);
            }
            return;
        }

        current.push(arr[index]);
        generate(index + 1, current);

        current.pop();
        generate(index + 1, current);
    }

    generate(0, []);

    return result;
}

console.log(allSubsequences([1, 2, 3]));
```

Output:

```javascript
[
  [1,2,3],
  [1,2],
  [1,3],
  [1],
  [2,3],
  [2],
  [3]
]
```

### Complexity

For an array of size `n`:

* Number of subsequences = `2ⁿ`
* Time Complexity: `O(2ⁿ)`
* Recursion Stack: `O(n)`

A useful way to remember this:

* **Permutations** → choose among remaining elements → `n!`
* **Subsequences** → include/exclude each element → `2ⁿ`
