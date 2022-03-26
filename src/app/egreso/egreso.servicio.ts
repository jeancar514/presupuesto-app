import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egresos:Egreso[]=[
        new Egreso("Renta de un Dpto.",900),
        new Egreso("Ropa",200)
    ];
    eliminar(indice:number){
        this.egresos.splice(indice,1)
    }
}