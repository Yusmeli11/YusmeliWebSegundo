export class CreateConceptoDto {

    private constructor(
      public readonly descripcion: string,

    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateConceptoDto?] {
  
      const { descripcion } = props;
  
      if (!descripcion) return ['descripcion property is required', undefined];
      
  
      return [undefined, new CreateConceptoDto(descripcion)];
    }
  }
  