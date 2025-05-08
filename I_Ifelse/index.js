//if  esle statement : if the condition is true then excecutes the code or esle statement executes

const myInput = document.getElementById("myInput");
const mySubmit = document.getElementById("mySubmit");
const textElement = document.getElementById("id1");

mySubmit.onclick = function(){
   age = myInput.value;
   age = Number(age);

   if (age >= 100){
      textElement.textContent = `Too old  to vote`;
   }
   else if (age >= 18){
      textElement.textContent = `right to vote`;
   }
   else if(age == 0){
      textElement.textContent = `Just born`;
   }
   else if(age < 0){
      textElement.textContent = `It cant be negative`;
   }
   else{
      textElement.textContent = `he is minor`; 
   }
}

