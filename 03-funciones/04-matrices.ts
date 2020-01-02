function intercambiarDiag(matrizUno: number[][]): void{
    const esValido= verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if(esValido){
        let diagonalUno=[];
        let diagonalDos=[];
        let contadorI=matrizUno[0].length;
        for(let contadorJ=0;contadorJ<matrizUno[0].length;contadorJ++){
            diagonalUno[contadorJ]=matrizUno[contadorJ][contadorJ];       
        }
        for(let contadorJ=0;contadorJ<matrizUno[0].length;contadorJ++){
            contadorI--; 
            diagonalDos[contadorI]=matrizUno[contadorJ][contadorI];  
        }
        contadorI=matrizUno[0].length;
        for(let contadorJ=0;contadorJ<matrizUno[0].length;contadorJ++){
            matrizUno[contadorJ][contadorJ]=diagonalDos[contadorJ];       
        }
        for(let contadorJ=0;contadorJ<matrizUno[0].length;contadorJ++){
            contadorI--; 
            matrizUno[contadorJ][contadorI]=diagonalUno[contadorI];  
        }
        for(let contadorJ=0;contadorJ<matrizUno.length;contadorJ++){
            console.log(matrizUno[contadorJ])      
        }
    }
}

function sonIguales(valor: boolean,matrizUno: number[][],matrizDos: number[][]): void{
    let validar=0;
    if(valor==true){
        for(let contadorI=0;contadorI<matrizUno.length;contadorI++){
            for(let contadorJ=0;contadorJ<matrizUno[0].length;contadorJ++){
                if(matrizUno[contadorI][contadorJ]==matrizDos[contadorI][contadorJ]){
                    validar++;
                }else{
                    validar=0;
                }
            }
        }
        if(validar!=0){
            console.log("Las matrices son iguales");
        }else{
            console.log("Las no matrices son iguales");
        }
    }else {
        console.log("Las dimensiones no son iguales");
    }
    
} 
function comparaMatriz(matrizUno: number[][],matrizDos: number[][]): boolean {
    const esValido=tienenMtricesIgualDim(matrizUno,matrizDos);
    if(esValido){
        return true;
    }else {
        return false;
    }
}

function tienenMtricesIgualDim(matrizUno: number[][],matrizDos: number[][]): boolean {
    const matrizUnoPrimeraDimension = obtenerPrimeraDimension(
        matrizUno
        );
    const matrizUnoSegundaDimension = obtenerSegundaDimension(
        matrizUno
        );
    const matrizDosPrimeraDimension = obtenerPrimeraDimension(
        matrizDos
        );
    const matrizDosSegundaDimension = obtenerSegundaDimension(
        matrizDos
        );
    const noHayFalsos=matrizUnoPrimeraDimension !=false && matrizUnoSegundaDimension !=false && matrizDosPrimeraDimension !=false && matrizDosSegundaDimension !=false;
    const tienenIgualDim=matrizUnoPrimeraDimension == matrizDosPrimeraDimension && matrizUnoSegundaDimension == matrizDosSegundaDimension;
    if(noHayFalsos){
            if(tienenIgualDim){
                return true;
            } else {
                return false;
            }
        } else{
            return false;
        }
}

function obtenerPrimeraDimension(matrizUno: number[][]): number | boolean{
    // VALIDACIONES
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if(esValido){
        const primeraDimensionArreglo = matrizUno.length;
        return primeraDimensionArreglo;
    }else{
        return false;
    }
}

function obtenerSegundaDimension(matrizUno: number[][]): number | boolean{
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if(esValido){
        let longitudActualMaxima = 0; // Auxiliar
        let longitudActualMinima = -1; // Auxiliar
        for(let i = 0; i < matrizUno.length; i++){
            const elementoActual = matrizUno[i]; // arreglo
            const longitudActual = elementoActual.length; // segunda dimension
            if(longitudActualMaxima < longitudActual){
                longitudActualMaxima = longitudActual;
            }
            if(longitudActualMinima == -1) {
                longitudActualMinima = longitudActual;
            }else{
                if(longitudActual < longitudActualMinima){
                    longitudActualMinima = longitudActual;
                }
            }
        }
        if(longitudActualMaxima != longitudActualMinima){
            return false;
        }else{
            return matrizUno[0].length;
        }
    }else{
        return false;
    }
}

function verificarTodosLosElementosDeUnArregloSonArreglo(arreglo: any[]):boolean{
    for(let i = 0; i < arreglo.length; i++){
        const elementoActual = arreglo[i];
        const esUnArreglo = typeof elementoActual == 'object' &&
        elementoActual.indexOf; // Truty
        if(!esUnArreglo){
            return false;
        }
    }
    return true;
}

function main(){
    const x = [
        [1,2,9],
        [3,2,7],
        [4,5,6]
    ];
    const y = [
        [1,2,9],
        [3,2,7],
        [4,5,6]
    ];
    const res=comparaMatriz(x, y);
    sonIguales(res,x,y);
    intercambiarDiag(x);
}
main();