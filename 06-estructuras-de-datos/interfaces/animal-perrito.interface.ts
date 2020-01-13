import {Dueño} from './dueño.interface';

export interface AnimalPerrito {
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