/* Declaramos los textos que ingresan y salen. --> */
const textoEntrada = document.getElementById("entrada");
const textoSalida = document.getElementById("salida"); 

/* Declaramos los tres botones. --> */
const botonEncripta = document.getElementById("boton_Encripta");
const botonDesencripta = document.getElementById("boton_Desencripta");

/* Declaramos las condiciones dadas para el proyecto. --> */
const codigos = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
}

/* Función sencilla para encriptar el texto que entra. --> */
function click_encripta () {
    let texto = textoEntrada.value.toLowerCase();
    let textoEncriptado = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
    textoSalida.value = textoEncriptado;
    return textoSalida;
}

/* Función sencilla para desencriptar el texto. --> */
function click_desencripta (){
    let textoEncriptado = textoEntrada.value.toLowerCase();
    let texto = textoEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
    textoSalida.value = texto;
    return textoSalida; 
  }



botonEncripta.onclick = click_encripta;
botonDesencripta.onclick = click_desencripta;
