//  🚀 Practice Sheet: `this`, `call/apply/bind`, Prototypes & Classes
//  30 Questions (Easy → Moderate → Hard)
//  🟢 EASY LEVEL (Q1–Q10)
// These questions are focused on understanding concepts.
//  Question 1 — Method and `this`
// const user = {
//   name:"Ritik",
//   greet() {
//   console.log(this.name);
//   }
// };
// user.greet();
//  Expected Output
//  Ritik
//  What is this question asking?
//  Identify what `this` refers to when a method is called using an object.
//  Concepts Tested
// - this
// - Method Calls
const user = {
        name: "Ritik",
        greet() {
                console.log(this.name);
        }
}
user.greet(); // Ritik 
//  Question 2 — Default Binding
// function show() {
// console.log(this);
// }
// show();
//  Expected Output
// Depends on:
// - Browser
// - Node.js
// - Strict Mode
//  Concepts Tested
// - Default Binding
// - this
function show() {
        console.log(this);
}
// Browser normal script: window
// Strict mode: undefined
// Environment/module context ke hisaab se behavior differ kar sakta hai.
show();

//  Question 3 — Object Method
// const car= {
//   brand:"BMW",
//   showBrand() {
// console.log(this.brand);
//   }
// };
// Predict output.
//  Concepts Tested
// - this
// - Object Methods
const car = {
        brand: "BMW",
        showBrand() {
                console.log(this.brand);
        }
}
car.showBrand();
// Implicit binding: showBrand() is called through car,
// so `this` refers to car.

//  Question 4 — call()
// function greet() {
// console.log(this.name);
// }
// const user= {
//   name:"Aman"
// };
// Use `call()` to print:
// Aman
//  Concepts Tested
// - call()
function greet() {
        console.log(this.name);
}
const userName = {
        name: "Aman"
}
greet.call(userName);

//  Question 5 — apply()
// function introduce(city) {
// console.log(`${this.name} from${city}`);
// }
// const person= {
//   name:"Ritik"
// };
// Use `apply()`.
//  Expected Output
// Ritik from Bhopal
//  Concepts Tested
// - apply()
function introduction(city) {
        console.log(`${this.name} from ${city}`);
}
const person = {
        name: "Ritik"
}
introduction.apply(person, ["Bhopal"]);

//  Question 6 — bind()
// function greet() {
// console.log(this.name);
// }
// const user= {
//   name:"Priya"
// };
// Create a permanently bound function.
//  Concepts Tested
// - bind()
function greetName() {
        console.log(this.name);
}
const user2 = {
        name: "Rohit"
}
let bind = greetName.bind(user2)
bind();

//  Question 7 — Arrow Function `this`
// const user= {
//   name:"Ritik",
//   greet: () => {
// console.log(this.name);
//   }
// };
// user.greet();
// Predict output.
//  Concepts Tested
// - Arrow Functions
// - Lexical this
const user3 = {
        name: "Ritik",
        greet: () => {
                console.log(this.name);
        }
}
user3.greet();
// arrow function par implicit binding apply nahi hogi → this !== user3 → surrounding context ka this use hoga.
//  Question 8 — Event Handler Theory
// What is the difference between:
// button.addEventListener("click",function(){})
// and
// button.addEventListener("click", () => {})
// regarding `this`?
//  Concepts Tested
// - Event Handlers
// - this
// button.addEventListener("click", function () {
//         console.log(this);
// });
// button.addEventListener("click", () => {
//         console.log(this);
// });
// Arrow function ka apna this nahi hota, isliye woh outer lexical this use karega; woh automatically button ko refer nahi karega.
//  Question 9 — Constructor Function
// Create:
// function Person(name) {
// this.name=name;
// }
// Create an object:
// new Person("Ritik")
//  Expected Output
// {
// name:"Ritik"
// }
//  Concepts Tested
// - Constructor Functions
function Person1(name) {
        this.name = name;
}
let p1 = new Person1("Ritik");
console.log(p1);

//  Question 10 — Prototype Lookup
// const arr= [1,2,3];
// Where does:
// arr.push()
// come from?
//  Concepts Tested
// - Prototype Chain
const arr = [1, 2, 3];
arr.push();
// push() is inherited from Array.prototype through the prototype chain.

