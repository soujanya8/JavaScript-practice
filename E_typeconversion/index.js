//type conversion : change the data type of a value


/*
let age=window.prompt("how old are you?");
age +=1;
console.log(age , typeof(age));
 // here the output will concat with 1 instead of adding
*/

/*
let age=window.prompt("how old are you?");
age = Number(age);
age +=1;
console.log(age , typeof(age));

//as we specified the varibale age as number, it is performing arithmatic operations
*/

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// let x = "0";
// let y = "0";
// let z = "0";

// let x = "";
// let y = "";
// let z = "";

let x; //as it undeclared it will retuen NAN
let y; //as it didnt defined it will return undefined
let z; // as it is undeclared it returns false

x=Number(x);
y=String(y);
z=Boolean(z);

console.log(x, typeof(x)); //it return NAN not a number
console.log(y, typeof(y)); //it returns string becz it is string eehehhe
console.log(z), typeof(z); // it returns true as it contains some value, if the value is empty, then it is considered as false.

