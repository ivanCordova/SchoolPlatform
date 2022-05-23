import { IAlumno } from "./IAlumno";
import { IMaestro } from "./IMaestro";

export interface IUser{
    id?: number,
    correo: string,
    contrasenia: string,
    rol?: string,
    isLogin: boolean,
    datos?: IAlumno | IMaestro,
}