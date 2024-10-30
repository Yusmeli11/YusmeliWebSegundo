export class MantenimientoEntity {

    constructor(
      public id: number,
      public autoId: number,
      public conceptoId: number,
      public fechaMantenimiento: string,
      public detalle: string,
    ) {}
  
    public static fromObject(object: { [key: string]: any }): MantenimientoEntity {
      const { id, autoId, conceptoId, fechaMantenimiento, detalle } = object;
      
      if (!id) throw 'Id is required';
      if (!autoId) throw 'autoId is required';
      if (!conceptoId) throw 'conceptoId is required';
      if (!fechaMantenimiento) throw 'fechaMantenimiento is required';
      if (!detalle) throw 'detalle is required';
      
      return new MantenimientoEntity(id, autoId, conceptoId, fechaMantenimiento, detalle);
    }
  }
  
  