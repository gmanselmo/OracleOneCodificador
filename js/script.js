function ajustar(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";

    var salida = document.getElementById("salida");
    salida.style.height = "auto";
    salida.style.height = salida.scrollHeight + "px";
}

function copiarTexto() {
    var elemento = document.getElementById("txtsalida");
    var texto = elemento.innerText;
  
    navigator.clipboard.writeText(texto)
      .then(function() {
        alert("Texto copiado: " + texto);
      })
      .catch(function(error) {
        console.error("Error al copiar el texto: ", error);
    });
}

function encriptar() {
    var texto = document.getElementById('ingreso').value;
    var textoEncriptado = '';
  
    for (var i = 0; i < texto.length; i++) {
      var letra = texto[i];
  
      switch (letra) {
        case 'e':
          textoEncriptado += 'enter';
          break;
        case 'i':
          textoEncriptado += 'imes';
          break;
        case 'a':
          textoEncriptado += 'ai';
          break;
        case 'o':
          textoEncriptado += 'ober';
          break;
        case 'u':
          textoEncriptado += 'ufat';
          break;
        default:
          textoEncriptado += letra;
      }
    }
  
    document.getElementById('txtsalida').innerText = textoEncriptado;

    var salida = document.getElementById("salida");
    salida.style.overflow = "auto";



    mostrarBotonCopiar();
}
  
function desencriptar() {
    var textoEncriptado = document.getElementById('ingreso').value;
    var textoDesencriptado = '';
  
    for (var i = 0; i < textoEncriptado.length; i++) {
      var letra = textoEncriptado[i];
  
      switch (letra) {
        case 'e':
          if (textoEncriptado.substr(i, 5) === 'enter') {
            textoDesencriptado += 'e';
            i += 4;
          } else {
            textoDesencriptado += letra;
          }
          break;
        case 'i':
          if (textoEncriptado.substr(i, 4) === 'imes') {
            textoDesencriptado += 'i';
            i += 3;
          } else {
            textoDesencriptado += letra;
          }
          break;
        case 'a':
          if (textoEncriptado.substr(i, 2) === 'ai') {
            textoDesencriptado += 'a';
            i += 1;
          } else {
            textoDesencriptado += letra;
          }
          break;
        case 'o':
          if (textoEncriptado.substr(i, 4) === 'ober') {
            textoDesencriptado += 'o';
            i += 3;
          } else {
            textoDesencriptado += letra;
          }
          break;
        case 'u':
          if (textoEncriptado.substr(i, 4) === 'ufat') {
            textoDesencriptado += 'u';
            i += 3;
          } else {
            textoDesencriptado += letra;
          }
          break;
        default:
          textoDesencriptado += letra;
      }
    }
  
    document.getElementById('txtsalida').innerText = textoDesencriptado;
  
    mostrarBotonCopiar();
}
  

function mostrarBotonCopiar() {
    var botonCopiar = document.getElementById("botonCopiar");
    botonCopiar.style.display = "flex";
    botonCopiar.style.alignItems = "center";
    botonCopiar.style.justifyContent = "center";

}

function ocultarBotonCopiar() {
    var botonCopiar = document.getElementById("botonCopiar");
    botonCopiar.style.display = "none";
}

function borrarTexto() {

    document.getElementById("ingreso").value = "";
    document.getElementById("txtsalida").innerText = "";

    var ingreso = document.getElementById("ingreso");
    ingreso.style.height = "21rem";

    var salida = document.getElementById("salida");
    salida.style.height = "21rem";
    salida.style.overflow = "hidden";

    ocultarBotonCopiar()

}

document.addEventListener("DOMContentLoaded", function() {
    borrarTexto();
});
