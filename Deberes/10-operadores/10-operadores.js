"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filter_1 = require("./filter");
var every_1 = require("./every");
var some_1 = require("./some");
var forEach_1 = require("./forEach");
var reduce_1 = require("./reduce");
function main() {
    var arregloEstudiantes = [
        { id: 1, nombre: "Wilson", nota: 7 },
        { id: 2, nombre: "Renato", nota: 6 },
        { id: 3, nombre: "Heelen", nota: 4 },
        { id: 4, nombre: "Jomaira", nota: 9 },
        { id: 5, nombre: "Fabricio", nota: 9 }
    ];
    //operadro -> forEach
    //enviamos -> nada
    //recivimos -> nada
    ////////////////////////////////////////////////////////////////
    var respuestaForEach = arregloEstudiantes.forEach(function (valorActual, indice, arreglo) {
        console.log(valorActual.nota = valorActual.nota * 2);
        // valorActual.nota20 = valorActual.nota*2
    });
    console.log("\nForEach\n", respuestaForEach);
    console.log("\nArreglo estudiantes\n", arregloEstudiantes);
    //map -> transforma el arreglo (mutar el arr)
    //enviamos -> valorActual
    //recibimos nuevo arr con valores modificados
    ////////////////////////////////////////////////////////////////
    var respuestaMap = arregloEstudiantes.map(function (valorActual, indice, arreglo) {
        var nuevoObjeto = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota: valorActual.nota,
            nota20: valorActual.nota * 2
        };
        return nuevoObjeto;
    });
    console.log("\nMap\n", respuestaMap);
    /////////////////////////////////////////////////////////////////////
    var respuestaFilter = arregloEstudiantes.filter(function (valorActual) {
        var busqueda = !valorActual.nombre.search("Heelen");
        return busqueda;
    });
    console.log("\nFilter: Buscar Heelen\n", respuestaFilter);
    ////////////////////////////////////////////////////////////////////////
    var respuestaSome = arregloEstudiantes.some(function (valorActual) {
        var condicion = valorActual.nota < 7;
        return condicion;
    });
    console.log("\nSome: Notas menores a 7\n", respuestaSome);
    ////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    var respuestaEvery = arregloEstudiantes.every(function (valorActual) {
        var condicion = valorActual.nota < 7;
        return condicion;
    });
    console.log("\nEvery: Notas menores a 7\n", respuestaEvery);
    ////////////////////////////////////////////////////////////////////
    /*
    reduce -> devuelve un valor con el calculo aplicado
    enviamos -> calculo
    devuelve -> valor
    */
    var respuestaReduce = arregloEstudiantes.reduce(function (acumulador, valorActual) {
        var calculo = acumulador + valorActual.nota;
        return calculo;
    }, 0);
    console.log("\nReduce: Sumatoria de notas\n", respuestaReduce);
    console.log("Arreglo iterado\n");
    var respuestaFilterNuestro = filter_1.filter(arregloEstudiantes, function (valorActual, i, arr) {
        console.log(i);
        console.log("\n", valorActual);
        //console.log(arr);
        return valorActual.nota > 14;
    });
    console.log("\nFilter: Notas mayores e iguales a 14\n", respuestaFilterNuestro);
    var respuestaEveryNuestro = every_1.every(arregloEstudiantes, function (valorActual, i, arr) {
        //console.log(valorActual);
        //console.log(i);
        //console.log(arr);
        return valorActual.nota > 5;
    });
    console.log("\nEvery: Notas mayores a 5\n", respuestaEveryNuestro);
    var respuestaSomeNuestro = some_1.some(arregloEstudiantes, function (valorActual, i, arr) {
        //console.log(valorActual);
        //console.log(i);
        //console.log(arr);
        return valorActual.nota > 10;
    });
    console.log("\nSome: Notas mayores a 10\n", respuestaSomeNuestro);
    console.log("\nNotas por 2\n");
    forEach_1.forEach(arregloEstudiantes, function (valorActual, indice, arreglo) {
        console.log(valorActual.nota = valorActual.nota * 2);
    });
    console.log("\nArreglo estudiantes\n", arregloEstudiantes);
    var resp = reduce_1.reduce(arregloEstudiantes, function (acumulador, valorActual) {
        var calculo = acumulador + valorActual.nota;
        return calculo;
    }, 0);
    console.log("\nReduce\n", resp);
}
main();
