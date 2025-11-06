type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const arrayFiltered: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        const value = fn(arr[i], i)
        if (value) arrayFiltered.push(arr[i])
    }
    return arrayFiltered;
};