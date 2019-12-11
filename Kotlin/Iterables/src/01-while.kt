fun main(args: Array<String>){
// DO WHILE
   var vecesQeHeComido=0;
    do{
        println("Vamos a comer");
        vecesQeHeComido++;
        when(vecesQeHeComido){
            1-> println("Desayuno");
            2->println("Almuerzo");
            3->println("Merienda");
            else->println("Gordito");
        }
    }while(vecesQeHeComido<=3);
// WHILE
    var hagoDeber=0;
    var analisis=0;
    var algebra=0;
    var compiladores=0;
    var progra=0;
    var calculo=0;
    var fisica=0;
    var ingles=0;
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
    println("Analisis: $analisis");
    println("Algebra: $algebra");
    println("Compiladores: $compiladores");
    println("Programacion: $progra");
    println("Calculo: $calculo");
    println("Fisica: $fisica");
    println("Ingles: $ingles");
}