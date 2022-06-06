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