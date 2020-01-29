function main() {
    var arregloEstudiantes = [
        { id: 1, nombre: "Renato", nota: 7 },
        { id: 2, nombre: "Wilson", nota: 5 },
        { id: 3, nombre: "Jomaira", nota: 6 },
        { id: 4, nombre: "Heelen", nota: 3 },
        { id: 5, nombre: "Walter", nota: 4 }
    ];
    // OPERADORES
    // FOREACH
    // Enviamos -> Nada
    // Recibimos -> Nada
    var respuestaForEach = arregloEstudiantes.forEach(function (valorActual, i, arreglo) {
        console.log(valorActual.nota);
        valorActual.nota20 = valorActual.nota * 2;
    });
    console.log('Respuesta ForEach', respuestaForEach);
    // MAP 
    // Transformar el arreglo
    // Enviamos -> valorActual modificado
    // Recibimos -> Nuevo arreglo con valores modificados
    var respuestaMap = arregloEstudiantes.map(function (valorActual, i, arreglo) {
        return {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota20: valorActual.nota * 2
        };
    });
    console.log("Respuesta MAP\n", respuestaMap);
    console.log('Arreglo de estudiantes\n', arregloEstudiantes);
    // FILTER
    // Filtra el arreglo
    // Enviamos ->
    // Recibimos ->
    var respuestaFilter = arregloEstudiantes.filter(function (valorActual, i, arreglo) {
        var condicion7 = valorActual.nota >= 7;
        var condicion5 = valorActual.nota < 5;
        // Condicion es un TRUTY
        return condicion7 || condicion5;
    });
    console.log('Respuesta Filter\n', respuestaFilter);
    // AND -> Every (Todos cumplen)
    // OR -> Some (Uno cumple)
    // Enviamos -> Condicion
    // Recibimos -> Boolean
    var respuestaSome = arregloEstudiantes.some(function (valorActual, i, arreglo) {
        var condicion = valorActual.nota < 2;
        return condicion;
    });
    console.log('Respuesta Some', respuestaSome);
    var respuestaEvery = arregloEstudiantes.every(function (valorActual, i, arreglo) {
        var condicion = valorActual.nota > 5;
        return condicion;
    });
    console.log('Respuesta Every', respuestaEvery);
    // REDUCE -> Devuelve un valor
    // Enviamos -> Calculo
    // Recibimos -> Valor
    var respuestaReduce = arregloEstudiantes.reduce(function (acumulador, valorActual, i, arreglo) {
        var calculo = acumulador + valorActual.nota;
        return calculo;
    }, 0 // Valor inicial del acumulador
    );
    console.log('Respuesta Reduce', respuestaReduce);
    console.log('Promedio', respuestaReduce / arregloEstudiantes.length);
    console.log(arregloEstudiantes);
}
main();
