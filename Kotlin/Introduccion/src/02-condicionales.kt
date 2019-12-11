// 02 Condicionales
fun main(args: Array<String>){
    val casado=false;
    if(casado==true){
        println("Si estoy casado")
    }else{
        println("No estoy casado")
    }
    if(casado==false){
        println("No estoy casado");
    }else{
        println("Si estoy casado");
    }
    val tengoMosa=false;
    val casadoYMosero=casado==true&&tengoMosa==true;
    if(casadoYMosero){
        println("Casado y mosero");
    }else{
        println("O casado o Mosero o Nada");
    }

// Edad
    println("Ingresar edad");
    val edad=readLine()!!.toInt()
    if(edad<=6&&edad>=0){
        println("Guagua");
    }
    if(edad>6&&edad<=18){
        println("Guambra");
    }
    if(edad>18&&edad<=65){
        println("Longo");
    }
    if(edad>65){
        println("Ruku");
    }
}