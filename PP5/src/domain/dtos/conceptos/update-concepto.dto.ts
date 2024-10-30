export class UpdateConceptoDto {

    private constructor(
      public readonly id: number,
      public readonly descripcion?: string,
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.descripcion) returnObj.descripcion = this.descripcion;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdateConceptoDto?] {
  
      const { id, descripcion } = props;
  
      if (!id || isNaN(Number(id))) {
        return ['id must be a valid number'];
      }
  
      return [undefined, new UpdateConceptoDto(id, descripcion)];
    }
  }
  