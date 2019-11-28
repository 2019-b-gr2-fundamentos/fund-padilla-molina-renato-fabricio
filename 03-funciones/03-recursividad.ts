function main(){
    recorrerArreglo([1,2,3,4,5,6,7,8,9,10],0);
}
function recorrerArreglo(arreglo:number[],indice:number):void{
    if(indice==-1){
        console.log("Se termino");
    }else{
        if(indice==0){
            indice=arreglo.length-1;
            console.log(arreglo[indice]);
            recorrerArreglo(arreglo,indice-1);
        }else{
            if(indice==1){
                console.log(arreglo[indice]);
                console.log(arreglo[indice-1]);
                recorrerArreglo(arreglo,indice-2);
            }else {
                console.log(arreglo[indice]);
                recorrerArreglo(arreglo,indice-1);
            }
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
function imprimiMensajeNVeces(mensaje:string,numeroVeces:number):void{
    if(numeroVeces==0){
        console.log("Se termino");
    }else{
        numeroVeces--;
        console.log(mensaje);
        imprimiMensajeNVeces(mensaje,numeroVeces);
    }
}
