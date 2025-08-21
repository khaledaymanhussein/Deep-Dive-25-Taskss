// 1 String Methods

let fullName = "Khaled Ayman";

console.log("Characters in fullName:", fullName.length);

let newFullName = fullName.trim();

console.log("Characters in newFullName:", newFullName.length);

console.log("Uppercase:", newFullName.toUpperCase());
console.log("Lowercase:", newFullName.toLowerCase());

let firstName = newFullName.split(" ")[0];
console.log("First Name:", firstName);

console.log("Includes 'Khaled':", newFullName.toLowerCase().includes("khaled"));


// 2 Array Methods

let fruits = ["apple", "banana", "mango"];

fruits.push("orange");

fruits.unshift("kiwi");

fruits.shift();
fruits.pop();

console.log("Index of mango:", fruits.indexOf("mango"));

let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercase Fruits:", upperFruits);

let bFruits = fruits.filter(fruit => fruit[0].toLowerCase() === "b");
console.log("Fruits starting with B/b:", bFruits);

fruits.forEach((fruit, index) => {
console.log(`fruit ${index + 1} is ${fruit}`);
});


// 3 Math

let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("Random number between 1 and 10:", randomNum);

let num1 = 5.1;
let num2 = 5.6;

console.log("Math.round(5.1):", Math.round(num1));
console.log("Math.round(5.6):", Math.round(num2));

console.log("Math.trunc(5.1):", Math.trunc(num1));
console.log("Math.trunc(5.6):", Math.trunc(num2));

console.log("Math.floor(5.1):", Math.floor(num1));
console.log("Math.floor(5.6):", Math.floor(num2));

console.log("Math.ceil(5.1):", Math.ceil(num1));
console.log("Math.ceil(5.6):", Math.ceil(num2));

console.log("Square root of 64:", Math.sqrt(64));

console.log("Maximum number:", Math.max(3, 8, 20, 1));

console.log("Minimum number:", Math.min(3, 8, 20, 1));


// 4 Ternary Operator

let age = 20;

let result = (age >= 18) ? "Adult" : "Minor";
console.log("Age result:", result);


// 5 Object

let person = {
name: "Khaled Ayman",
Age: 19,
address: "Zag, Egypt",
displayInfo: function () {
console.log(`Name: ${this.name}, Age: ${this.Age}, Address: ${this.address}`);
},
contact: {
phone: "01287078486",
email: "khaledaymanelalmy2006@gmail.com",
displayContactInfo: function () {
    console.log(`Phone: ${this.phone}, Email: ${this.email}`);
    }
}
};

person.displayInfo();

person.contact.displayContactInfo();

// person.name = "Ahmed Esmail"
// person.Age =20;
person.address = "Cairo, Egypt";

// console.log("Updated name:", person.name);
// console.log("Updated Age:", person.Age);
console.log("Updated Address:", person.address);


// 6 Destructuring

let { name, Age } = person;
let { phone } = person.contact;

console.log("Destructured values:", name, age, phone);

let [fruit1, fruit2] = fruits;

console.log("First two fruits:", fruit1, fruit2);


// 7 Spread / Rest Operators

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

function sumNumbers(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumNumbers(1, 2, 3));
console.log(sumNumbers(10, 20, 30, 40));

// 8 template literal

let Name = "Khaled";
let ag = 20;
console.log(`Hello ${Name}, you are ${ag} years old..?`);