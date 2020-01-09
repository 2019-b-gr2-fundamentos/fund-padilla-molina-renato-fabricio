module.exports = function(){
    let matriz=[
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    for (let contadorI=0; contadorI < 3; contadorI++){
        for (let contadorJ=0; contadorJ < 3; contadorJ++) {
            console.log( "Ingrse los elentos de la matriz");
            console.log(`Fila: ${contadorI+1}`);
            console.log(`Columna ${contadorJ+1}`);
            var datoString = prompt(":");
            var dato = Number(datoString);
            matriz[contadorI][contadorJ]=dato;
        }
    }
    cofA=matriz[1][1]*matriz[2][2]-matriz[2][1]*matriz[1][2];
    cofB=matriz[1][0]*matriz[2][2]-matriz[2][0]*matriz[1][2];
    cofC=matriz[1][0]*matriz[2][1]-matriz[2][0]*matriz[1][1];
    det=cofA*matriz[0][0]-cofB*matriz[0][1]+cofC*matriz[0][2];
    return det;
}