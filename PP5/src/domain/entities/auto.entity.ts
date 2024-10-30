export class AutoEntity {

    constructor(
      public id: number,
      public descripcion: string,
      public placa: string,
      public color: string,
    ) {}
  
    public static fromObject(object: { [key: string]: any }): AutoEntity {
      const { id, descripcion, placa, color } = object;
      
      if (!id) throw 'Id is required';
      if (!descripcion) throw 'descripcion is required';
      if (!placa) throw 'placa is required';
      if (!color) throw 'color is required';
  
      return new AutoEntity(id, descripcion, placa,color);
    }
  }
  