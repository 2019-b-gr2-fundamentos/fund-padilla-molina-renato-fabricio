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
