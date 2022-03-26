import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EgresoComponent } from './egreso/egreso.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { EgresoServicio } from './egreso/egreso.servicio';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EgresoComponent,
    IngresoComponent,
    FormularioComponent,
    CabeceroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IngresoServicio,EgresoServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
