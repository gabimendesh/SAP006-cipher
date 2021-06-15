//encode and decode ASCII function 

const cipher = {
  encode: (offset, string) => {
    let resultado = "", encode;

    if (offset === null || string === null || offset === 0 || string === 0)
      throw TypeError("Mensagem inválida");

    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        encode = ((string.charCodeAt(i) - 65 + offset) % 26) + 65;
      }
      resultado += String.fromCharCode(encode)
    }
    return resultado
  },

  decode: (offset, string) => {
    let resultado = "", decode;

    if (offset === null || string === null || offset === 0 || string === 0)
      throw TypeError("Mensagem inválida");

    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) <= 90 && string.charCodeAt(i) >= 65) {
        decode = ((string.charCodeAt(i) - 90 - offset) % 26) + 90;
      }
      resultado += String.fromCharCode(decode)
    }

    return resultado
  }
}

export default cipher;
