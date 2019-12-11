# Arreglo
def main()
    menu(['Naruto','Sasuke','Sakura','Kakashi']);
end
def menu(nombres)
    puts "\n\tNARUTO"
    puts "\nSelecione una opcion\n1. Crear\n2. Actualizar\n3. Eliminar\n4. salir"
    operacion=gets.chomp.to_s;
    esCrea=operacion == 'Crear' || operacion == '1' || operacion == 'crear';
    esActu=operacion == 'Actualizar' || operacion == '2' || operacion == 'actualizar';
    esElim=operacion == 'Eliminar' || operacion == '3' || operacion == 'eliminar';
    salir=operacion== 'Salir' || operacion == '4' || operacion == 'salir';
    esValida=esCrea || esActu || esElim || salir;
    if esValida
        if salir
            puts "\nAdios";
        else
            imprimir(nombres);
            if esCrea
                puts "\nIngrese el indice:";
                indice=gets.chomp.to_i;
                puts "Ingrese el nombre:";
                valor=gets.chomp.to_s;
                resultado=crear(nombres,indice-1,valor.capitalize());
            end
            if esActu
                puts "\nIngrese el indice:";
                indice=gets.chomp.to_i;
                puts "Ingrese el nombre:";
                valor=gets.chomp.to_s;
                resultado=actualizar(nombres,indice-1,valor.capitalize());
            end
            if esElim
                puts "\nIngrese el indice:";
                indice=gets.chomp.to_i;
                resultado=eliminar(nombres,indice-1);
            end
            imprimir(resultado)
        end
        system 'pause';
        system 'cls';
        menu(resultado);
    end
end
def eliminar(nombres,indice)
    arregloNumero = [];
    arregloA = [];
    for contador in(0..indice-1)
        arregloNumero[contador] = nombres[contador];
    end
    for contador in(indice+1..nombres.length-1)
        arregloA[contador] = nombres[contador];
    end
    for contador in(indice..nombres.length-2)
        arregloNumero[contador] = arregloA[contador + 1];
    end
    return arregloNumero;
end
def actualizar(nombres,indice,valor)
    nombres[indice]=valor;
    return nombres;
end
def crear(nombres,indice,valor)
    arregloNumero=[];
    arregloA=[];
    for contador in(0..nombres.length-1)
        arregloNumero[contador]=nombres[contador];
    end
    for contador in(indice..nombres.length-1)
        arregloA[contador]=arregloNumero[contador];
    end
    arregloNumero[indice]=valor;
    for contador in(indice+1..nombres.length)
        arregloNumero[contador]=arregloA[contador-1];
    end
    return arregloNumero;
end
def imprimir(nombres)
    puts "\nLa lista de nombres actual es:";
    for contador in(0..nombres.length-1)
        puts "#{contador+1}. #{nombres[contador]}";
    end
end
main();