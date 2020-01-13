// CASI EN TODOS LOS LENGUAJES
// Struct -> Estructura de datos
// Clase -> Estructura de datos -> Metodos

// Animal -> nombre cientifico, color principal, 
//fecha de naciemiento, peso, genero, altura

// Estructura de datos en lenguaje NO TIPADO
import {AnimalPerrito} from './interfaces/animal-perrito.interface';
import { Dueño } from './interfaces/dueño.interface';
const poliPerro = {
    nombreCientifico: 'Canis Lupus Familiaris',
    nombre: 'Grandote',
    clan: 'Poliperro',
    edad: 10,
    hijos: null,
    perritas: ['Lassy','Zoraida'],
    coloPrincipal: 'Negro',
    peso: 50,
    genero: 'Macho',
    altura: 70,
    vacunado: true,
}
console.log(poliPerro.edad)

// Estructura de datos en lenguaje TIPADO
/*interface AnimalPerrito {
    nombreCientifico: string;
    nombre: string;
    clan: string;
    edad?: number;
    //hijos: null,
    perritas?: string[];
    coloPrincipal: string;
    peso?: number;
    genero: string;
    altura?: number;
    vacunado?: boolean;
    dueño?: Dueño;
}
interface Dueño {
    nombre: string;
    apellidos: string;
    cedula?: string;
    fechaN: number;
    dueño: Dueño,
}
*/
const poliPerroA: AnimalPerrito = {
    nombreCientifico: 'Canis Lupus Familiaris',
    nombre: 'Amarillo',
    clan: 'Poliperro',
    edad: 6,
    //hijos: null,
    perritas: [],
    coloPrincipal: 'Negro',
    peso: 30,
    genero: null,
    altura: 50,
    vacunado: false,
}
const dueñoPiliperroA: Dueño = {
    nombre: 'Renato',
    apellidos: 'Padilla',
    fechaN: 5,
    mascotas: [poliPerroA],
}
// Guardar datos
poliPerroA.vacunado=true;
poliPerroA.edad=3;
// Acceder a datos
console.log(poliPerroA.dueño.nombre);