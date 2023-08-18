import { Component, HostBinding, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/Login/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../../models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @HostBinding('class') clases = 'row';
  login: any[] = [];

  Correo = '';
  Contrasena = '';

  constructor(
    private loginService: LoginService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getLogins();
  }

  getLogins() {
    this.loginService.getLogins().subscribe(
      res => {
        this.login = res;
      },
      err => console.log(err)
    );
  }

  // Agrega aquí las funciones y métodos adicionales que necesites para tu componente

  validarCredenciales() {
    // Llama a la función del servicio para validar las credenciales
    this.loginService.validarCredenciales(this.Correo, this.Contrasena).subscribe(
      res => {
        if (res.success) {
          // Credenciales válidas, redirigir a una página de éxito o realizar alguna acción
          this.router.navigate(['/pagina-inicio']);
        } else {
          // Credenciales inválidas, mostrar un mensaje de error o realizar alguna acción
          console.log('Credenciales inválidas');
        }
      },
      err => console.log(err)
    );
  }
}
