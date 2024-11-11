import { Transaccion } from 'src/transaccion/entities/transaccion.entity';

export declare class Mantenimiento {
    id: number; 
    idVehiculo: number; 
    idConcepto: number; 
    fechaMantenimiento: string; 
    detalle: string; 
    transaccion: Transaccion; 
}
