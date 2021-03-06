"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompts = require("prompts");
var _02_leer_archivo_1 = require("../../07-archivos/02-leer-archivo");
var _03_escribir_archivo_1 = require("../../07-archivos/03-escribir-archivo");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var contadorI, contenidoArchivo, arregloCargadoArchivo, minimo, ninjas, arregloPreguntas, opcion, respuestaNinja, nuevoNinja, ninjaTexto, idBuscar_1, indiceEncontrado, respuestaNinja, ninjaTexto, idBuscar_2, indiceEncontrado, ninjaTexto;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contadorI = 1;
                    contenidoArchivo = _02_leer_archivo_1.leerArchivo('./lista.txt');
                    console.log('Contenido del archivo ', contenidoArchivo);
                    try {
                        arregloCargadoArchivo = JSON
                            .parse(contenidoArchivo);
                    }
                    catch (error) {
                        arregloCargadoArchivo = [];
                        console.error('Error parseando archivo');
                    }
                    minimo = 0;
                    arregloCargadoArchivo
                        .forEach(function (valorActual) {
                        var idActual = valorActual.id;
                        if (idActual > minimo) {
                            minimo = idActual;
                        }
                    });
                    minimo += 1;
                    contadorI = minimo;
                    ninjas = arregloCargadoArchivo;
                    arregloPreguntas = [
                        {
                            type: 'text',
                            name: 'nombre',
                            message: 'Puedes darme el nombre?',
                        },
                        {
                            type: 'text',
                            name: 'clan',
                            message: 'Puedes darme la clan?',
                        },
                        {
                            type: 'text',
                            name: 'aldea',
                            message: 'Puedes darme el aldea?',
                        },
                        {
                            type: 'text',
                            name: 'kekkei_genkai',
                            message: 'Posee Kekkei Genkai?',
                        },
                        {
                            type: 'text',
                            name: 'tipo',
                            message: 'De que tipo es?'
                        }
                    ];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'op',
                            message: '\n1.- Crear\n2.- Actualizar\n3.- Borrar\n4.- Salir\nEscoge una opcion'
                        })];
                case 1:
                    opcion = _a.sent();
                    if (!(opcion.op == '1')) return [3 /*break*/, 3];
                    return [4 /*yield*/, prompts(arregloPreguntas)];
                case 2:
                    respuestaNinja = _a.sent();
                    nuevoNinja = {
                        id: contadorI,
                        nombre: respuestaNinja.nombre,
                        clan: respuestaNinja.clan,
                        aldea: respuestaNinja.aldea,
                        kekkei_genkai: respuestaNinja.kekkei_genkai,
                        tipo: respuestaNinja.tipo,
                    };
                    contadorI++;
                    ninjas.push(nuevoNinja);
                    ninjaTexto = JSON.stringify(ninjas);
                    _03_escribir_archivo_1.escribirArchivo('./lista.txt', ninjaTexto);
                    console.log(ninjas);
                    _a.label = 3;
                case 3:
                    ;
                    if (!(opcion.op == '2')) return [3 /*break*/, 6];
                    console.log('Cual usuario quieres editar');
                    console.log(ninjas);
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'id',
                            message: 'Ingresa el ID del registro a editar'
                        })];
                case 4:
                    idBuscar_1 = _a.sent();
                    indiceEncontrado = ninjas.findIndex(function (valorActual) {
                        return valorActual.id == idBuscar_1.id;
                    });
                    return [4 /*yield*/, prompts(arregloPreguntas)];
                case 5:
                    respuestaNinja = _a.sent();
                    ninjas[indiceEncontrado].nombre = respuestaNinja.nombre;
                    ninjas[indiceEncontrado].clan = respuestaNinja.clan;
                    ninjas[indiceEncontrado].aldea = respuestaNinja.aldea;
                    ninjas[indiceEncontrado].kekkei_genkai = respuestaNinja.kekkei_genkai;
                    ninjas[indiceEncontrado].tipo = respuestaNinja.tipo;
                    ninjaTexto = JSON.stringify(ninjas);
                    _03_escribir_archivo_1.escribirArchivo('./lista.txt', ninjaTexto);
                    console.log(ninjas);
                    _a.label = 6;
                case 6:
                    ;
                    if (!(opcion.op == '3')) return [3 /*break*/, 8];
                    console.log('Cual usuario quieres borrar');
                    console.log(ninjas);
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'id',
                            message: 'Ingresa el ID del registro a borrar'
                        })];
                case 7:
                    idBuscar_2 = _a.sent();
                    indiceEncontrado = ninjas.findIndex(function (valorActual) {
                        return valorActual.id == idBuscar_2.id;
                    });
                    ninjas.splice(indiceEncontrado, 1);
                    ninjaTexto = JSON.stringify(ninjas);
                    _03_escribir_archivo_1.escribirArchivo('./lista.txt', ninjaTexto);
                    console.log(ninjas);
                    _a.label = 8;
                case 8:
                    ;
                    if (opcion.op == '4') {
                        console.log('Adios');
                    }
                    else {
                        main().then().catch();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function escribir() {
    var ninjas = [];
    ninjas[0] = {
        id: 1,
        nombre: 'Naruto',
        clan: 'Uzumaki',
        aldea: 'Konoha',
        kekkei_genkai: 'no',
        tipo: 'No',
    };
    ninjas[1] = {
        id: 2,
        nombre: 'Gaara',
        clan: 'Kazekage',
        aldea: 'Suna',
        kekkei_genkai: 'si',
        tipo: 'Iman',
    };
    ninjas[2] = {
        id: 3,
        nombre: 'Haku',
        clan: 'Desconocido',
        aldea: 'Kiri',
        kekkei_genkai: 'si',
        tipo: 'Hyoton',
    };
    var ninjaTexto = JSON.stringify(ninjas);
    _03_escribir_archivo_1.escribirArchivo('./lista.txt', ninjaTexto);
}
main().then().catch();
