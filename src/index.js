import cipher from "./cipher.js";

console.log(cipher);

//buttons 

function cifrar() {
 const texto = document.getElementById("myText").value
 document.getElementById("codeText").value = texto

} 
let cifrarButton = document.getElementById("cifrar");
cifrarButton.addEventListener("click", cifrar);


function decifrar() {
  const decifrado = document.getElementById("codeText").value
  document.getElementById("myText").value = decifrado
  
 } 

let decifrarButton = document.getElementById("decifrar");
decifrarButton.addEventListener("click", decifrar);