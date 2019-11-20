// Floron
/*
1.- Declaramos un arreglo y los contadores necesarios
2.- Creamos un for para asignar los valores al arreglo randomicamente
3.- Creamos un for para verificar que al menos un elemento del arreglo sea un 1
4.- Colocamos dentro de un bucle de condicion para corroborara que existe al menos un 1
5.- Se visaluiza el arreglo en pantalla
*/
const arregloRandom = [];
let verificacion = 0;
const jugadores = 10;
/*while(verificacion==0){
    for(let contador=0;contador<jugadores;contador++){
        arregloRandom[contador]=Math.floor(Math.random() * 2);
    }
    for(contador=0;contador<tope;contador++){
        if(arregloRandom[contador]==1){
            verificacion++;
        }
    }
}*/
verificacion = Math.floor(Math.random() * jugadores);
for (let contador = 0; contador < jugadores; contador++) {
    arregloRandom[contador] = 0;
}
arregloRandom[verificacion] = 1;
console.log(arregloRandom);
