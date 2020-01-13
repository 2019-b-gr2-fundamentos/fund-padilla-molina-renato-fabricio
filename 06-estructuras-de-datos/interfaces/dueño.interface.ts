import {AnimalPerrito} from './animal-perrito.interface'

export interface Dueño {
    nombre: string;
    apellidos: string;
    cedula?: string;
    fechaN: number;
    dueño?: Dueño,
    mascotas?: AnimalPerrito[];
}