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
//import { MedicosComponent } from './componentes/medicos/medicos.component';

import { GeneMEDComponent } from './componentes/gene-med/gene-med.component';
import { GenePACComponent } from './componentes/gene-pac/gene-pac.component';
import { ConfirPacienteComponent } from './componentes/confir-paciente/confir-paciente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PacienteService } from './service/paciente.service';
import { CitaconfComponent } from './componentes/citaconf/citaconf.component';
import { CitarealComponent } from './componentes/citareal/citareal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//notificacion 
import { ToastrModule } from 'ngx-toastr';

//Angular material
 import { MatFormFieldModule } from '@angular/material/form-field';
 import { MatInputModule } from '@angular/material/input';
 import { MatSliderModule } from '@angular/material/slider';
import { BuscarPipe } from './pipe/buscar.pipe';

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
   // MedicosComponent,
    GeneMEDComponent,
    GenePACComponent,
    ConfirPacienteComponent,
    CitaconfComponent,
    CitarealComponent,
    BuscarPipe,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    ToastrModule.forRoot(),

    
  ],
  providers: [
    PacienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