//  🟡 MODERATE LEVEL (Q11–Q20)
//  Question 11 — Lost `this`
// const user= {
//   name:"Ritik",
//   greet() {
// console.log(this.name);
//   }
// };
// const fn = 
// user.greet;
// fn();
// Fix it.
//  Expected Output
// Ritik
//  Concepts Tested
// - bind()
const user4 = {
        name: "Ritik",
        greet() {
                console.log(this.name);
        }
};
const fn = user4.greet.bind(user4);
fn();

//  Question 12 — Borrow Method Using call()
// const user1= {
//   name:"Ritik"
// };
// constuser2= {
//   name:"Aman"
// };
// Create one method and use it for both objects.
//  Concepts Tested
// - call()
const user5 = {
        name: "Ritik"
};
const user6 = {
        name: "Aman"
};
function printName() {
        console.log(this.name);
}
printName.call(user5);
printName.call(user6);

//  Question 13 — Apply with Math.max
// Find maximum number using:
// Math.max()
// and:
// apply()
// Array:
// [10,20,50,5]
//  Expected Output
// 50
//  Concepts Tested
// - apply()
let array = [10, 20, 30, 40, 50];
let maximum = Math.max.apply(null, array);
console.log(maximum);

//  Question 14 — Create Prototype Inheritance
// const animal= {
//   eats:true
// };
// Create:
// dog
// using:
// Object.create()
//  Concepts Tested
// - Object.create()
const animal = {
        eats: true
}
let dog = Object.create(animal);
console.log(dog.eats);

//  Question 15 — Shared Prototype Method
// Create: Person.prototype.greet
// and make multiple objects use it.
//  Concepts Tested
// - Prototype
// - Memory Optimization
function Person(name, age) {
        this.name = name;
        this.age = age;
}
let person1 = new Person("Rahul", 20);
let person2 = new Person("Shankar", 22);
let person3 = new Person("Ajay", 21);
let person4 = new Person("Rohan", 18);

Person.prototype.personGreet = function () {
        return `I'm ${this.name} my age is ${this.age}`;
}

console.log(person1.personGreet());

//  Question 16 — Check Prototype Relationship
// function Person() {}
// const p = newPerson();
// Verify:
// p.__proto__===Person.prototype
//  Expected Output
// true
//  Concepts Tested
// - **proto**
// - prototype
console.log(person2.__proto__); // {personGreet: ƒ}
console.log(Person.prototype); // {personGreet: ƒ}
let isTrue = person2.__proto__ === Person.prototype;
console.log(isTrue);

//  Question 17 — Student Class
// Create:
// class Student
// with:
// name
// marks
//  Concepts Tested
// - Classes
// - Constructor
class Student {
        constructor(name, marks) {
                this.name = name;
                this.marks = marks;
        }
}
let s1 = new Student("Baburao", 90);
let s2 = new Student("Raju", 85);
let s3 = new Student("Shyam", 87);
console.log(s1); // Student {name: 'Baburao', marks: 90}

//  Question 18 — Car Class
// Create:
// class Car
// with:
// brand
// start()
// Output:
// BMW started
//  Concepts Tested
// - Classes
// - Methods
class Car {
        constructor(brand) {
                this.brand = brand;
        }
        start() {
                return `${this.brand} Started`;
        }
}
let carBmw = new Car("BMW");
console.log(carBmw.start());

//  Question 19 — Getter
// Create:
// fullName
// using a getter.
//  Example
// p.fullName
// should return:
// Ritik Rajput
//  Concepts Tested
// - Getters
class PersonName {
        constructor(firstName, lastName) {
                this.firstName = firstName;
                this.lastName = lastName;
        }

        get fullName() {
                return `${this.firstName} ${this.lastName}`;
        }
}

const p = new PersonName("Ajay", "Varma");

console.log(p.fullName);

//  Question 20 — Setter
// Create:
// fullName
// setter.
// Input:
// p.fullName="Aman Gupta"
//  Expected Behavior
// Update:
// firstName
// lastName
//  Concepts Tested
// - Setters
class Em {
        constructor(firstName, lastName) {
                this.firstName = firstName;
                this.lastName = lastName;
        }

