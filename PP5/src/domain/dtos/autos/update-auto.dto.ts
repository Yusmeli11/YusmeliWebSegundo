export class UpdateAutoDto {

    private constructor(
      public readonly id: number,
      public readonly descripcion?: string,
      public readonly placa?: string,
      public readonly color?: string
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.descripcion) returnObj.descripcion = this.descripcion;
      if (this.placa) returnObj.placa = this.placa;
      if (this.color) returnObj.color = this.color;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdateAutoDto?] {
  
      const { id, descripcion, placa, color } = props;
  
      if (!id || isNaN(Number(id))) {
        return ['id must be a valid number'];
      }
  
      return [undefined, new UpdateAutoDto(id, descripcion, placa, color)];
    }
  }
  