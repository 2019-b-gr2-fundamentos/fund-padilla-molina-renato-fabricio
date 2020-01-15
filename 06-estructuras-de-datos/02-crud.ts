// Create Read Update Delete
import * as prompts from 'prompts';
function main(){
    obtenerDatosAnimalPerrito();
}

function obtenerDatosAnimalPerrito(){

    // Paradigma de programacion

    // Sincrono vs Asincnrono

    console.log('Inicio');
    const promesaEdad = prompts ({
        type: 'number',
        name: 'Edad',
        message: 'Puedes darme tu edad'
    })
    console.log(promesaEdad);
    promesaEdad
        .then(
            (datos)=>{
                console.log('Edad',datos);
                const promesaNombre = prompts ({
                    type: 'text',
                    name: 'Nombre',
                    message: 'Puedes darme tu nombre'
                })
                promesaNombre
                .then(
                    (datos)=>{
                        console.log('Nombre',datos);
                    })
                .catch(
                    (error)=>{
                        console.log('Error',error);
                    }
                );    
            }
        )
        .catch(
            (error)=>{
                console.log('Error',error);
            }
        );
    
    console.log('Fin');
}
main();