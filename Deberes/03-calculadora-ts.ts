// Calculadora basica
// Elgija una opcion y sigua el proceso
console.log("\t\tCalculadora\nIngrese la opcion que desea");
console.log("1. Suma\n2. Resta\n3. Multiplicacion\n4. Division\n5. Factorial\n0. Salir");
const opcionString=prompt("Opcion:");
if(opcionString!=0){
    if(opcionString==1||opcionString==2||opcionString==3||opcionString==4){
        if(opcionString==1){
            const operadorUnoString=prompt("Ingrese primer operador");
            const operadorDosString=prompt("Ingrese segundo operador");
            const operadorUno=Number(operadorUnoString);
            const operadorDos=Number(operadorDosString);
            console.log(operadorUno+operadorDos);
        }
        if(opcionString==2){
            const operadorUnoString=prompt("Ingrese primer operador");
            const operadorDosString=prompt("Ingrese segundo operador");
            const operadorUno=Number(operadorUnoString);
            const operadorDos=Number(operadorDosString);
            console.log(operadorUno-operadorDos);
        }
        if(opcionString==3){
            const operadorUnoString=prompt("Ingrese primer operador");
            const operadorDosString=prompt("Ingrese segundo operador");
            const operadorUno=Number(operadorUnoString);
            const operadorDos=Number(operadorDosString);
            console.log(operadorUno*operadorDos);
        }
        if(opcionString==4){
            const operadorUnoString=prompt("Ingrese primer operador");
            const operadorDosString=prompt("Ingrese segundo operador");
            if(operadorDosString!=0){
                const operadorUno=Number(operadorUnoString);
                const operadorDos=Number(operadorDosString);
                console.log(operadorUno/operadorDos);
            }else console.log("No es posible dividir para 0");   
        }
        if(opcionString==5){
            const operadorUnoString=prompt("Ingrese un numero");
            const operadorUno=Number(operadorUnoString);
            console.log(operadorUno);
            let contador;
            let producto;
            console.log(producto);
            for(contador=1;contador<=operadorUno;operador++){
                producto=producto*contador;
            }
            console.log(producto);
        }
    }else  console.log("Opcion incorecta");    
}


