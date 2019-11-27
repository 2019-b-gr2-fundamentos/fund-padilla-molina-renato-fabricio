function main() {
    recorrerArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0);
}
function recorrerArreglo(arreglo, indice) {
    if (0 == arreglo.length) {
        console.log("Se termino");
    }
    else {
        if (indice == 0) {
            console.log(arreglo[arreglo.length]);
            recorrerArreglo(arreglo, arreglo.length - 1);
        }
        else {
            console.log(arreglo[arreglo.length]);
            recorrerArreglo(arreglo, arreglo.length - 1);
        }
    }
}
/*function recorrerArreglo(arreglo:number[],indice:number):void{
    if(indice==arreglo.length){
        console.log("Se termino");
    }else{
        console.log(arreglo[indice]);
        recorrerArreglo(arreglo,indice+1);
    }
}*/
function imprimiMensajeNVeces(mensaje, numeroVeces) {
    if (numeroVeces == 0) {
        console.log("Se termino");
    }
    else {
        numeroVeces--;
        console.log(mensaje);
        imprimiMensajeNVeces(mensaje, numeroVeces);
    }
}
