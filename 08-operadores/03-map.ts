export function map(
    arregloOrg: any[],
    funcion: (
        valorActual: any, 
        indice?: number,
        arregloOrg?: any[]) => any
): any[] {
    const nuevoArreglo = [];
    const arreglo= [... arregloOrg]
    for(let i = 0; i < arreglo.length; i++ ){
        const respuestaFuncion = funcion(
            arreglo[i],
            i,
            arreglo,
        );
        nuevoArreglo.push(respuestaFuncion);
    }
    return nuevoArreglo;
}