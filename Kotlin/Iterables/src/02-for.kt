import java.util.Arrays
fun main(args: Array<String>){
    for(numeroExDeMiCrush in 0..5){
        println("ES CAN DA LO! $numeroExDeMiCrush");
    }
    for(numeroExDeMiCrush in 6 downTo 1){
        println("ES CAN DA LO! $numeroExDeMiCrush");
    }
// ARREGLOS
    val arregloNumeros=arrayOf(1,2,3,4,5)
    println(Arrays.toString (arregloNumeros));
    arregloNumeros.set(0,8)
    println(Arrays.toString (arregloNumeros));
    for ((posicion, valor) in arregloNumeros.withIndex()) {
        println("La posición $posicion contiene el valor $valor")
    }
}