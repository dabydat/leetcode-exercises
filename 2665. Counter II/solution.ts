type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let currentValue: number = init;
    return {
        increment: () => Number(currentValue += 1),
        decrement: () => Number(currentValue -= 1),
        reset: () => Number(currentValue = init)
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */