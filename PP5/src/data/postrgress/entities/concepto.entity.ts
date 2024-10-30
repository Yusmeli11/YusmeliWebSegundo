import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Mantenimiento } from './mantenimiento.entity';
@Entity()
export class Concepto {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    descripcion!: string;
}