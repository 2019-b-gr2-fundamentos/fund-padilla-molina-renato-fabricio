import * as prompts from 'prompts';
import { leerArchivo } from '../../07-archivos/02-leer-archivo';
import { escribirArchivo } from '../../07-archivos/03-escribir-archivo';
import {datosNinja} from './interfaces/datos-ninja.interface';



async function main(){
    //escribir();
    let contadorI=1;
    const contenidoArchivo=leerArchivo(
        './lista.txt'
    );
    console.log('Contenido del archivo ',contenidoArchivo);
    let arregloCargadoArchivo;
    try{
        arregloCargadoArchivo = JSON
        .parse(contenidoArchivo)
    } catch(error){
       arregloCargadoArchivo=[];
       console.error('Error parseando archivo');
    }
    let minimo=0;
   arregloCargadoArchivo
        .forEach(
            function(valorActual){
                const idActual=valorActual.id;
                if(idActual>minimo){
                    minimo = idActual;
                }
            }
        );
    minimo+=1;
    contadorI=minimo;
    const ninjas: datosNinja[]=arregloCargadoArchivo;
    const arregloPreguntas = [
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
    ]
    const opcion = await prompts({
        type: 'text',
        name: 'op',
        message: '\n1.- Crear\n2.- Actualizar\n3.- Borrar\n4.- Salir\nEscoge una opcion'
    })
    if(opcion.op=='1'){
        const respuestaNinja= await prompts(arregloPreguntas);
        const nuevoNinja = {
            id: contadorI,
            nombre: respuestaNinja.nombre,
            clan: respuestaNinja.clan,
            aldea: respuestaNinja.aldea,
            kekkei_genkai: respuestaNinja.kekkei_genkai,
            tipo: respuestaNinja.tipo,
        };
        contadorI++;
        ninjas.push(nuevoNinja);
        const ninjaTexto = JSON.stringify(ninjas);
        escribirArchivo('./lista.txt',ninjaTexto);
        console.log(ninjas);
    };
    if(opcion.op=='2'){
        console.log('Cual usuario quieres editar');
        console.log(ninjas);
        const idBuscar = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingresa el ID del registro a editar'
        });
        const indiceEncontrado = ninjas.findIndex(
            function (valorActual){
                return valorActual.id == idBuscar.id;
            })
        const respuestaNinja= await prompts(arregloPreguntas);
        ninjas[indiceEncontrado].nombre=respuestaNinja.nombre;
        ninjas[indiceEncontrado].clan=respuestaNinja.clan;
        ninjas[indiceEncontrado].aldea=respuestaNinja.aldea;
        ninjas[indiceEncontrado].kekkei_genkai=respuestaNinja.kekkei_genkai;
        ninjas[indiceEncontrado].tipo=respuestaNinja.tipo;
        const ninjaTexto = JSON.stringify(ninjas);
        escribirArchivo('./lista.txt',ninjaTexto);
        console.log(ninjas);
    };
    if(opcion.op=='3'){
        console.log('Cual usuario quieres borrar');
        console.log(ninjas);
        const idBuscar = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingresa el ID del registro a borrar'
        });
        const indiceEncontrado = ninjas.findIndex(
            function (valorActual){
                return valorActual.id == idBuscar.id;
            });
        ninjas.splice(indiceEncontrado);
        const ninjaTexto = JSON.stringify(ninjas);
        escribirArchivo('./lista.txt',ninjaTexto);
        console.log(ninjas);
    };
    if(opcion.op=='4'){
        console.log('Adios');
    } else{
        main().then().catch();
    }
}
function escribir(){
    const ninjas: datosNinja[]=[];
    ninjas[0]={
        id: 1,
        nombre: 'Naruto',
        clan: 'Uzumaki',
        aldea: 'Konoha',
        kekkei_genkai: 'no',
        tipo: 'No',
    }
    ninjas[1]={
        id: 2,
        nombre: 'Gaara',
        clan: 'Kazekage',
        aldea: 'Suna',
        kekkei_genkai: 'si',
        tipo: 'Iman',
    }
    ninjas[2]={
        id: 3,
        nombre: 'Haku',
        clan: 'Desconocido',
        aldea: 'Kiri',
        kekkei_genkai: 'si',
        tipo: 'Hyoton',
    }
    const ninjaTexto = JSON.stringify(ninjas);
    escribirArchivo('./lista.txt',ninjaTexto);
}

main().then().catch();