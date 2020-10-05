class Expect {
    constructor(input) {
        this.input = input;
    }
    equalArray(a, b) {
        if (a.length !== b.length) {
            return false;
        }
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }
    toEqual(goal) {
        let hasError = false;
        if (Array.isArray(goal)) {
            if (!this.equalArray(this.input, goal)) {
                hasError = true;
            }
        } else {
            if (this.input !== goal) {
                hasError = true;
            }
        }

        if (hasError) {
            throw new Error(`Expect ${goal}, but got "${this.input}"`);
        }
    }
}

export default (input) => new Expect(input);
