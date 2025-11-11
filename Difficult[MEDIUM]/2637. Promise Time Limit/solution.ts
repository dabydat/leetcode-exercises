type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {

    const setTimeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject("Time Limit Exceeded");
        }, t);
    });

    return async function (...args) {
        return Promise.race([fn(...args), setTimeoutPromise]);
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */