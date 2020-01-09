// Calculadora basica
// Elgija una opcion y sigua el proceso
console.log("\t\tCalculadora\nIngrese la opcion que desea");
console.log("1. Suma\n2. Resta\n3. Multiplicacion\n4. Division\n5. Desplazamiento\n0. Salir");
const opcionString = prompt("Opcion:");
if (opcionString != 0) {
    if (opcionString == 1 || opcionString == 2 || opcionString == 3 || opcionString == 4 || opcionString == 5) {
        if (opcionString == 1) {
            const operadorUnoString = prompt("Ingrese primer operador");
            const operadorDosString = prompt("Ingrese segundo operador");
            const operadorUno = Number(operadorUnoString);
            const operadorDos = Number(operadorDosString);
            console.log(operadorUno + operadorDos);
        }
        if (opcionString == 2) {
            const operadorUnoString = prompt("Ingrese primer operador");
            const operadorDosString = prompt("Ingrese segundo operador");
            const operadorUno = Number(operadorUnoString);
            const operadorDos = Number(operadorDosString);
            console.log(operadorUno - operadorDos);
        }
        if (opcionString == 3) {
            const operadorUnoString = prompt("Ingrese primer operador");
            const operadorDosString = prompt("Ingrese segundo operador");
            const operadorUno = Number(operadorUnoString);
            const operadorDos = Number(operadorDosString);
            console.log(operadorUno * operadorDos);
        }
        if (opcionString == 4) {
            const operadorUnoString = prompt("Ingrese primer operador");
            const operadorDosString = prompt("Ingrese segundo operador");
            if (operadorDosString != 0) {
                const operadorUno = Number(operadorUnoString);
                const operadorDos = Number(operadorDosString);
                console.log(operadorUno / operadorDos);
            }
            else
                console.log("No es posible dividir para 0");
        }
        if (opcionString == 5) {
            console.log("1. Velocidad en coordenadas rectangulares\n2. Rapidez y angulo");
            const opcionDosString = prompt("Opcion:");
            if (opcionDosString == 1) {
                const velocidadXString = prompt("Velocidad en X");
                const velocidadYString = prompt("Velocidad en Y");
                const velocidadX = Number(velocidadXString);
                const velocidadY = Number(velocidadYString);
                const tiempo = 2 * (velocidadY / 9.81);
                const desplazamiento = velocidadX * tiempo;
                console.log("El desplazamiento es:" + desplazamiento + " m");
            }
            if (opcionDosString == 2) {
                const rapidezString = prompt("Rapidez");
                const anguloString = prompt("Angulo en grados");
                const rapidez = Number(rapidezString);
                const angulo = Number(anguloString);
                const anguloUno = (angulo * Math.PI) / 90;
                const desplazamiento = ((Math.pow(rapidez, 2)) * (Math.sin(anguloUno))) / 9.81;
                console.log("El desplazamiento es:" + desplazamiento + " m");
            }
        }
    }
    else
        console.log("Opcion incorecta");
}