        set fullName(name) {
                const parts = name.split(" ");

                this.firstName = parts[0];
                this.lastName = parts[1];
        }
}

const p01 = new Em("Ritik", "Rajput");

p01.fullName = "Aman Gupta";

console.log(p01.firstName); // Aman
console.log(p01.lastName);  // Gupta

//  🔴 HARD LEVEL (Q21–Q30)
//  Question 21 — Employee Inheritance
// Create:
// class Employee
// and
// class Developer
// using:
// extends
//  Concepts Tested
// - Inheritance
class Employee {
        constructor(name, salary) {
                this.name = name;
                this.salary = salary;
        }
        greet() {
                return `Hi I am ${this.name} and my salary is: ${this.salary}`;
        }
        work() {
                return `${this.name} is working...`;
        }
}
class Developer extends Employee {
        develope() {
                return `I am building a Product...`;
        }
}
let employee1 = new Employee("Shana", 25000);
console.log(employee1.greet());
console.log(employee1.work());

let developer1 = new Developer("Raju", 90000);
console.log(developer1.greet());
console.log(developer1.develope());

//  Question 22 — Animal Hierarchy
// Create:
// Animal
// ↓
// Dog
// ↓
// Labrador
//  Scenario
// Multi-level inheritance.
//  Concepts Tested
// - Prototype Chain
// - Classes
class Animal {
        constructor(name) {
                this.name = name
        }

        eat() {
                return `${this.name} is Eating...`;
        }

        bark() {
                return `${this.name} is Barking...`;
        }

        sleep() {
                return `${this.name} is Sleeping...`;
        }
}

class Dog extends Animal {
        sweem() {
                return `${this.name} is Sweeming...`
        }
}

class Labrador extends Dog {
        play() {
                return `${this.name} is Playing...`;
        }
}
let dog1 = new Dog("Sheru");
console.log(dog1.eat());
console.log(dog1.sleep());
console.log(dog1.sweem());
console.log("--------------------------");
let labrador1 = new Labrador("Linda The Lamba");
console.log(labrador1.eat());
console.log(labrador1.sleep());
console.log(labrador1.play());
console.log(labrador1.sweem());

//  Question 23 — Static Method
// Create:
// MathHelper.add()
//  Example
// MathHelper.add(5,10)
// Output:
// 15
//  Concepts Tested
// - Static Methods
class MathHelper {
        static add(a, b) {
                return a + b;
        }
}
console.log(MathHelper.add(20, 50));

//  Question 24 — Static Property
// Create:
// MathHelper.PI
// Output:
// 3.14159
//  Concepts Tested
// - Static Properties
class MathHelperr {
        static PI = 3.14159;
}
console.log(MathHelperr.PI);

//  Question 25 — Bank Account
// Create:
// class BankAccount
// with:
// balance
// Methods:
// deposit()
// withdraw()
//  Expected Output
// 700
// after:
// deposit(1000)
// withdraw(300)
//  Concepts Tested
// - Private Fields
class BankAccount {
        #balance = 0;

        deposit(amount) {
                if (amount <= 0) {
                        return "Deposit amount must be greater than 0";
                }

                this.#balance += amount;
                return `Deposited: ₹${amount}`;
        }

        withdraw(amount) {
                if (amount <= 0) {
                        return "Withdrawal amount must be greater than 0";
                }

                if (amount > this.#balance) {
                        return "Insufficient balance";
                }

                this.#balance -= amount;
                return `Withdrawn: ₹${amount}`;
        }

        showBalance() {
                return this.#balance;
        }
}

const accountUser = new BankAccount();

console.log(accountUser.deposit(1000));
console.log(accountUser.withdraw(300));
console.log(accountUser.showBalance()); // 700

//  Question 26 — Shopping Cart Class
// Create:
// class ShoppingCart
// Methods:
// addItem()
// removeItem()
// getTotal()
//  Scenario
// E-commerce Application.
//  Concepts Tested
// - Classes
// - Arrays
class ShoppingCart {
        constructor() {
                this.items = [];
                this.nextId = 0;
        }

        addItem(name, price) {
                this.items.push({
                        id: this.nextId++,
                        name,
                        price
                });
        }

        removeItem(id) {
                this.items = this.items.filter(
                        item => item.id !== id
                );
        }

