function main() {
    calculadora();
}
function sumar(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}
function restar(numeroUno, numeroDos) {
    return numeroUno - numeroDos;
}
function multiplicar(numeroUno, numeroDos) {
    return numeroUno * numeroDos;
}
function dividir(numeroUno, numeroDos) {
    return numeroUno / numeroDos;
}
function calculadora() {
    const operacion = prompt('Selecciona una operacion:\n"1. Suma"\n"2. Resta"\n"3. Multiplicacion"\n"4. Dividision"\n"5. Salir"');
    const esSuma = operacion == 'Suma' ||
        operacion == '1' ||
        operacion == 'suma';
    const esResta = operacion == 'Resta' ||
        operacion == '2' ||
        operacion == 'resta';
    const esMulti = operacion == 'Multiplicacion' ||
        operacion == '3' ||
        operacion == 'multiplicacion';
    const esDivi = operacion == 'Division' ||
        operacion == '4' ||
        operacion == 'dividision';
    const salir = operacion == 'Salir' ||
        operacion == '5' ||
        operacion == 'salir';
    const esValida = esSuma || esResta || esMulti || esDivi || salir;
    let resultado = 0;
    if (esValida) {
        if (salir) {
            console.log("Adios");
        }
        else {
            const numeroUno = +prompt("Numero 1");
            const numeroDos = +prompt("Numero 1");
            if (esSuma) {
                resultado = sumar(numeroUno, numeroDos);
            }
            if (esResta) {
                resultado = restar(numeroUno, numeroDos);
            }
            if (esMulti) {
                resultado = multiplicar(numeroUno, numeroDos);
            }
            if (esDivi) {
                resultado = dividir(numeroUno, numeroDos);
            }
            console.log(resultado);
        }
    }
    else {
        calculadora();
    }
}
