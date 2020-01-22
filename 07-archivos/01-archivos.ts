import {leerArchivo} from "./02-leer-archivo";
import {escribitArchivo} from "./03-escribir-archivo"
function main(){
    
    const nuevoContenido='\nQue tal estais';
    escribitArchivo('./ejemplo.txt',nuevoContenido);
    const textoLeido = leerArchivo('./ejemplo.txt');
    console.log(textoLeido);
}
main();