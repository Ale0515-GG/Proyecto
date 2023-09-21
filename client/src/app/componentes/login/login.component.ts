// login.component.ts
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/Login/login.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Login } from 'src/app/models/Login';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  ingresar: Login = {
    Correo: '',
    Contrasena: ''
  };
  resultadoValidacion: any;
  constructor(
    private loginServices: LoginService,
    private router: Router,
    private activateRouter: ActivatedRoute,
    private toastrService:ToastrService
  ){}
  getIngresar() {
    if (this.ingresar.Correo && this.ingresar.Contrasena) {
        this.loginServices
        .getIngresar(this.ingresar.Correo, this.ingresar.Contrasena)
        .subscribe(
          (resultado) => {
            this.resultadoValidacion = resultado;
            if (resultado) {
              // Si las credenciales son válidas, redirige a la página principal
              this.router.navigate(['/pagina-inicio']);
            }
          },
          (error) => {
            console.error('Error al validar credenciales', error);
            this.toastrService.error(`No exite el Usuario`,'Error');
          }
        );
    } else {
      console.error('Correo electrónico o contraseña no válidos');
      this.toastrService.error(`Correo electrónico o contraseña no válidos`,'Error');
    }
  }

}
