"use strict";
exports.__esModule = true;
// Create Read Update Delete
var prompts = require("prompts");
function main() {
    obtenerDatosAnimalPerrito();
}
function obtenerDatosAnimalPerrito() {
    // Paradigma de programacion
    // Sincrono vs Asincnrono
    console.log('Inicio');
    var promesaEdad = prompts({
        type: 'number',
        name: 'Edad',
        message: 'Puedes darme tu edad'
    });
    console.log(promesaEdad);
    promesaEdad
        .then(function (datos) {
        console.log('Edad', datos);
        var promesaNombre = prompts({
            type: 'text',
            name: 'Nombre',
            message: 'Puedes darme tu nombre'
        });
        promesaNombre
            .then(function (datos) {
            console.log('Nombre', datos);
        })["catch"](function (error) {
            console.log('Error', error);
        });
    })["catch"](function (error) {
        console.log('Error', error);
    });
    console.log('Fin');
}
main();
