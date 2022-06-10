let person = {
    name : "John",
    surname : "Taylor",
    greeting : function () {
        console.log(this.name, this.surname);
    }
};
person.greeting();

function Person (firstName, lastName) {

    // this = {}

    if (!new.target) {
        throw Error("Cannot be called without the new keyword");
    }
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function() {
        return firstName + " " + lastName;
    }

    // return this object
}
let p1 = new Person("a", "b");
let p2 = new Person("x", "y");
console.log(p1.getFullName());
console.log(p2.getFullName());

const user = {
    name : "jack",
    surname : "ealy"
};
const account = Object.create(user, {
    profile : {
        value : "admin"
    }
});
console.log(account);
console.log(account.hasOwnProperty("name"));
console.log(account.hasOwnProperty("profile"));

for (let prop in account) {
    console.log(prop);
}
console.log(Object.keys(account));

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log("------------------------");

const displayer = ({color, size}) => {
    console.log("color --> " + color);
    console.log("size --> " + size);
};
let widget = {
    color : "red",
    size : "1px",
    changeColor : function (color) {
        this.color = color;
    }
};
displayer(widget);
let clonedWidget = Object.assign({}, widget);
clonedWidget.changeColor('black');
console.log(clonedWidget);
console.log(widget);

let {color : _color = 'black', size : _size = '0px', location : _location = 'middle'} = widget;
console.log("_color", _color);
console.log("_size", _size);
console.log("_location", _location);







