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
    let spanMascotaJugador = document.getElementById("mascota-jugador")
    if (inputHipoge.checked){

        spanMascotaJugador.innerHTML = "Hipoge"

    }  else if (inputCapipepo.checked){

        spanMascotaJugador.innerHTML = "Capipepo"

    } else if (inputRatigueya.checked){

        spanMascotaJugador.innerHTML = "Ratigueya"

    } else if (inputTenazas.checked){

        spanMascotaJugador.innerHTML = "Tenazas"

    } else if (inputTucapalma.checked){

        spanMascotaJugador.innerHTML = "Tucapalma"
        
    } else {

        alert("No has escogido ninguna mascota")
        
    }

    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3)
    spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (ataqueAleatorio == 1){
        
        spanMascotaEnemigo.innerHTML = 'Hipoge'
        
    } else if (ataqueAleatorio == 2){

        spanMascotaEnemigo.innerHTML = 'Capipepo'

    } else {

        spanMascotaEnemigo.innerHTML = 'Ratigueya'

    }
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


window.addEventListener("load", iniciarJuego)