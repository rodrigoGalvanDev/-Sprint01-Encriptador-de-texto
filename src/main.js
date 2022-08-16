const $textInput = document.querySelector("#textInput")
const $botonEncriptar = document.querySelector('.boton1')
const $botonDesencriptar = document.querySelector(".boton2")
const $error = document.querySelector("#error")
const $consejo = document.querySelector("#consejo")
const $munieco = document.querySelector("#munieco")
const $mostrarTexto = document.querySelector("#mostrarTexto")
const $botonCopiar = document.querySelector("#botonCopiar")


function encriptar(){

    limpiar()

    let regex = /[a-z ]+/gm

    if(regex.test($textInput.value) == true){
        let texto = $textInput.value;
        texto = texto.replace(/e/g , "enter")
        texto = texto.replace(/i/g , "imes")
        texto = texto.replace(/a/g , "ai")
        texto = texto.replace(/o/g , "ober")
        texto = texto.replace(/u/g , "ufat")
        mostrarTexto(texto)
    } else{
        mostrarError()
    }

}

function desencriptar(){

    limpiar()

    let regex = /[a-z ]+/gm

    if(regex.test($textInput.value) == true){
        let texto = $textInput.value;
        texto = texto.replace(/enter/g , "e")
        texto = texto.replace(/imes/g , "i")
        texto = texto.replace(/ai/g , "a")
        texto = texto.replace(/ober/g , "o")
        texto = texto.replace(/ufat/g , "u")
        mostrarTexto(texto)
        mostrarBoton()
    } else{
        mostrarError()
    }

}


function limpiar(){

    $error.classList.add("oculto")
    $consejo.classList.add("oculto")
    $munieco.classList.add("oculto")
    $mostrarTexto.classList.add("oculto")
    $botonCopiar.classList.add("oculto")
}

function mostrarTexto(texto){

    $mostrarTexto.classList.remove("oculto")
    $mostrarTexto.innerHTML = texto

}

function mostrarBoton(){
    
    $botonCopiar.classList.remove("oculto")

}


function mostrarError(){

    $error.classList.remove("oculto")
    $consejo.classList.remove("oculto")
    $munieco.classList.remove("oculto")

}


$botonDesencriptar.onclick = desencriptar
$botonEncriptar.onclick = encriptar