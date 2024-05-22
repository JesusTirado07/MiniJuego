function iniciarJuego() {
    
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

}

function seleccionarMascotaJugador() {
    let inputHipoge = document.getElementById("hipoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let inputTenazas = document.getElementById("tenazas")
    let inputTucapalma = document.getElementById("tucapalma")

    if (inputHipoge.checked){

        alert("Has escogido a Hipoge")

    }  else if (inputCapipepo.checked){

        alert("Has escogido a Capipepo")

    } else if (inputRatigueya.checked){

        alert("Has escogido a Ratigueya")

    } else if (inputTenazas.checked){

        alert("Has escogido a Tenazas")

    } else if (inputTucapalma.checked){

        alert("Has escogido a Tucapalma")
        
    } else {

        alert("No has escogido ninguna mascota")
        
    }

}


window.addEventListener("load", iniciarJuego)