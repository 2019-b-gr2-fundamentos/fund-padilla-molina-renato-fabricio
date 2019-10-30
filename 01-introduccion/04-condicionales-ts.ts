// 04 Condicionales
const casado=true;
if(casado==true){
    console.log("Si estoy casado");
}else{
    console.log("No estoy casado");
}

if(casado==false){
    console.log("No estoy casado");
}else{
    console.log("Si estoy casado");
}

const tengoMosa=false;
const casadoYMosero=casado==true&&tengoMosa==true;
if(casadoYMosero){
    console.log("Casado y mosero");
}else{
    console.log("O casado o Mosero o Nada");
}

// AND && -- Ampersand
// OR || -- PIPES

// bolita ylloro hasta la segunda
// alarma y me levanto
// celularDescargado==true
// celularDañado==true
// amaneceMuerto==true
// estaActivadaLaAlarma!=true
// estaEnModoSilencio==true
// const seAtrasoAClase=celularDescargado==true||celularDañado==true||amaneceMuerto==true||estaActivadaLaAlarma!=true||estaEnModoSilencio==true
// Si el selular esta descargado o esta dañado o amanesco muerto o no esta activada la alarma o esta en modo silencio
//if(seAtrasoAClase){
//    console.log("Cero en asistencia");
//}else{
//    console.log("Toddo bien");
//}


// TRUTY
const nombreVacio="";
if(""){
    console.log("Truty");
}else {
    console.log("Falsy");
}// FALSY
const calculo="Sumar";// operaciones
switch(calculo){
    case "Sumar":
        // code
        break;
    case "Restar":
        // code
        break;
    case "Multiplicar":
            // code
            break;
    case "Dividir":
        // code
        break;
}
// 6 guagua
// 18 guambra
// 65 longo
// 66 ruku
const edadString=prompt("Ingresar edad");
const edad=Number(edadString);
if(edad<=6&&edad>=0){
    console.log("Guagua");
}
if(edad>6&&edad<=18){
    console.log("Guambra");
}
if(edad>18&&edad<=65){
    console.log("Longo");
}
if(edad>65){
    console.log("Ruku");
}
