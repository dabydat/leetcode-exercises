# 2703. Return Length of Arguments Passed

Write a function `argumentsLength` that returns the count of arguments passed to it.

## Examples

### Example 1

**Input:**

```typescript
argumentsLength(5)
```

**Output:**

```typescript
1
```

**Explanation:**

One value was passed to the function so it should return 1.

### Example 2

**Input:**

```typescript
argumentsLength({}, null, "3")
```

**Output:**

```typescript
3
```

**Explanation:**

Three values were passed to the function so it should return 3.

## Constraints

- `args` is a valid JSON array
- `0 <= args.length <= 100`