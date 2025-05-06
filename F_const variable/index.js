// const variable is a variable that can't be changed

//let us look at an example where we are not using Const.
/*
let pi = 3.1441 
let radius;
let circumference;

pi= 400;

radius = window.prompt(`Enter the radius`);
radius = Number(radius);
circumference = 2*pi*radius;
console.log(circumference);
*/
//here we can change the assigned value , so using const we can secured the value assigned
/*
const PI = 3.1441 
let radius;
let circumference;

PI= 400; // it will throw an error that there was a asssignment to a const variable. 

radius = window.prompt(`Enter the radius`);
radius = Number(radius);
circumference = 2*pi*radius;
console.log(circumference);
*/

const PI = 3.1441 
let radius;
let circumference;

//PI= 400;

document.getElementById("mysubmit").onclick = function(){
  radius = document.getElementById("myinput").value;
  circumference = 2*PI*radius;
  document.getElementById("myres").textContent = `The circumference of the circle with raduis ${radius} is ${circumference}.` ;
}























