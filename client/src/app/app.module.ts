import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CargarCita } from './componentes/Cita/cita';
import { LateComponent } from './componentes/late/late.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { PasienteComponent } from './componentes/pasiente/pasiente.component';
import { MedicosComponent } from './componentes/medicos/medicos.component';

import { GeneMEDComponent } from './componentes/gene-med/gene-med.component';
import { GenePACComponent } from './componentes/gene-pac/gene-pac.component';
import { ConfirPacienteComponent } from './componentes/confir-paciente/confir-paciente.component';

import { PacienteService } from './service/paciente.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    CargarCita,
    LateComponent,
    HistorialComponent,
    PrincipalComponent,
    PasienteComponent,
    MedicosComponent,
    GeneMEDComponent,
    GenePACComponent,
    ConfirPacienteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PacienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }