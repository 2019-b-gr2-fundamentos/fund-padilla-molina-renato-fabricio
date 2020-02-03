var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Referencias
function main() {
    var uno = 1;
    var dos = uno;
    var tres = dos;
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    uno = 5;
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    var arreglo = [1, 2, 3];
    var otroArreglo = [];
    var a = arreglo[0];
    var b = arreglo[1];
    console.log("Arreglo", arreglo);
    console.log("a", a);
    console.log("b", b);
    //otroArreglo=arreglo; // Refrencia -> Direccion de memoria
    // Asignar a otro arreglo una nueva direccion de memoria
    // 1 -> For llenar un nuevo arreglo
    // 2 -> Filtrar -> Siempre true
    // 3 -> Map -> nuevo arreglo
    // Inmutabilidad
    // Clon del arreglo -> Trabajar en ese
    // JS -> Arreglos u objetos -> Clon
    // Clonado
    otroArreglo = __spreadArrays(arreglo);
    otroArreglo.push(2);
    arreglo[0] = 9;
    arreglo[1] = 10;
    console.log("Arreglo", arreglo);
    console.log("Otro arreglo", otroArreglo);
    var persona = {
        id: 1,
        nombre: 'Renato',
        sueldo: 300
    };
    // Clonado
    var soloNombre = __assign({}, persona);
    console.log('Persona', persona);
    console.log('Solo nombre\n', soloNombre);
    delete persona.nombre; // Elimina un atributo de persona
    console.log('Persona', persona);
    console.log('Solo nombre\n', soloNombre);
    soloNombre['edad'] = 22;
    console.log('Persona', persona);
    console.log('Solo nombre\n', soloNombre);
}
main();