        getTotal() {
                return this.items.reduce(
                        (total, item) => total + item.price,
                        0
                );
        }
}

const cart = new ShoppingCart();

cart.addItem("iPhone", 70000);
cart.addItem("Motorola", 20000);
cart.addItem("Redmi", 22000);
cart.removeItem(1);
console.log(cart.items);
console.log(cart.getTotal());

//  Question 27 — Library Management System
// Create:
// Book
// Library
// classes.
// Methods:
// addBook()
// borrowBook()
// returnBook()
//  Concepts Tested
// - Classes
// - OOP Design
class Book {
        constructor(id, title, author) {
                this.id = id;
                this.title = title;
                this.author = author;
                this.isBorrowed = false;
        }
}

class Library {
        constructor() {
                this.books = [];
                this.nextId = 0;
        }

        addBook(title, author) {
                const book = new Book(
                        this.nextId++,
                        title,
                        author
                );

                this.books.push(book);
        }

        borrowBook(id) {
                const book = this.books.find(
                        book => book.id === id
                );

                if (!book) {
                        return "Book not found";
                }

                if (book.isBorrowed) {
                        return "Book already borrowed";
                }

                book.isBorrowed = true;
                return `${book.title} borrowed successfully`;
        }

        returnBook(id) {
                const book = this.books.find(
                        book => book.id === id
                );

                if (!book) {
                        return "Book not found";
                }

                if (!book.isBorrowed) {
                        return "Book was not borrowed";
                }

                book.isBorrowed = false;
                return `${book.title} returned successfully`;
        }
}


//  Question 28 — Prototype vs Class Investigation
// Create:
// class Person {}
// Verify:
// typeof Person
//  Expected Output
// function
//  What is this question asking?
// Prove that classes are syntactic sugar.
//  Concepts Tested
// - Classes
// - Prototypes
class Person01 { }

console.log(typeof Person01); // function

//  Question 29 — Custom Array Method
// Add:
// Array.prototype.last
// Example:
// [1,2,3].last()
// Output:
// 3
//  Concepts Tested
// - Prototype Extension

Array.prototype.last = function () {
        return this[this.length - 1];
}
let ar = [1, 2, 3];
console.log(ar.last());

//  Question 30 — Complete School Management System (Interview-Level)
// Create: class Student
// class Teacher
// class School
// Requirements: Student
// name
// marks
//  Teacher
// name
// subject
//  School
// Methods: addStudent()
// addTeacher()
// getTopper()
// getAverageMarks()
//  Example Output
// Topper:Ritik
// AverageMarks:82
//  What is this question asking?
// This is a mini project combining:
// - this
// - Classes
// - Constructors
// - Methods
// - Arrays
// - Objects
// - Inheritance (optional)
// - Real-world Design

class SchoolStudent {
        constructor(name, marks) {
                this.name = name;
                this.marks = marks;
        }
}
class Teacher {
        constructor(name, subject) {
                this.name = name;
                this.subject = subject;
        }
}
class School {
        constructor() {
                this.students = [];
                this.teachers = [];
        }
        addStudent(name, marks) {
                const newStudent = new SchoolStudent(name, marks);
                this.students.push(newStudent);
        }
        addTeacher(name, subject) {
                const newTeacher = new Teacher(name, subject);
                this.teachers.push(newTeacher);
        }
        getTopper() {
                if (this.students.length === 0) {
                        return null;
                }
                return this.students.reduce((acc, curr) => {
                        if (acc.marks > curr.marks) {
                                return acc;
                        } else {
                                return curr;
                        }
                });
        }

        getAverageMarks() {
                if (this.students.length === 0) {
                        return 0;
                }
                let total = this.students.reduce((acc, curr) => acc + curr.marks, 0);
                return (total / this.students.length).toFixed(2);
        }
}

let classRoom = new School();
classRoom.addStudent("Baburao", 100);
classRoom.addStudent("Raju", 92);
classRoom.addStudent("Shyam", 78);
classRoom.addStudent("Ritik", 87);

console.log(classRoom.getTopper());
console.log(classRoom.getAverageMarks());

classRoom.addTeacher("Nadarge Sir", "Math");
classRoom.addTeacher("Sude Sir", "Scince");

console.log(classRoom);