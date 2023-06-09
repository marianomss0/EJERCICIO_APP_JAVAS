const readlineSync = require('readline-sync');

const generarNumero = () =>{
    return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroUsuario) =>{
    if (numeroUsuario == numeroSecreto){
        console.log("Felicitaciones número correcto");
    } else if (numeroUsuario < numeroSecreto){
        console.log("Prueba incorrecta, el numero secreto es mayor.");

    } else {
        console.log("Prueba incorrecta, el numero secreto es menor.");
    }
};

module.exports = {
    generarNumero,
    verificarAdivinanza
    };
