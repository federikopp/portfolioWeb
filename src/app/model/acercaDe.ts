export class AcercaDe{

    id?: number;
    nombre: string;
    apellido: string;
    nacionalidad :string;
    titulo: string;
    edad: number;
    email: string;
    contacto: string;
    fotoPerfil: string;

    constructor (nombre: string, 
                apellido: string,
                nacionalidad: string,
                titulo: string,
                edad: number,
                email: string,
                contacto: string,
                fotoPerfil: string){

                    this.nombre = nombre;
                    this.apellido = apellido;
                    this.nacionalidad = nacionalidad;
                    this.titulo = titulo;
                    this.edad = edad;
                    this.email = email;
                    this.contacto = contacto;
                    this.fotoPerfil = fotoPerfil;

                }
}