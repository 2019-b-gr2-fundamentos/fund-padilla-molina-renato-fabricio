const arregloNumeros = [1, 2, 3, 9, 4, 5, 6, 7, 8, 9, 10];
// Acceder
console.log(arregloNumeros[6]); //-> 7
// Añadir al final
arregloNumeros.push(11);
console.log(arregloNumeros);
// Borrar al final
arregloNumeros.pop();
console.log(arregloNumeros);
// Añadir
arregloNumeros.splice(0, 0, 1.2);
console.log(arregloNumeros);
// Borrar
arregloNumeros.splice(7, 1);
console.log(arregloNumeros);
// Buscar el indice de un elemnto
console.log(arregloNumeros.indexOf(5)); //-> 5
console.log(arregloNumeros.indexOf(7)); //-> -1 cuando no hay un elemento
arregloNumeros.splice(0, 1, 999);
console.log(arregloNumeros);
