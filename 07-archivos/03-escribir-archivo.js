"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function escribitArchivo(path, contenido) {
    fs.writeFileSync(path, contenido, 'utf-8');
}
exports.escribitArchivo = escribitArchivo;
