import * as fs from 'fs';

export function escribitArchivo(path:string,contenido: string){
    fs.writeFileSync(
        path,
        contenido,
        'utf-8'
    );
}