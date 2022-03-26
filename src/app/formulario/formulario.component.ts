import { Component, OnInit } from '@angular/core';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.servicio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tipo:string= "ingresoOperacion"
  descripcionInput:string;
  valorInput:number;

  constructor(private ingresoServicio:IngresoServicio, private egresoServicio:EgresoServicio) { }

  ngOnInit(): void {
  }
  tipoOperacion(evento:Event):void{
    this.tipo = (<HTMLSelectElement>evento.target).value;
  }
  agregarValor(){
    if (this.tipo === "ingresoOperacion")
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput,this.valorInput))
    else
      this.egresoServicio.egresos.push(new Ingreso(this.descripcionInput,this.valorInput))

  }

}
