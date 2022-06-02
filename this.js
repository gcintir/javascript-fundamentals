class Counter {
    constructor () {
        this.count = 0;
    }

    next () {
        return ++this.count;
    }
}
let counter = new Counter();
let value = counter.next();
console.log("value:", value);

let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
};
console.log(car.getBrand());
let brand = car.getBrand;
console.log(brand());
let brand2 = car.getBrand.bind(car);
console.log(brand2());

let bmw = {
    brand: "bmw" 
};
let brand3 = car.getBrand.bind(bmw);
console.log(brand3());

function Person(name) {
    if (!(this instanceof Person)) {
        throw Error('Must use the new operator to call the function');
    }
    this.name = name;
};

function getBrand(prefix) {
    console.log(prefix + this.brand);
}
let honda = {
    brand: 'Honda'
};
let audi = {
    brand: 'Audi'
};
getBrand.call(honda, "It's a ");
getBrand.call(audi, "It's an ");
getBrand.apply(honda, ["It's a "]);
getBrand.apply(audi, ["It's an "]);

const canFetch = typeof globalThis.fetch === 'function';
console.log(canFetch);