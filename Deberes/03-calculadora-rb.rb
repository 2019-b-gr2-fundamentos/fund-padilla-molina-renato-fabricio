# Calculadora basica
# Elgija una opcion y sigua el proceso
puts "\tCalculadora\nIngrese la opcion que desea";
puts "1. Suma\n2. Resta\n3. Multiplicacion\n4. Division\n5. Desplazamiento\n0. Salir";
opcion=gets.chomp;
opcionString=opcion.to_i;
if opcionString !=0
    if opcionString==1||opcionString==2||opcionString==3||opcionString==4||opcionString==5
        if opcionString==1
             puts "Ingrese primer operador";
             operadorUnoString=gets.chomp;
             puts "Ingrese segundo operador";
             operadorDosString=gets.chomp;
             operadorUno=operadorUnoString.to_f;
             operadorDos=operadorDosString.to_f;
             puts "El resutaldo es: #{operadorUno+operadorDos}";
        end
        if opcionString==2
            puts "Ingrese primer operador";
            operadorUnoString=gets.chomp;
            puts "Ingrese segundo operador";
            operadorDosString=gets.chomp;
            operadorUno=operadorUnoString.to_f;
            operadorDos=operadorDosString.to_f;
            puts "El resutaldo es: #{operadorUno-operadorDos}";
        end
        if opcionString==3
            puts "Ingrese primer operador";
            operadorUnoString=gets.chomp;
            puts "Ingrese segundo operador";
            operadorDosString=gets.chomp;
            operadorUno=operadorUnoString.to_f;
            operadorDos=operadorDosString.to_f;
            puts "El resutaldo es: #{operadorUno*operadorDos}";
        end
        if opcionString==4
            puts "Ingrese primer operador";
            operadorUnoString=gets.chomp;
            puts "Ingrese segundo operador";
            operadorDosString=gets.chomp;
            operadorDos=operadorDosString.to_f;
            if operadorDos !=0
                operadorUno=operadorUnoString.to_f;
                puts "El resutaldo es: #{operadorUno/operadorDos}";
            else 
                puts "No es posible dividir para 0"; 
            end  
        end
        if opcionString==5 
            puts "1. Velocidad en coordenadas rectangulares\n2. Rapidez y angulo";
             opcionDos=gets.chomp;
             opcionDosString=opcionDos.to_f;
            if opcionDosString==1 
                puts "Velocidad en X";
                velocidadXString=gets.chomp;
                puts "Velocidad en Y";
                velocidadYString=gets.chomp;
                 velocidadX=velocidadXString.to_f;
                 velocidadY=velocidadYString.to_f;
                 tiempo=2*(velocidadY/9.81);
                 desplazamiento=velocidadX*tiempo;
                 puts "El desplazamiento es:#{desplazamiento} m";
            end
            if opcionDosString==2
                puts"Rapidez";
                rapidezString=gets.chomp;
                puts "Angulo en grados";
                anguloString=gets.chomp;
                 rapidez=rapidezString.to_f;
                 angulo=anguloString.to_f;
                 anguloUno=(angulo*Math::PI)/90;
                 desplazamiento=((rapidez**2)*(Math.sin(anguloUno)))/9.81;
                 puts "El desplazamiento es:#{desplazamiento} m";
            end
        end
    else  
        puts "Opcion incorecta";    
    end
end
gets();