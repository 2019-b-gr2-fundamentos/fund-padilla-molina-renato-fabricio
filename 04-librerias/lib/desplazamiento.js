module.exports = function(){
    console.log("1. Velocidad en coordenadas rectangulares\n2. Rapidez y angulo");
    var opcionDosString = prompt("Opcion:");
    var opcion = Number(opcionDosString)
    if (opcion == 1) {
        var velocidadXString = prompt("Velocidad en X");
        var velocidadYString = prompt("Velocidad en Y");
        var velocidadX = Number(velocidadXString);
        var velocidadY = Number(velocidadYString);
        const tiempo = 2 * (velocidadY / 9.81);
        const desplazamiento = velocidadX * tiempo;
        console.log("El desplazamiento es:" + desplazamiento + " m");
    }
    if (opcion == 2) {
        var rapidezString = prompt("Rapidez");
        var anguloString = prompt("Angulo en grados");
        var rapidez = Number(rapidezString);
        var angulo = Number(anguloString);
        const anguloUno = (angulo * Math.PI) / 90;
        const desplazamiento = ((Math.pow(rapidez, 2)) * (Math.sin(anguloUno))) / 9.81;
        console.log("El desplazamiento es:" + desplazamiento + " m");
    }
}
    
    