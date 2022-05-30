import { IGrupo } from "./IGrupo";
import { IMateria } from "./IMateria";
import { ITarea } from "./ITarea";

export interface IAlumno{
    id?: number,
    nombre: string,
    fecha_nacimiento: Date,
    imagen?: string,
    correo: string,
    id_grupo: number,
    contrasenia: string,
    grupo?: IGrupo,
    tareas?: ITarea[]
    materias?: IMateria[]
}