export class CreateAutoDto {

    private constructor(
      public readonly descripcion: string,
      public readonly placa: string,
      public readonly color: string
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateAutoDto?] {
  
      const { descripcion, placa, color } = props;
  
      if (!descripcion) return ['descripcion property is required', undefined];
      if (!placa) return ['placa property is required', undefined];
      if (!color) return ['color property is required', undefined];
  
      return [undefined, new CreateAutoDto(descripcion, placa, color)];
    }
  }