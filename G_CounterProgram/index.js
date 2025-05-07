//counter program

let count = 0;

document.getElementById("decrementBtn").onclick = function(){
   count--;
   document.getElementById("myLabel").textContent = count;
}

document.getElementById("incrementBtn").onclick = function(){
   count++;
   document.getElementById("myLabel").textContent = count;
}

document.getElementById("resetBtn").onclick = function(){
   count = 0;
   document.getElementById("myLabel").textContent = count;
}