import * as fs from 'fs';

export function escribirArchivo(path:string,contenido: string){
    fs.writeFileSync(
        path,
        contenido,
        'utf-8'
    );
}