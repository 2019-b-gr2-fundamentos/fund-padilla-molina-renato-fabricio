fun main(args: Array<String>){
    // Floron
    /*
    1.- Declaramos un arreglo y los contadores necesarios
    2.- Creamos un for para asignar los valores al arreglo randomicamente
    3.- Creamos un for para verificar que al menos un elemento del arreglo sea un 1
    4.- Colocamos dentro de un bucle de condicion para corroborara que existe al menos un 1
    5.- Se visaluiza el arreglo en pantalla
    */
    var verificacion=0;
    val jugadores=10;
    val arregloRandom=IntArray(jugadores)
    while(verificacion==0){
        for(contador in 0..jugadores){
            arregloRandom[contador]=(0..10).random()
        }
        for(contador in 0..jugadores){
            if(arregloRandom[contador]==1){
                verificacion+=1;
            }
        }
    }
}
