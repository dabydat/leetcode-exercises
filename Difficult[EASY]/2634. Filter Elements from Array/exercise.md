## 2634. Filter Elements from Array

Given an integer array `arr` and a filtering function `fn`, return a filtered array `filteredArr`.

The `fn` function takes one or two arguments:

- `arr[i]` — the number from `arr` at index `i`
- `i` — the index of `arr[i]`

`filteredArr` should only contain the elements from `arr` for which the expression `fn(arr[i], i)` evaluates to a truthy value. A truthy value is any value where `Boolean(value)` returns `true`.

Please solve it without the built-in `Array.prototype.filter` method.

## Examples

### Example 1
- Input: `arr = [0, 10, 20, 30]`, `fn = function greaterThan10(n) { return n > 10; }`
- Output: `[20, 30]`

```js
const newArray = filter(arr, greaterThan10); // [20, 30]
```

### Example 2
- Input: `arr = [1, 2, 3]`, `fn = function firstIndex(n, i) { return i === 0; }`
- Output: `[1]`

```js
// fn can accept the index
const newArray = filter(arr, firstIndex); // [1]
```

### Example 3
- Input: `arr = [-2, -1, 0, 1, 2]`, `fn = function plusOne(n) { return n + 1 }`
- Output: `[-2, 0, 1, 2]`

```js
// Note: falsey values such as 0 are filtered out
const newArray = filter(arr, plusOne); // [-2, 0, 1, 2]
```

## Constraints

- `0 <= arr.length <= 1000`
- `-10^9 <= arr[i] <= 10^9`