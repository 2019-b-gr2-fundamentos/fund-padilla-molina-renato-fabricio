=begin
hagoDeber=0;
analisis=0;
algebra=0;
compiladores=0;

rescue => exception
    
end
while hagoDeber < 50
    if hagoDeber % 3 == 0
        compiladores=compiladores+1;
    else
        if hagoDeber % 2 == 0
            algebra=algebra+1;
        else 
            if hagoDeber % 2 != 0 
                analisis=analisis+1;
            end
        end
    end
    hagoDeber=hagoDeber+1;
end

puts"Analisis: #{analisis}"
puts"Algebra: #{algebra}"
puts"Compiladores: #{compiladores}"
=end