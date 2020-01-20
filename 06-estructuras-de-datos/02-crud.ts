// Create Read Update Delete
import * as prompts from 'prompts';
import { RespuestaEdad } from './interfaces/respuesta-edad.interface';
import { RespuestaNombre } from './interfaces/respuesta-nombre.interface';

function main(){
    // npm uninstall -g tsc -> WINDOWS
    // npm uninstall -g typescript -> WINDOWS
    // npm install -g typescript -> WINDOWS
    // sudo npm uninstall -g tsc -> LINUX O MAC
    // sudo npm install -g typescript -> LINUX O MAC

    // obtenerDatosAnimalPerrito(); // Asincrona
    obtenerDatosAnimalPerritoSincrono()
    .then()
    .catch(); // -> PROMESA // Sincrona
}

async function obtenerDatosAnimalPerritoSincrono(){
    console.log('Inicio');
    const preguntas = [
        {
            type: 'number',
            name: 'Edad',
            message: 'Puedes darme tu edad?'
        },
        {
            type: 'text',
            name: 'Nombre',
            message: 'Puedes darme tu nombre?'
        },
        {
            type: 'text',
            name: 'Cedula',
            message: 'Puedes darme tu cedula?'
        }
    ]
    const respuestaEdad = await prompts(preguntas);
    console.log('Respuesta', respuestaEdad);
    console.log('Fin');
}

function obtenerDatosAnimalPerrito(){
    // Paradigma de programacion
    // SINCRONO vs ASINCRONO
    console.log('Inicio');
    const promesaEdad = prompts({ // PROMESA
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
      });
    console.log(promesaEdad);
    promesaEdad
        .then( // OK
          (datos)=>{
              console.log('datos',datos); // AQUI PUEDO SEGUIR
              ////
                const promesaNombre = prompts({ // PROMESA
                    type: 'text',
                    name: 'nombre',
                    message: 'Puedes darme tu nombre?'
                });
                promesaNombre
                    .then( // OK
                        (datosNombre)=>{
                            console.log('Nombre', datosNombre); // AQUI PUEDO SEGUIR
                        }
                    )
                    .catch( // =( 
                        (error)=>{
                            console.log('Error',error);
                        }
                    );
              ///
          }
        )
        .catch( // =( 
            (error)=>{
                console.log('Error',error);
            }
        );
    
    console.log('Fin');
}
main();