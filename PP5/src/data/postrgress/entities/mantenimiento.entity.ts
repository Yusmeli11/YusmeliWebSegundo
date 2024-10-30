import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Auto } from './auto.entity'; 
import { Concepto } from './concepto.entity';

@Entity('mantenimientos')
export class Mantenimiento {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    autoId!: number;

    @Column()
    conceptoId!: number;

    @Column()
    fechaMantenimiento!: string;
    
    @Column()
    detalle!: string;
    auto: any;
}

