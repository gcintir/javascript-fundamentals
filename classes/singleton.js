let operations = new class { // class expression
    constructor() {
    }

    sum () {
        let result = 0;
        for (let i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
        return result;
    }

    multiply () {
        let result = 1;
        for (let i = 0; i < arguments.length; i++) {
            result *= arguments[i];
        }
        return result;
    }

    get abc () {
        return this.abc;
    }

};

console.log(operations.sum(1,2,3,4));
console.log(operations.multiply(1,2,3,4));
