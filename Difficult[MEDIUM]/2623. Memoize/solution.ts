type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const cache: Map<string, number> = new Map<string, number>();
    return function (...args): number {
        const cacheString: string = args.join(',');
        if (cache.has(cacheString)) return cache.get(cacheString)!;
        const result: number = fn(...args);
        cache.set(cacheString, result)
        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */