// 04 Condicionales
var casado = true;
if (casado == true) {
    console.log("Si estoy casado");
}
else {
    console.log("No estoy casado");
}
if (casado == false) {
    console.log("No estoy casado");
}
else {
    console.log("Si estoy casado");
}
var tengoMosa = false;
var casadoYMosero = casado == true && tengoMosa == true;
if (casadoYMosero) {
    console.log("Casado y mosero");
}
else {
    console.log("O casado o Mosero o Nada");
}
