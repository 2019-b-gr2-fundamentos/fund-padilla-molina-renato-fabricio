// Compronbar si dos matrices son iguales
function main() {
    intercambiar(matrizC);
}
const matrizA = [
    [1, 4, 9],
    [5, 8, 10]
];
const matrizB = [
    [1, 2, 3],
    [5, 6, 7]
];
let matrizC = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [5, 1, 2, 9],
    [7, 8, 2, 3]
];
function intercambiar(matrizX) {
    let fila = [];
    let columna = [];
    let contadorI = matrizX[0].length;
    for (let contadorJ = 0; contadorJ < matrizX[0].length; contadorJ++) {
        fila[contadorJ] = matrizX[contadorJ][contadorJ];
    }
    for (let contadorJ = 0; contadorJ < matrizX[0].length; contadorJ++) {
        contadorI--;
        columna[contadorI] = matrizX[contadorJ][contadorI];
    }
    contadorI = matrizX[0].length;
    for (let contadorJ = 0; contadorJ < matrizX[0].length; contadorJ++) {
        matrizX[contadorJ][contadorJ] = columna[contadorJ];
    }
    for (let contadorJ = 0; contadorJ < matrizX[0].length; contadorJ++) {
        contadorI--;
        matrizX[contadorJ][contadorI] = fila[contadorI];
    }
    for (let contadorJ = 0; contadorJ < matrizX.length; contadorJ++) {
        console.log(matrizX[contadorJ]);
    }
}
function sumaCol(matrizX) {
    let validar = 0;
    for (let contadorI = 0; contadorI < matrizX[0].length; contadorI++) {
        validar = 0;
        for (let contadorJ = 0; contadorJ < matrizX.length; contadorJ++) {
            validar += matrizX[contadorJ][contadorI];
        }
        console.log(`Columna ${contadorI + 1}: ${validar}`);
    }
}
function sumaFil(matrizX) {
    let validar = 0;
    for (let contadorI = 0; contadorI < matrizX.length; contadorI++) {
        validar = 0;
        for (let contadorJ = 0; contadorJ < matrizX[0].length; contadorJ++) {
            validar += matrizX[contadorI][contadorJ];
        }
        console.log(`Fila ${contadorI + 1}: ${validar}`);
    }
}
function verficar(valor, matrizX, matrizY) {
    let validar = 0;
    if (valor == 1) {
        for (let contadorI = 0; contadorI < matrizX.length; contadorI++) {
            for (let contadorJ = 0; contadorJ < matrizX[0].length; contadorJ++) {
                if (matrizX[contadorI][contadorJ] == matrizX[contadorI][contadorJ]) {
                    validar++;
                }
                else {
                    validar = 0;
                }
            }
        }
    }
    if (validar != 0) {
        console.log("Las matrices son iguales");
    }
    else {
        console.log("Las no matrices son iguales");
    }
}
function verificarNM(matrizX, matrizY) {
    if (matrizX.length == matrizY.length) {
        if (matrizX[0].length == matrizY[0].length) {
            return 1;
        }
        else {
            return 0;
        }
    }
}
main();
