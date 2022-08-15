const $textInput = document.querySelector("#textInput")
const $botonEncriptar = document.querySelector('.boton1')
const $error = document.querySelector("#error")
const $consejo = document.querySelector("#consejo")
const $munieco = document.querySelector("#munieco")


function encriptar(){

    limpiar()

    let regex = /^[a-z]+$/
    if(regex.test($textInput.value) == true){
        return console.log($textInput.value)
    } else{
        mostrarError()
    }

}


function limpiar(){

    $error.classList.add("oculto")
    $consejo.classList.add("oculto")
    $munieco.classList.add("oculto")
}


function mostrarError(){



    $error.classList.remove("oculto")
    $consejo.classList.remove("oculto")
    $munieco.classList.remove("oculto")
}



$botonEncriptar.onclick = encriptar