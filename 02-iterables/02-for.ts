// for
// 1) Declarar una variable
// 2) Condicion
// 3) Contador
for(let numeroExDeMiCrush=7;numeroExDeMiCrush>0;numeroExDeMiCrush--){
    console.log(`ES CAN DA LO!`,numeroExDeMiCrush);
}
for(let numeroExDeMiCrushA=0;numeroExDeMiCrushA<=6;numeroExDeMiCrushA++){
    console.log(`ES CAN DA LO!`,numeroExDeMiCrushA);
}
// ARREGLOS
// 1 Elemento
// Conjunto del MISMO ELEMENTO ([1,2,3,4,5])
// Conjundo de DIFERENTES ELEMENTOS ([1,"abc",true])
const arregloNumeros=[1,2,3,4,5];
// REASIGNAR
arregloNumeros.push(6);
console.log('Arreglo',arregloNumeros);
arregloNumeros.pop();
console.log('Arreglo',arregloNumeros);
// Arreglo
// 1) Elementos
// 2) Indice (0 index based) --> POSICION
// 3) LONGITUD
// Acceder a cada elemnto
const indiceElementoUno=0;
console.log('Arreglo',arregloNumeros[indiceElementoUno]);
const indiceElementoCinco=4;
console.log('Arreglo',arregloNumeros[indiceElementoCinco]);

// 1) Crear arreglo de 5 elementos
// 2) Cada elemento 1 o 0
// 3= Exista almenos un "1"
// Randomico
Math.floor(Math.random() * 2) // Entre 0 y 2 Excluido
const arregloRandom=[];

