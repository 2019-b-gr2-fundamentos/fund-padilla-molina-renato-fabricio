import * as prompts from 'prompts';
import {datosNinja} from './interfaces/datos-ninja.interface';

function main(){
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
    añadir(ninjas).then().catch();
}
 async function añadir(array){
    const arregloNumero: datosNinja[]=[];
    const arregloA: datosNinja[]=[];
    const indice=3;
    const valor=[
        {
            type: 'text',
            name: 'nombre',
            message: 'Puedes darme el nombre?',
        },
        {
            type: 'text',
            name: 'aldea',
            message: 'Puedes darme la aldea?',
        },
        {
            type: 'text',
            name: 'clan',
            message: 'Puedes darme el clan?',
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
    
    const respuesta = await prompts(valor);
    const nuevoNinja={
        nombre: respuesta.nombre,
        aldea: respuesta.aldea,
        clan: respuesta.clan,
        kekkei_genkai: respuesta.kekkei_genkai,
        tipo: respuesta.tipo,
    };
    for(let contador=0;contador<array.length;contador++){
        arregloNumero[contador]=array[contador];
    }
    for(let contador=indice;contador<array.length;contador++){
        arregloA[contador]=arregloNumero[contador];
    }
    //arregloNumero[indice].nombre=nuevoNinja.nombre;
    for(let contador=indice+1;contador<array.length+1;contador++){
        arregloNumero[contador]=arregloA[contador-1];
    }
    console.log(array.length);
}
function eliminar(array,indice){
    const arregloNumero=[];
    const arregloA=[];
    for(let contador=0;contador<indice;contador++){
        arregloNumero[contador]=array[contador];
    }
    for(let contador=indice+1;contador<array.length;contador++){
        arregloA[contador]=array[contador];
    }
    for(let contador=indice;contador<array.length-1;contador++){
        arregloNumero[contador]=arregloA[contador+1];
    }
    console.log(arregloNumero);
}
async function leerIndice(){
    const indiceA=[{
        type: 'number',
        name: 'Indice',
        message: 'Puedes darme el indice?'
    },]
    const indiceB= await prompts(indiceA);
    const indice=indiceB;
    return indice;
}
main();