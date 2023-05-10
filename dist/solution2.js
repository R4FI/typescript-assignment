"use strict";
function filterAdultsPerson(peoples) {
    return peoples.filter(person => person.age >= 18);
}
const peoples = [
    { name: "Alice", age: 25 },
    { name: "Jhon", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "Bob", age: 18 },
];
const adults = filterAdultsPerson(peoples);
console.log(adults);
