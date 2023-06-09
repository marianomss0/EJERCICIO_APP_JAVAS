const readlineSync = require('readline-sync');
const { generarNumero, verificarAdivinanza } = require('./adivinanza');

const obtenerNumeroUsuario = () => {
    return readlineSync.question('Ingresa un numero entre el 1 y el 100: ');
    };
    

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumero();
    let numeroUsuario = 0;

    console.log('¡Bienvenido a Adivina el número secreto!');
    console.log('Intenta adivinar el numero del 1 al 100.\n');

    while (numeroUsuario !== numeroSecreto) {
        numeroUsuario = obtenerNumeroUsuario();   
        verificarAdivinanza(numeroSecreto, numeroUsuario);
    }
    };
    juegoAdivinanza();
    
