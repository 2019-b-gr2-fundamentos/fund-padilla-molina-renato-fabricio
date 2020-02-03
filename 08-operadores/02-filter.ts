export function calcular(funcion,numUno,numDos){
    return funcion(numUno,numDos)
}
export function sumar(numUno,numDos){
    return numUno+numDos;
}
export function restar(numUno,numDos){
    return numUno-numDos;
}

export function filter(arreglo: any[],
    funcion: (valorActual: any,indice?: number,arreglo?: any[]) => boolean): any{
        const arregloFiltrafo=[];
        for(let i=0;i<arreglo.length;i++){
            const respuestaFuncion=funcion(arreglo[i],i,arreglo);
            if(respuestaFuncion==true){
                arregloFiltrafo.push(arreglo[i]);
            }
        }
        return arregloFiltrafo;
}
export function map(arreglo: any[],
    funcion: (valorActual: any,indice?: number,arreglo?: any[]) => number): any{
        const arregloFiltrado=[];
        for(let i=0;i<arreglo.length;i++){
                arregloFiltrado.push(arreglo[i]);
        }
        return arregloFiltrado;
}

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