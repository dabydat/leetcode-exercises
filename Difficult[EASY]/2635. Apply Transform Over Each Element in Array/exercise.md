## 2635. Apply Transform Over Each Element in Array

Given an integer array `arr` and a mapping function `fn`, return a new array where:

`returnedArray[i] = fn(arr[i], i)`

Solve it without using the built-in `Array.prototype.map` method.

## Examples

### Example 1
- Input: `arr = [1, 2, 3]`, `fn = function plusone(n) { return n + 1; }`
- Output: `[2, 3, 4]`

```js
const newArray = map(arr, plusone); // [2,3,4]
```

### Example 2
- Input: `arr = [1, 2, 3]`, `fn = function plusI(n, i) { return n + i; }`
- Output: `[1, 3, 5]`

```js
// The function increases each value by its index
const newArray = map(arr, plusI); // [1,3,5]
```

### Example 3
- Input: `arr = [10, 20, 30]`, `fn = function constant() { return 42; }`
- Output: `[42, 42, 42]`

```js
// The function always returns 42
const newArray = map(arr, constant); // [42,42,42]
```

## Constraints

- `0 <= arr.length <= 1000`
- `-10^9 <= arr[i] <= 10^9`
- `fn` returns an integer.
