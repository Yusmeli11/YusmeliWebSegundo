export class CreateMantenimientoDto {

    private constructor(
      public readonly autoId: number,
      public readonly conceptoId: number,
      public readonly fechaMantenimiento: string,
      public readonly detalle: string,
  
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateMantenimientoDto?] {
  
      const { autoId, conceptoId, fechaMantenimiento, detalle } = props;
  
      if (!autoId) return ['autoId property is required', undefined];
      if (!conceptoId) return ['conceptoId property is required', undefined];
      if (!fechaMantenimiento) return ['fechaMantenimiento property is required', undefined];
      if (!detalle) return ['detalle property is required', undefined]
  
      return [undefined, new CreateMantenimientoDto(autoId, conceptoId, fechaMantenimiento, detalle)];
    }
  }