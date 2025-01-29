export class Candidato {
    id:number
    nombre:String
    apellido:String
    partido:String
    vicepresidente:String
    
    constructor(id:number,nombre:String,apellido:String,partido:String,vicepresidente:String){
        this.id=id
        this.nombre=nombre
        this.apellido=apellido
        this.partido=partido
        this.vicepresidente=vicepresidente
    }
}
