module.exports = function(valor){
    factorial=1;
    for (let contadorI=2;contadorI<=valor;contadorI++){
        factorial*=contadorI
    }
    return factorial;
}