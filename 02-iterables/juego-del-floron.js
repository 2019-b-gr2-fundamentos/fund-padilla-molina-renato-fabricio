// Floron
const arregloRandom = [];
let verificacion = 0;
while (verificacion == 0) {
    for (let contador = 0; contador < 10; contador++) {
        arregloRandom[contador] = Math.floor(Math.random() * 2);
    }
    for (contador = 0; contador < 10; contador++) {
        if (arregloRandom[contador] == 1) {
            verificacion++;
        }
    }
}
console.log(arregloRandom);
