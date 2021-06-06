import cipher from "./cipher.js";


//encode

function cifrar() {
  const texto = document.getElementById("myText").value;
  const offset = parseInt(document.getElementById("offset").value)
   document.getElementById("codeText").value = cipher.encode(offset, texto)

} 
const cifrarButton = document.getElementById("cifrar");
cifrarButton.addEventListener("click", cifrar);

//decode

function decifrar() {
  const decifrado = document.getElementById("codeText").value;
  const offset = parseInt(document.getElementById("offset").value)
  document.getElementById("myText").value = cipher.decode(offset, decifrado);

 } 

const decifrarButton = document.getElementById("decifrar");
decifrarButton.addEventListener("click", decifrar);

//offset
//const offset = document.getElementById("offset").value = offset;
