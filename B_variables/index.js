// VAriable = A contaner that stores a value 
            //and it behaves as if it were the value it contains
//1. declaration  let x;
//2. Asssignment x=100;
/*
let age = 24;
let name = "Godugu";
let price=10.99;

console.log(age);
console.log(`My name is ${name}`);
console.log(typeof age);
console.log(typeof name);
console.log(`My name is $${price}`);

let sale = true;
console.log(typeof sale);
console.log(`is this car for sale ${sale}`);
*/

let fullname = "Souj Godugu";
let age = 25;
let isstudent = true;

/*
document.getElementById("p1").textContent = fullname;
document.getElementById("p2").textContent = 25;
document.getElementById("p3").textContent = isstudent;
*/
document.getElementById("p1").textContent = `My name is ${fullname}`;
document.getElementById("p2").textContent = `I am ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isstudent}`;