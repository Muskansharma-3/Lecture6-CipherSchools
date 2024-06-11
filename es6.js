// var x = 15;
// {
//     let x = 5;
//     console.log(x);
// }
// console.log(x);

// var x = function (x, y) {
//     return x + y;
// }
// console.log(x(5,6));
// const x = (x, y) => {
//     return x + y;
// }
// const x = (x,y) => x+y

// Spread operator ...

// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "Dec"];
// const year = [...q1, ...q2, ...q3, ...q4];
// console.log(year);


// const myNumbers = [25, 12, 50, 77, -1];
// let maxValue = Math.max(...myNumbers);
// console.log(maxValue);

// for of loop

// const myNumbers = [25, 12, 50, 77, -1];
// let sum = 0;
// for (let num of myNumbers) {
//     sum += num;
// }
// console.log(sum);

// const name = "CipherSchools";
// let text = "";
// for (let ch of name) {
//     text += ch + " ";
// }
// console.log(text);

// Map

// const fruits = new Map([
//     ["apples", 500], ["bananas", 300], ["oranges", 200]
// ]);
// console.log(fruits);
// console.log(fruits.get("oranges"));

// Set

// const letters = new Set();
// letters.add("a");
// letters.add("b");
// letters.add("a");
// console.log(letters);

// Classes

// class Car {
//     constructor(name, mfgYear) {
//         this.name = name;
//         this.mfgYear = mfgYear;
//     }
// }
// const myCar1 = new Car("Mercedes", 2022);
// const myCar2 = new Car("Thar", 2024);
// console.log(myCar1, myCar2);

// Promise

// const myFunction = () => {
//     return myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("This is inside promise");
//             resolve();
//         }, 2000);
//     });
// }
// myFunction()
//     .then(() => {
//         console.log("Resolved")
//     })
//     .catch(() => {
//         console.log("Rejected")
//     })

// const person = {
//     firstName: "John",
//     lastname: "Doe",
//     age: 30,
//     eyeColor: "blue"
// }
// let id = Symbol("id");
// person[id] = 140111;
// console.log(person);

// const addTwoNumbers = (a, b) => a + b;
// // console.log(addTwoNumbers(10, 11));
// console.log(addTwoNumbers(10));

const addNumbers= (...args)=>{
    // console.log(args);
    let sum = 0;
    for(let arg of args){
        sum+=arg;
    }
    return sum;
}
console.log(addNumbers(10, 14, 67, 12));