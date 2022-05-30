function display(message) {
    if (!message) {
        return;
    }
    console.log(message);
}

function add () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

function average (a, b, addFunc) {
    return addFunc(a, b) / 2;
}

display("");
console.log(add (1,1,1));
console.log(add (1,1,1,1,1));
console.log(average(1,2, add));

(function() {
    console.log("Anonymous function");
})()
let f = (function() {
    console.log("Anonymous function");
})
f();

setTimeout(function () {
    console.log("Function triggered");
},1000);

let person = {
    name : "John",
    surname : "Doe"
};
(function () {
    console.log(person);
})(person);


let displayer = (data) => console.log(data);
displayer("arrow function")

let multiplier = (a, b) => a * b;
console.log(multiplier(4,5));

let student = {
    name : "Jack",
    age : 20
};
function incrementAge (obj) {
    obj.age += 1;
    // object reference can not be changed in function
    obj = {
        name : "Steven",
        age : 20
    };
}
incrementAge(student);
console.log(student);

function createDiv (height = "100px", width = "100px", border = "solid 1px red") {
    console.log("height: " + height + " width: " + width + " border: " + border);
}
createDiv();
createDiv("50px", "50px", "thin 2px red");
createDiv(undefined, "50px", "thin 2px red");

function date(d = today()) {
    console.log(d);
}
function today() {
    return (new Date()).toLocaleDateString("en-US");
}
date();

function requiredArg() {
    throw new Error('The argument is required');
 }
 function add(x = requiredArg(), y = requiredArg()){
    return x + y;
 }
 //add(10); // error
 add(10,20); // OK

 function sum(x, y = 1, z = 2) {
    console.log( arguments.length );
    return x + y + z;
}
console.log(sum(10));









