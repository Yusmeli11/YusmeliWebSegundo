export class UpdateMantenimientoDto {

    private constructor(
      public readonly id: number,
      public readonly autoId?: number,
      public readonly conceptoId?: number,
      public readonly fechaMantenimiento?: string,
      public readonly detalle?: string,
      
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.autoId) returnObj.autoId = this.autoId;
      if (this.conceptoId) returnObj.conceptoId = this.conceptoId;
      if (this.fechaMantenimiento) returnObj.fechaMantenimiento = this.fechaMantenimiento;
      if (this.detalle) returnObj.detalle = this.detalle;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdateMantenimientoDto?] {
  
      const { id, autoId, conceptoId, fechaMantenimiento, detalle } = props;
  
      if (!id || isNaN(Number(id))) {
        return ['id must be a valid number'];
      }
  
      return [undefined, new UpdateMantenimientoDto(id, autoId, conceptoId, fechaMantenimiento, detalle)];
    }
  }
  