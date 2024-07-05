let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

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

        alert("No has seleccionado ninguna mascota")
        
    }

    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1, 3)
    spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatorio == 1){
        
        spanMascotaEnemigo.innerHTML = 'Hipoge'
        
    } else if (mascotaAleatorio == 2){

        spanMascotaEnemigo.innerHTML = 'Capipepo'

    } else {

        spanMascotaEnemigo.innerHTML = 'Ratigueya'

    }
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio === 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio === 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate(){
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } 
    else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
    }
    else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
    }
    else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
    }
    else{
        crearMensaje("PERDISTE")
    }
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' - ' + resultado

    sectionMensajes.appendChild(parrafo)
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego)
