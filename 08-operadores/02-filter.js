"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcular(funcion, numUno, numDos) {
    return funcion(numUno, numDos);
}
exports.calcular = calcular;
function sumar(numUno, numDos) {
    return numUno + numDos;
}
exports.sumar = sumar;
function restar(numUno, numDos) {
    return numUno - numDos;
}
exports.restar = restar;
function filter(arreglo, funcion) {
    var arregloFiltrafo = [];
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], i, arreglo);
        if (respuestaFuncion == true) {
            arregloFiltrafo.push(arreglo[i]);
        }
    }
    return arregloFiltrafo;
}
exports.filter = filter;
function map(arreglo, funcion) {
    var arregloFiltrado = [];
    for (var i = 0; i < arreglo.length; i++) {
        arregloFiltrado.push(arreglo[i]);
    }
    return arregloFiltrado;
}
exports.map = map;
/*export function map( arreglo:any[],numero:number,
    funcion:(valorActual:any,indice?:number,arreglo?:any[])=>boolean):any[]
    {
const arregloMapeado=[]
for (let i=0;i<arreglo.length;i++){
    const respuestaFuncion=funcion(arreglo[i],i,arreglo);
if(respuestaFuncion==true){
arregloMapeado.push(arreglo[i])*(numero);
}
}

return arregloMapeado;


}*/ 
