# DO WHILE
vecesQeHeComido=0;
begin
    puts"Vamos a comer";
    vecesQeHeComido=vecesQeHeComido+1;
    case vecesQeHeComido
    when 1
        puts"Desayuno";
    when 2
        puts"Almuerzo";
    when 3
        puts"Merienda";
    else
        puts"Gordito";
    end
end while vecesQeHeComido < 4;
# WHILE
hagoDeber=0;
analisis=0;
algebra=0;
compiladores=0;
progra=0;
calculo=0;
fisica=0;
ingles=0;

while hagoDeber < 1000 
    if hagoDeber % 13 == 0 
        ingles=ingles+1;
    else
        if hagoDeber % 11 == 0
            fisica=fisica+1;
         else
            if hagoDeber % 7 == 0
                calculo=calculo+1;
             else
                if hagoDeber % 5 == 0
                    progra=progra+1;
                 else
                    if hagoDeber % 3 == 0
                        compiladores=compiladores+1;
                     else
                        if hagoDeber % 2 == 0
                            algebra=algebra+1;
                         else 
                            if hagoDeber % 1 == 0
                                analisis=analisis+1;
                            end
                        end
                    end
                end
            end
        end
    end
    hagoDeber=hagoDeber+1;
end
puts"Analisis: #{analisis}";
puts"Algebra: #{algebra}";
puts"Compiladores: #{compiladores}";
puts"Programacion: #{progra}";
puts"Calculo: #{calculo}";
puts"Fisica: #{fisica}";
puts"Ingles: #{ingles}"; 