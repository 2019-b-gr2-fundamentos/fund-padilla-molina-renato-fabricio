/*let edad=30;
if(edad>18){
    console.log("No lo vale");
}else{
    console.log("7 años de carcel");
}*/
if (true) { // Bloque 1
    let edad = 30;
    console.log(edad); // 30
    if (edad) { // Bloque 2
        console.log(edad);
        if (edad) { // Bloque 3
            console.log(edad);
        }
        else { // Bloque 4
            console.log(edad);
        }
    }
    else { // Bloque 5
        console.log(edad);
    }
}
else { // Bloque 6
    console.log(edad); // undefined
    console.log("7 años de carcel");
}
