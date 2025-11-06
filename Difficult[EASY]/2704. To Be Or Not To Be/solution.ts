type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (received: any) => {
            const comparison = val === received;
            if (!comparison) throw new Error("Not Equal")
            return comparison;
        },
        notToBe: (received: any) => {
            const comparison = val !== received;
            if (!comparison) throw new Error("Equal")
            return comparison;
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */