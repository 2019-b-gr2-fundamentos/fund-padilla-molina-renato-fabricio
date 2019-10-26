const numeroUno=1; //camelCase
const numeroDos=2;
let resultado=0;
// SUMA
resultado=1+2;
// RESTAR
resultado=1-2;
// MULTIPLICAR
resultado=1*2;
// DIVIDIR
resultado=1/2;
// EXPONENTE
resultado=1^2;
// MODULO
resultado=4%2;// ->Residuo
console.log("pera"+2);
// STRINGS
const mensaje="\"Hola mundo\"";
const saludo='\'Adio\s mundo\'';
console.log(mensaje+"1\t\t\t 3\n"+saludo);
// template strings
const edad=30;
const saludoEdad=`Mi edad es: \n${edad}`;
const saludoCompleto=`${mensaje}\n${saludo}`;
console.log(saludoEdad);
console.log(saludoCompleto);
// Contamos los elementos
const nombreLongitud=" Renato Fabricio ";
console.log(nombreLongitud.length);
// Eliminar espacios al rpincipio y al final
console.log(nombreLongitud.trim());
// Cambiar a mayusculas o minusculas
console.log(nombreLongitud.toUpperCase());
console.log(nombreLongitud.toLowerCase());
//console.log(nombreLongitud.replace("e","o"));
//console.log(nombreLongitud.replace("a","o"));
//console.log(nombreLongitud.replace("\n",""));
console.log(nombreLongitud);
console.log(nombreLongitud.replace("x","o"));
console.log(nombreLongitud);
console.log(nombreLongitud.replace("a","o"));
console.log(nombreLongitud);
console.log(nombreLongitud.search("t"));
console.log(nombreLongitud.search("Renato"));
console.log(nombreLongitud.slice(0,7)); // Impime solo el numero que se quiere
console.log(nombreLongitud.indexOf("t")); 
console.log(nombreLongitud.includes("ren",0)); // Dice si incluye un caracter o no
//console.log(nombreLongitud.endsWith("x"));
//console.log(nombreLongitud.startsWith("Reno",8));





// NUMEROUNO -> TODO MAYUSCULA
// NUMERO_UNO -> TODO MAYUSCULAS GUION BAJO
// NuemroUno -> Primera letra mayuscula
// numerouno -> todo minuscula