import {leerArchivo} from "./02-leer-archivo";
import {escribirArchivo} from "./03-escribir-archivo"
import * as prompts from 'prompts';
import { Estudiante } from "./interfaces/estudiantes.interface";

async function main(){
    let contadorI=1;
    const contenidoArchivo=leerArchivo(
        './ejemplo.txt'
    );
    console.log('Contenido del archivo ',contenidoArchivo);
    // PARSEAR  => TEXTO -> Estructura
    /* {
        'nombre': "Renato",
        }
    <universidad>
        <facultad></facultad>
    </universidad> 
    */
   let arregloCargadoArchivo;
   try{
        arregloCargadoArchivo = JSON
        .parse(contenidoArchivo)
   } catch(error){
       arregloCargadoArchivo=[];
       console.error('Error parseando archivo');
   }
   // Operadores
   let minimo=0;
   arregloCargadoArchivo
        .forEach( // No evnia ni recibe nada
            function(valorActual){
                const idActual=valorActual.id;
                if(idActual>minimo){
                    minimo = idActual;
                }
            }
        );
    minimo+=1;
    contadorI=minimo;
   /*try{
       console.log('1');
       console.log('2');
       //Syntax Error
       console.log(5155151515151515151511551515151515151515115515151515151515151155151515151515151511551515151515151515115515151515151515151155151515151515151511551515151515151515115515151515151515151515515151515151515151111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111);
       var a=b;
       throw new ReferenceError("El archivo estamal parseado");
       console.log('4');
   } catch(error){
       console.log(error);
        console.log(':3');
   }*/
    //const arregloCargadoArchivo= JSON.parse(contenidoArchivo);
    const arregloEstudiantes: Estudiante[]=arregloCargadoArchivo;
    const arregloPreguntas = [
        {
            type: 'text',
            name: 'nombre',
            message: 'Ingresa tu nombre'
        },
        {
            type: 'text',
            name: 'aldea',
            message: 'Puedes darme la aldea?',
        }
    ]
    const respuestaEstudiante= await prompts(arregloPreguntas);
    const nuevoRegistro = {
        id: contadorI,
        nombre: respuestaEstudiante.nombre,
        aldea: respuestaEstudiante.aldea
    };
    contadorI++;
    arregloEstudiantes.push(nuevoRegistro);

    const respuestaEstudianteA= await prompts(arregloPreguntas);
    const nuevoRegistroA = {
        id: contadorI,
        nombre: respuestaEstudianteA.nombre,
        aldea: respuestaEstudiante.aldea
    };
    contadorI++;
    arregloEstudiantes.push(nuevoRegistroA);

    console.log('Cual usuario quieres editar');
    console.log(arregloEstudiantes);

    const idBuscar = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingresa el ID del registro a editar'
    })
    const indiceEncontrado = arregloEstudiantes.findIndex(
        function (valorActual,indice,arreglo){
            //console.log(valorActual);
            //console.log(indice);
            //console.log(arreglo);
            return valorActual.id == idBuscar.id;
        })
        console.log('Indice encontrado:', indiceEncontrado)
        const nombreEditar = await prompts({
            type: 'text',
            name: 'nombre',
            message: 'Ingresa el nuevo nombre'
        });
        arregloEstudiantes[indiceEncontrado].nombre = nombreEditar.nombre;
        console.log(arregloEstudiantes);

        const buscar = await prompts({
            type: 'text',
            name: 'nombre',
            message: 'Buscar por ID o por Nombre'
        })

        const estudianteEncontrado = arregloEstudiantes.find(
            function(valorActual){
                return valorActual.nombre == buscar.nombre;
            }
        );
        console.log(estudianteEncontrado);

        const arregloTexto = JSON.stringify(arregloEstudiantes);
        console.log(arregloTexto);
        escribirArchivo('./ejemplo.txt',arregloTexto);
    )
    /*
    const nuevoContenido='\nQue tal estais';
    escribitArchivo('./ejemplo.txt',nuevoContenido);
    const textoLeido = leerArchivo('./ejemplo.txt');
    console.log(textoLeido);
    */
}
main().then().catch();