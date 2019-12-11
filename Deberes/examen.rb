# Calculadora 
# Elgija una opcion y sigua el proceso
def main()
        calculadora();
end
def sumar(numeroUno,numeroDos)
    return numeroUno + numeroDos;
end
def restar(numeroUno,numeroDos)
    return numeroUno - numeroDos;
end
def multiplicar(numeroUno,numeroDos)
    return numeroUno * numeroDos;
end
def dividir(numeroUno,numeroDos)
    return numeroUno / numeroDos;
end
def desplazamiento()
    puts "\n1. Velocidad en coordenadas rectangulares\n2. Rapidez y angulo";
    opcion=gets.chomp.to_i;
   if opcion == 1 
       puts "\nVelocidad en X:";
       velocidadX=gets.chomp.to_f;
       puts "Velocidad en Y:";
       velocidadY=gets.chomp.to_f;
        tiempo=2*(velocidadY/9.81);
        desplazamiento=velocidadX*tiempo;
        puts "\nEl desplazamiento es: %.2f m" % [desplazamiento];
   end
   if opcion == 2
       puts"\nRapidez:";
       rapidez=gets.chomp.to_f;
       puts "Angulo en grados:";
       angulo=gets.chomp.to_f;
        angulo=(angulo*Math::PI)/90;
        desplazamiento=((rapidez**2)*(Math.sin(angulo)))/9.81;
        puts "\nEl desplazamiento es: %.2f m" % [desplazamiento];
   end
end
def datos(indiceA,indiceB)
    puts "Ingrse:";
    puts "Fila #{indiceA+1} Columna #{indiceB+1}"
    opcion=gets.chomp.to_i;
    return opcion;
end
def determinante()
    matrizA=[
        [0,0],
        [0,0]
    ];
    matrizB=[
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    puts "\nEscoja el orden de la matriz\n1. Matriz 2x2\n2. Matriz 3x3";
    opcion=gets.chomp.to_i;
    if opcion == 1
        for contadorI in(0..1)
            for contadorJ in(0..1)
                matrizA[contadorI][contadorJ]=datos(contadorI,contadorJ);
            end
        end
        det=matrizA[0][0]*matrizA[1][1]-matrizA[1][0]*matrizA[0][1];
    end
    if opcion == 2
        for contadorI in(0..2)
            for contadorJ in(0..2)
                matrizB[contadorI][contadorJ]=datos(contadorI,contadorJ);
            end
        end
        cofA=matrizB[1][1]*matrizB[2][2]-matrizB[2][1]*matrizB[1][2];
        cofB=matrizB[1][0]*matrizB[2][2]-matrizB[2][0]*matrizB[1][2];
        cofC=matrizB[1][0]*matrizB[2][1]-matrizB[2][0]*matrizB[1][1];
        det=cofA*matrizB[0][0]-cofB*matrizB[0][1]+cofC*matrizB[0][2];
    end
    return det;
end
def angulo()
    puts "\nAngulo en:\n1. Grados\n2. Radianes"
    opcion=gets.chomp.to_i;
    puts "\nIngrese el argumento:"
    if opcion == 2
        angulo=gets.chomp.to_i;
    end
    if opcion == 1
        angulo=gets.chomp.to_i;
        angulo=(angulo*Math::PI)/180;
    end
    return angulo;
end
def trigonometira()
    puts "\nEscoja la funcion trigonometrica que desea";
    puts "\n1. Seno\n2. Coseno\n3. Tangente\n"
    opcion=gets.chomp.to_i;
    angulo=angulo();
    if opcion == 1
        angulo=Math.sin(angulo);
    end
    if opcion == 2
        angulo=Math.cos(angulo);
    end
    if opcion == 3
        angulo=Math.tan(angulo);
    end
    return angulo;
end
def exponencial()
    puts "\nEscoja una operacion:\n1. Logaritmo\n2. Exponencial";
    opcion=gets.chomp.to_i;
    puts "\nIngrese el argumento:"
    argumento=gets.chomp.to_f;
    if opcion == 1
        angulo=Math.log10(argumento);
    end
    if opcion == 2
        angulo=Math.exp(argumento);
    end
    return angulo;
end
def potencia()
    puts "\nEscoja una operacion:\n1. Raiz\n2. Potencia";
    opcion=gets.chomp.to_i;
    puts "\nIngrese la base:";
    argumento=gets.chomp.to_f;
    if opcion == 1
        puts "\nIngrese la raiz:"
        angulo=gets.chomp.to_f;
        angulo=1/angulo;
    end
    if opcion == 2
        puts "\nIngrese el exponente:"
        angulo=gets.chomp.to_i;
    end
    argumento=argumento**angulo;
    return argumento;
end
def factorial(contadorJ)
    angulo=1;
    for contadorI in(2..contadorJ)
        angulo*=contadorI
    end
    return angulo;
end
def calculadora()
    puts "\n\tCalculadora\nIngrese la opcion que desea";
    puts "\n1.  Suma\n2.  Resta\n3.  Multiplicacion\n4.  Division\n5.  Desplazamiento\n6.  Determinante\n7.  Trigonometria\n8.  Exponencial\n9.  Potencia\n10. Factorial\n0.  Salir";
    operacion=gets.chomp.to_s;
    esSuma=operacion == 'Suma' || operacion == '1' || operacion == 'suma';
    esResta=operacion == 'Resta' || operacion == '2' || operacion == 'resta';
    esMulti=operacion == 'Multiplicacion' || operacion == '3' || operacion == 'multiplicacion';
    esDivi=operacion == 'Division' || operacion == '4' || operacion == 'dividision';
    esDesp=operacion == 'Desplazamiento' || operacion == '5' || operacion == 'desplazamiento';
    esDet=operacion == 'Determinante' || operacion == '6' || operacion == 'determinante';
    esTri=operacion == 'Trigonometria' || operacion == '7' || operacion == 'trigonometria';
    esExp=operacion == 'Exponencial' || operacion == '8' || operacion == 'exponencial';
    esPot=operacion == 'Potencia' || operacion == '9' || operacion == 'potencia';
    esFac=operacion == 'Factorial' || operacion == '10' || operacion == 'factorial';
    salir=operacion== 'Salir' || operacion == '0' || operacion == 'salir';
    esValida=esSuma || esFac || esPot || esExp || esResta || esMulti || esDivi || salir || esDesp || esDet || esTri;
    if esValida
        if salir
            puts "\nAdios";
        else
            if esDesp
                desplazamiento();
            else
                if esDet
                    resultado=determinante();
                else
                    if esTri
                        resultado=trigonometira();
                    else
                        if esExp
                            resultado=exponencial();
                        else
                            if esPot
                                resultado=potencia();
                            else
                                if esFac
                                    puts "\nIngrese el numero";
                                    numeroUno=gets.chomp.to_i;
                                    resultado=factorial(numeroUno);
                                else
                                    puts "\nNumero 1";
                                    numeroUno=gets.chomp.to_f;
                                    puts "Numero 2";
                                    numeroDos=gets.chomp.to_f;
                                    if esSuma
                                        resultado=sumar(numeroUno,numeroDos);
                                    end 
                                    if esResta
                                        resultado=restar(numeroUno,numeroDos);
                                    end 
                                    if esMulti
                                        resultado=multiplicar(numeroUno,numeroDos);
                                    end 
                                    if esDivi
                                        resultado=dividir(numeroUno,numeroDos);
                                    end
                                end 
                            end
                        end
                    end
                end     
                puts "\nEl resultado es: %.2f\n" % [resultado];
            end
        end 
        system 'pause';
        system 'cls';
        calculadora();
    end
end
main();