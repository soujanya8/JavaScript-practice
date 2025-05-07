//math: It is a built in Function where 
//we can use their properties(PI,E) and
// methods to perform math operations


//const A = Math.E;
//const A = Math.PI;

// const x = 3.424;
// const y = 5;
// const z = 2;
// let B;

//B = Math.round(x); // it rounded to min value
//B = Math.floor(x); //same as round
//B = Math.ceil(x); //it prints the rounded to next number
// B = Math.sqrt(x,y);
// B = Math.pow(z,y);
// B = Math.sin(45);
// B = Math.cos(45);
// B = Math.tan(45);
//B = Math.random(); // it generates random number from 0 to 1
//B = Math.floor(Math.random()*6); // it generate from 0 to 6
//B = Math.log(Math.E);
//console.log(B);


//random number generator like rolling dice

let ranBtn = document.getElementById("roll");
let randomNum = document.getElementById("output");

ranBtn.onclick = function(){
   randomNum.textContent = Math.floor(Math.random() * 6) + 1;
   //randomNum.textContent = Math.floor(Math.random() * (100 - 50)) + 50;
   //To generate a random number from 50 to 100
}

// let randomNum = Math.floor(Math.random() * 6);
// console.log(randomNum);
