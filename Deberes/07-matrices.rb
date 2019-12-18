# Compronbar si dos matrices son iguales
def main()
    matrizA=[
        [1,4,9],
        [5,8,10]
        ];
    matrizB=[
        [1,2,3],
        [5,6,7]      
        ];
    matrizC=[
        [1,2,3,4],
        [5,6,7,8],
        [5,1,2,9],
        [7,8,2,3]     
        ];
    intercambiar(matrizC);
    sumaFil(matrizA);
    sumaCol(matrizA);
    recibe=verificarNM(matrizA,matrizB);
    if recibe == 1
        verficar(recibe,matrizA,matrizB);
    else 
        puts "Las matrices son de orden diferente";
    end
end
def intercambiar(matrizX)
    fila=[];
    columna=[];
    contadorI=matrizX[0].length;
    for contadorJ in(0..matrizX[0].length-1)
        fila[contadorJ]=matrizX[contadorJ][contadorJ];       
    end
    for contadorJ in(0..matrizX[0].length-1)
        contadorI-=1; 
        columna[contadorI]=matrizX[contadorJ][contadorI];  
    end
    contadorI=matrizX[0].length;
    for contadorJ in(0..matrizX[0].length-1)
        matrizX[contadorJ][contadorJ]=columna[contadorJ];       
    end
    for contadorJ in(0..matrizX[0].length-1)
        contadorI-=1; 
        matrizX[contadorJ][contadorI]=fila[contadorI];  
    end
    for contadorJ in(0..matrizX.length-1)
        puts "#{matrizX[contadorJ]}";      
    end
end
def sumaCol(matrizX)
    validar=0;
    for contadorI in(0..matrizX[0].length-1)
        validar=0;
        for contadorJ in(0..matrizX.length-1)
            validar+=matrizX[contadorJ][contadorI];
        end
        puts "Columna #{contadorI+1}: #{validar}";
    end

end
def sumaFil(matrizX)
    validar=0;
    for contadorI in(0..matrizX.length-1)
        validar=0;
        for contadorJ in(0..matrizX[0].length-1)
            validar+=matrizX[contadorI][contadorJ];
        end
        puts "Fila #{contadorI+1}: #{validar}";
    end
end
def verficar(valor,matrizX,matrizY)
    validar=0;
    if valor == 1
        for contadorI in(0..matrizX.length-1)
            for contadorJ in(0..matrizX[0].length-1)
                if matrizX[contadorI][contadorJ] == matrizY[contadorI][contadorJ]
                    validar+=1;
                else
                    validar=0;
                end
            end
        end
    end
    if validar != 0 
        puts"Las matrices son iguales";
    else
        puts"Las no matrices son iguales";
    end
end
def verificarNM(matrizX,matrizY)
    if matrizX.length == matrizY.length
        if matrizX[0].length == matrizY[0].length
            return 1;
        else 
            return 0;
        end
    else 
        return 0;
    end
end
main();