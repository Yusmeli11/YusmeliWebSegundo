import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Mantenimiento } from './mantenimiento.entity';

@Entity('autos') 
export class Auto {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    descripcion!: string;

    @Column()
    placa!: string;

    @Column()
    color!: string;

    @OneToMany(() => Mantenimiento, (mantenimiento) => mantenimiento.auto)
    mantenimientos!: Mantenimiento[];
}
