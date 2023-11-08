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
import { PaceditComponent } from './componentes/pacedit/pacedit.component';
import { ActuexComponent } from './componentes/actuex/actuex.component';
import { EditarMedicoComponent } from './editar-medico/editar-medico.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomComponent } from './pages/room/room.component';

const routes: Routes = [

  {path: '', component: LoginComponent},
  
  {path: 'pagina-inicio',component:PrincipalComponent},
  {path: 'registrar', component: RegistroComponent},
  {path: 'cargar-historial', component: HistorialComponent},
  {path: 'cargar-historial/:id', component: ActuexComponent},
  {path: 'cargar-cita', component: CitarealComponent},
  {path: 'paciente', component: PasienteComponent},
  {path: 'Medicos', component: MedicosComponent},
  {path: 'Medicosge', component: GeneMEDComponent},
  {path: 'PACGENE', component: GenePACComponent},
  {path: 'paciente/:id', component: PaceditComponent},
  {path: 'Confirpaciente', component: ConfirPacienteComponent},
  {path: 'Citaconf', component: CitaconfComponent},
  {path: 'Medicos/:id', component: EditarMedicoComponent},
  {path: 'mapa', component: MapaComponent},
  {path: 'citazoom', component: HomeComponent},
  {path: ':id', component: RoomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
