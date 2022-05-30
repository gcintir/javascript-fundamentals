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

