import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('escuelas')
export class Escuela {
    @PrimaryColumn()
    private idEscuela : number;
    @Column()
    private nombre : string;

    constructor (id:number, nombre:string){
        this.idEscuela = id;
        this.nombre= nombre;
    }

    public getIdEscuela(): number { return this.idEscuela; }
    public setIdEscuela(idEscuela: number): void { this.idEscuela = idEscuela; }
    public getNombre(): string { return this.nombre; }
    public setNombre(nombre: string): void { this.nombre = nombre; }
}