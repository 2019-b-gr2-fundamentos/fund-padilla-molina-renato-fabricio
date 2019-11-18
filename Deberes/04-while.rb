# While

hagoDeber=0;
analisis=0;
algebra=0;
compiladores=0;
progra=0;
calculo=0;
fisica=0;
ingles=0;

while hagoDeber<1000 
    if hagoDeber%13==0 
        ingles++
    else
        if hagoDeber%11==0
            fisica++
         else
            if hagoDeber%7==0
                calculo++
             else
                if hagoDeber%5==0
                    progra++
                 else
                    if hagoDeber%3==0
                        compiladores++
                     else
                        if hagoDeber%2==0
                            algebra++
                         else 
                            if hagoDeber%1==0
                                analisis++
                            end
                        end
                    end
                end
            end
        end
    end
    hagoDeber++
end
puts"Analisis: #{analisis}";
puts"Algebra: #{algebra}";
puts"Compiladores: #{compiladores}";
puts"Programacion: #{progra}";
puts"Calculo: #{calculo}";
puts"Fisica: #{fisica}";
puts"Ingles: #{ingles}";