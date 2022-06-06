let price = .99;
console.log(price); // prints 0.99

let amount = 0.2 + 0.1
console.log(amount); // prints 0.30000000000000004
console.log(amount.toFixed(2)); // prints 0.30
console.log(amount.toString()); // converts to string

let pageSize = 9007199254740991n;
console.log(pageSize);

let person = {
    name : "John",
    surname: "Doe"
};
console.log(person.name, person['surname']);
person.age = 22;
console.log(person);
delete person.age;
console.log('age' in person);

let arr = Array(1,2,3);
console.log(arr);
console.log(arr.length);
let emptyArr = [];
console.log(Array.isArray(emptyArr));
arr.push(5);
arr.pop();
arr.unshift(0);
arr.shift();
console.log(arr);

const profile = null;
const userMode = profile ?? 'admin'; // ?? nullish coalescing operator
console.log(userMode);

console.log(undefined || "...");
console.log(undefined ?? "+++");

const user = {
    name : 'Jack',
    age : 20,
    profile : function () {
        console.log("admin");
    },
    telephone: {
        home: "1234",
        work: "5678"
    }
}
console.log(user.telephone2?.work);
user.profile2?.();


