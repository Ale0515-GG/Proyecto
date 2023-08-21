import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CargarCita } from './componentes/Cita/cita';
import { HistorialComponent } from './componentes/historial/historial.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { PasienteComponent } from './componentes/pasiente/pasiente.component';
import { MedicosComponent } from './componentes/medicos/medicos.component';
import { GeneMEDComponent } from './componentes/gene-med/gene-med.component';
import { GenePACComponent } from './componentes/gene-pac/gene-pac.component';
import { CitaconfComponent } from './componentes/citaconf/citaconf.component';
import { ConfirPacienteComponent } from './componentes/confir-paciente/confir-paciente.component';
import { CitarealComponent } from './componentes/citareal/citareal.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  
  {path: 'pagina-inicio',component:PrincipalComponent},
  {path: 'registrar', component: RegistroComponent},
  {path: 'cargar-historial', component: HistorialComponent},
  {path: 'cargar-cita', component: CitarealComponent},
  {path: 'paciente', component: PasienteComponent},
  {path: 'Medicos', component: MedicosComponent},
  {path: 'Medicosge', component: GeneMEDComponent},
  {path: 'PACGENE', component: GenePACComponent},
  {path: 'PACGENE/:id', component: GenePACComponent},
  {path: 'Confirpaciente', component: ConfirPacienteComponent},
  {path: 'Citaconf', component: CitaconfComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
