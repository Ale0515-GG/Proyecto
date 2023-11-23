import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PacienteService } from './service/paciente.service';
import { CitaconfComponent } from './componentes/citaconf/citaconf.component';
import { CitarealComponent } from './componentes/citareal/citareal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular material
 import { MatFormFieldModule } from '@angular/material/form-field';
 import { MatInputModule } from '@angular/material/input';
 import { MatSliderModule } from '@angular/material/slider';
import { BuscarPipe } from './pipe/buscar.pipe';
import { ToastrModule } from 'ngx-toastr';
import { PaceditComponent } from './componentes/pacedit/pacedit.component';

import { EditarMedicoComponent } from './editar-medico/editar-medico.component';
import { ActuexComponent } from './componentes/actuex/actuex.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomComponent } from './pages/room/room.component';
import { VideoPlayerComponent } from './componentes/video-player/video-player.component';
import { MenuBottonComponent } from './componentes/menu-botton/menu-botton.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { FarmaciaComponent } from './componentes/farmacia/farmacia.component';
import { ProductListComponent } from './componentes/product-list/product-list.component';
import { ProductItemComponent } from './componentes/product-item/product-item.component';
import { CartComponent } from './componentes/cart/cart.component';
import { CartItemComponent } from './componentes/cart-item/cart-item.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PayComponent } from './pay/pay.component';

//SOCKET STREAMING 
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {withCredentials: true} };
//external


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
    CitaconfComponent,
    CitarealComponent,
    BuscarPipe,
    PaceditComponent,
    EditarMedicoComponent,
    ActuexComponent,
    MapaComponent,
    HomeComponent,
    RoomComponent,
    VideoPlayerComponent,
    MenuBottonComponent,
    FarmaciaComponent,
    ProductListComponent,
    ProductItemComponent,
    CartComponent,
    CartItemComponent,
    ModalComponent,
    PayComponent,
    


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
    SocketIoModule.forRoot(config),
    NgxPayPalModule,
    NgxSpinnerModule,
    
    
  ],
  providers: [
    PacienteService
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
