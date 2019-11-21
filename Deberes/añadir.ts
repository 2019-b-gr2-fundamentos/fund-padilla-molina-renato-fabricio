function add(array,ind,valor){
    const arregloNumero=[];
    const indice=ind;
    const arregloA=[];
    const variable=valor;
    for(let contador=0;contador<array.length;contador++){
        arregloNumero[contador]=array[contador];
    }
    for(let contador=indice;contador<array.length;contador++){
        arregloA[contador]=arregloNumero[contador];
    }
    arregloNumero[indice]=variable;
    for(let contador=indice+1;contador<array.length+1;contador++){
        arregloNumero[contador]=arregloA[contador-1];
    }
    console.log(arregloNumero);
}
add([1,2,3,4,5,6,7,8,9,10],2,999);