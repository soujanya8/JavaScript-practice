// User input -2 ways:

//1. Easy way just window.promt
//2. Professional way: html textbox;

/*easy way
let username;
username = window.prompt(`Enter your username`);
console.log(username);
*/

//Professional way
let username;
document.getElementById("mysubmit").onclick =function(){
   username = document.getElementById("userinput").value;
   //console.log(username);
   document.getElementById("myh").textContent = `hello ${username}`;
}