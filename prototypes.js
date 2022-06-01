//console.log(typeof(Object));

function Person (name) {
    this.name = name;
};
console.log(Person);
console.log(Person.prototype);
console.log(Person.prototype.constructor);

Person.prototype.greet = function() {
    return "Hi, I'm " + this.name + "!";
};

let p1 = new Person("John");
console.log(p1.greet());

console.log(Object.getPrototypeOf(p1));
console.log(Object.getPrototypeOf(p1).constructor);
console.log(p1.constructor.prototype);

// shadowing
p1.greet = function() {
    return "Hello";
};
console.log(p1.greet());

class Computer {
    constructor(cpu, ram) {
        this.cpu = cpu;
        this.ram = ram;
    }

    getInfo () {
        return "cpu: " + this.cpu + " ram: "  + this.ram;
    }
};
let desktop = new Computer("4", "4");
let laptop = new Computer("8", "8");
console.log(desktop.getInfo());
console.log(laptop.getInfo());