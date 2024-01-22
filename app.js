let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    console.log(listaNumerosSorteados.length);

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los numeros');
    } else { 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(intentos);
    if (numeroUsuario===numeroSecreto){
        asignarTextoElemento('p',`acertaste el numero secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario < numeroSecreto){
            asignarTextoElemento('p','el numero es mayor a ' + numeroUsuario);
        } else {
            asignarTextoElemento('p','el numero es menor a ' + numeroUsuario);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', "Juego del numero secreto");
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true);    
}

condicionesIniciales();

