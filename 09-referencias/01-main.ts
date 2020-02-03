// Referencias
function main(){
    let uno=1;
    let dos=uno;
    let tres=dos;
    console.log('uno',uno);
    console.log('dos',dos);
    console.log('tres',tres);
    uno=5;
    console.log('uno',uno);
    console.log('dos',dos);
    console.log('tres',tres);

    let arreglo=[1,2,3];
    let otroArreglo=[];
    let a=arreglo[0];
    let b=arreglo[1];
    console.log("Arreglo",arreglo);
    console.log("a",a);
    console.log("b",b);

    //otroArreglo=arreglo; // Refrencia -> Direccion de memoria
    // Asignar a otro arreglo una nueva direccion de memoria
    // 1 -> For llenar un nuevo arreglo
    // 2 -> Filtrar -> Siempre true
    // 3 -> Map -> nuevo arreglo

    // Inmutabilidad
    // Clon del arreglo -> Trabajar en ese
    // JS -> Arreglos u objetos -> Clon
    // Clonado
    otroArreglo = [...arreglo];

    otroArreglo.push(2);
    arreglo[0]=9;
    arreglo[1]=10;
    console.log("Arreglo",arreglo);
    console.log("Otro arreglo",otroArreglo);
    const persona={
        id: 1,
        nombre: 'Renato',
        sueldo: 300
    };
    // Clonado
    let soloNombre={...persona};
    console.log('Persona',persona);
    console.log('Solo nombre\n',soloNombre);
    delete persona.nombre; // Elimina un atributo de persona
    console.log('Persona',persona);
    console.log('Solo nombre\n',soloNombre);
    soloNombre['edad']=22;
    console.log('Persona',persona);
    console.log('Solo nombre\n',soloNombre);
    
    
}
main();