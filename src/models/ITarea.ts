import { IGrupo } from "./IGrupo";
import { IMaestro } from "./IMaestro";
import { IMateria } from "./IMateria";

export interface ITarea {
    id?: number,
    titulo: string,
    descripcion: string,
    id_grupo: number,
    id_materia: number,
    id_maestro: number,
    grupo?: IGrupo,
    materia?: IMateria,
    maestro?: IMaestro

}