/* cifra de césar //  [A-Z = 65-90]
 
 A  B  C  D  E  F  G  H  I  J  K   L   M  
 0  1  2  3  4  5  6  7  8  9  10  11  12 

 N  O  P  Q  R  S  T  U  V  W  X   Y   Z
13 14 15 16 17 18 19 20 21 22 23   24  25 
 
 */

//encode ASCII

//codASCII => cod0a25 => offset => giro => codASCII

const cipher = {
  encode : (offset, string) => {//nossa function recebe dois parâmentros string=texto para ser cifrado e offset= o número de posições que queremos mover para a direita no alfabeto ASCII
     let resultado = "", encode;//guardar o resultado numa variável
     for (let i = 0; i < string.length; i++) {
      //criando loop e transformando nossa string e increment
       if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        //Se nossa string em charCodeAt valor inicial for maior ou igual a 65 ("A") AND menor ou igual a 90 ("Z") executa isso:
          encode = ((string.charCodeAt(i) - 65 + offset) % 26) + 65; // Na variável traz a string em posição inicial (65) tirando -65 deixando ele igual a 0 adicionando o offset(deslocamento) + o módulo tamanho do alfabeto para fazer o loop / e adicionando 65 para encriptar com o código da primeira letra     
      }
       resultado+=String.fromCharCode(encode)
    }    
  return resultado
  },

   decode : (offset, string) => {
    let resultado = "", decode;
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) <= 90 && string.charCodeAt(i) >= 65) {
         decode = ((string.charCodeAt(i) - 90 - offset) % 26) + 90;      
      }
      resultado+=String.fromCharCode(decode)
    }   
  
  return resultado
  }
}

export default cipher;
