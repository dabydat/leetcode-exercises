type CacheResultType = { value: number; expiresAt: number; timeoutId: ReturnType<typeof setTimeout> };

class TimeLimitedCache {
    constructor(
        public cacheMap: Map<number, CacheResultType> = new Map()
    ) { }

    set(key: number, value: number, duration: number): boolean {
        const existing: CacheResultType | undefined = this.cacheMap.get(key);
        const hadUnexpired: boolean = !!existing;

        if (existing) clearTimeout(existing.timeoutId);

        const timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {
            this.cacheMap.delete(key);
        }, duration);

        this.cacheMap.set(key, { value, expiresAt: Date.now() + duration, timeoutId });

        return hadUnexpired;
    }

    get(key: number): number {
        const entry: CacheResultType | undefined = this.cacheMap.get(key);
        return entry && entry.expiresAt > Date.now() ? entry.value : -1;
    }

    count(): number {
        return this.cacheMap.size;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */