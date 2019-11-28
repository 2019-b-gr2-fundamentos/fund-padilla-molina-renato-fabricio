ejercicioMatriz();
function ejercicioMatriz() {
    let producto = 0;
    let resultado = 0;
    const matrizDos = [
        [1, 2, 3, 4, 9],
        [5, 6, 7, 8, 10]
    ];
    let indice = matrizDos[0].length;
    for (let contador = 0; contador < matrizDos[0].length; contador++) {
        indice--;
        producto = matrizDos[0][contador] * matrizDos[1][indice];
        resultado = resultado + producto;
    }
    console.log(resultado);
}
