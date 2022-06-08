export interface IMateria {
    id: number,
    nombre: string,
    descripcion: string,
    imagen: string,
    info?: () => void
}