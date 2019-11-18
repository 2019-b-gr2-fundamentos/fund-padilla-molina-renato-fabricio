// DO WHILE
/*let vecesQeHeComido=0;
do{
    console.log('Vamos a comer');
    vecesQeHeComido=vecesQeHeComido+1;
    switch(vecesQeHeComido){
        case 1:
            console.log("Desayuno");
        break;
        case 2:
            console.log("Almuerzo");
        break;
        case 3:
            console.log("Merienda");
        break;
        default:
            console.log("Gordito");
    }
}while(vecesQeHeComido<3);
// WHILE
vecesQeHeComido=0;
while(vecesQeHeComido<3){
    console.log('Vamos a comer');
    vecesQeHeComido++;
    switch(vecesQeHeComido){
        case 1:
            console.log("Desayuno");
        break;
        case 2:
            console.log("Almuerzo");
        break;
        case 3:
            console.log("Merienda");
        break;
        default:
            console.log("Gordito");
    }
}*/
/*
1 Analisis
2 Algebra
3 Compiladores
5 Progra
7 Calculo
11 Fisica
13 Inlges
*/
let hagoDeber=0;
let analisis=0;
let algebra=0;
let compiladores=0;
let progra=0;
let calculo=0;
let fisica=0;
let ingles=0;
while(hagoDeber<50){
    if(hagoDeber%3==0){
        compiladores++;
    }else{
        if(hagoDeber%2==0){
            algebra++;
        }else {
            if(hagoDeber%2!=0){
                analisis++;
            }
        }
    }
    hagoDeber++;
}
console.log(`Analisis: ${analisis}`);
console.log(`Algebra: ${algebra}`);
console.log(`Compiladores: ${compiladores}`);
while(hagoDeber<1000){
    if(hagoDeber%13==0){
        ingles++;
    }else {
        if(hagoDeber%11==0){
            fisica++;
        }else{
            if(hagoDeber%7==0){
                calculo++;
            }else{
                if(hagoDeber%5==0){
                    progra++;
                }else{
                    if(hagoDeber%3==0){
                        compiladores++;
                    }else{
                        if(hagoDeber%2==0){
                            algebra++;
                        }else{
                            if(hagoDeber%1==0){
                                analisis++;
                            }
                        }
                    }
                }
            }
        }
    }
    hagoDeber++;
}
console.log(`Analisis: ${analisis}`);
console.log(`Algebra: ${algebra}`);
console.log(`Compiladores: ${compiladores}`);
console.log(`Programacion: ${progra}`);
console.log(`Calculo: ${calculo}`);
console.log(`Fisica: ${fisica}`);
console.log(`Ingles: ${ingles}`);