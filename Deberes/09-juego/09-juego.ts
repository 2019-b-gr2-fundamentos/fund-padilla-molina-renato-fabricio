import { leerArchivo } from "../../07-archivos/02-leer-archivo";
import * as prompts from 'prompts';
import { juegoPosicion } from "../08-estructuras-de-datos/interfaces/juego.interfaces";

async function main(){
    let validar: boolean;
    let a;
    let b;
    let acumulador=0;
    const juego=[
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    let matr=[
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']
    ];
    console.log("\n\n\t\t TRES EN RAYA\n");
    console.log(" Primer jugador es X");
    console.log(" Segundo jugador es O");
    console.log(" Que comience el juego...");
    console.log("\t\t ");
    imprimir(juego);
    let salir=false;
    do{
        const opcionA=await prompts({
            type: 'number',
            name: 'id',
            message: '\nEscoje una posicion\n'
        });
        switch(opcionA.id){
            case 1: 
                a=0;
                b=0;
                validar=comprobar(matr,a,b);
            break;
            case 2: 
                a=0;
                b=1;
                validar=comprobar(matr,a,b);
            break;
            case 3: 
                a=0;
                b=2;
                validar=comprobar(matr,a,b);
            break;
            case 4: 
                a=1;
                b=0;
                validar=comprobar(matr,a,b);
            break;
            case 5: 
                a=1;
                b=1;
                validar=comprobar(matr,a,b);
            break;
            case 6:
                a=1;
                b=2; 
                validar=comprobar(matr,a,b);
            break;
            case 7: 
                a=2;
                b=0;
                validar=comprobar(matr,a,b);
            break;
            case 8: 
                a=2;
                b=1;
                validar=comprobar(matr,a,b);
            break;
            case 9: 
                a=2;
                b=2;
                validar=comprobar(matr,a,b);
            break;
        }
        if(validar==true){
            matr[a][b]='X'
            
        }else {
            console.log("\nPosicion no disponible\n");
        }
        imprimir(matr);
        salir=ganador(matr);
        if(ganador(matr)){
            console.log("\n\tERES EL GANADOR")
        }
        if(salir==true){
            break;
        }
        const opcionB=await prompts({
            type: 'number',
            name: 'id',
            message: '\nEscoje una posicion\n'
        });
        switch(opcionB.id){
            case 1: 
                a=0;
                b=0;
                validar=comprobar(matr,a,b);
            break;
            case 2: 
                a=0;
                b=1;
                validar=comprobar(matr,a,b);
            break;
            case 3: 
                a=0;
                b=2;
                validar=comprobar(matr,a,b);
            break;
            case 4: 
                a=1;
                b=0;
                validar=comprobar(matr,a,b);
            break;
            case 5: 
                a=1;
                b=1;
                validar=comprobar(matr,a,b);
            break;
            case 6:
                a=1;
                b=2; 
                validar=comprobar(matr,a,b);
            break;
            case 7: 
                a=2;
                b=0;
                validar=comprobar(matr,a,b);
            break;
            case 8: 
                a=2;
                b=1;
                validar=comprobar(matr,a,b);
            break;
            case 9: 
                a=2;
                b=2;
                validar=comprobar(matr,a,b);
            break;
        }
        if(validar==true){
            matr[a][b]='O'
            
        }else {
            console.log("\nPosicion no disponible\n");
        }
        imprimir(matr);
        salir=ganador(matr);
        if(ganador(matr)){
            console.log("\n\tERES EL GANADOR")
        }
        for(let I=0;I<3;I++){
            for(let J=0;J<3;J++){
                if(matr[I][J]=='X'||matr[I][J]=='O'){
                    acumulador++;
                }
            }
        }
        if(acumulador==9){
            salir=true
            console.log("\tES UN EMPATE");
        }else{acumulador=0}
    }while(salir==false);
    
}
function ganador(array){
    if(array[0][0]=='X'&&array[1][1]=='X'&&array[2][2]=='X'){
        return true;
    }else {
        if(array[0][0]=='X'&&array[0][1]=='X'&&array[0][2]=='X'){
            return true;
        }else {
            if(array[1][0]=='X'&&array[1][1]=='X'&&array[1][2]=='X'){
                return true;
            }else {
                if(array[2][0]=='X'&&array[2][1]=='X'&&array[2][2]=='X'){
                    return true;
                }else {
                    if(array[2][0]=='X'&&array[1][1]=='X'&&array[0][2]=='X'){
                        return true;
                    }else {
                        if(array[0][0]=='X'&&array[1][0]=='X'&&array[2][0]=='X'){
                            return true;
                        }else {if(array[0][1]=='X'&&array[1][1]=='X'&&array[2][1]=='X'){
                            return true;
                        }else {
                            if(array[0][2]=='X'&&array[1][2]=='X'&&array[2][2]=='X'){
                                return true;
                            }else {return false}
                            }
                        }
                    }
                }
            }
        }
    }
}
function comprobar(array,a,b): boolean{
    if(array[a][b]=='X'||array[a][b]=='O'){
        return false;
    };
    if(array[a][b]==' '){
        return true;
    }
}
function imprimir(array): void{
    console.log(`\t\t${array[0][0]}||${array[0][1]}||${array[0][2]}`);
    console.log("\t\t=======");
    console.log(`\t\t${array[1][0]}||${array[1][1]}||${array[1][2]}`);
    console.log("\t\t=======");
    console.log(`\t\t${array[2][0]}||${array[2][1]}||${array[2][2]}`);
}
main();
