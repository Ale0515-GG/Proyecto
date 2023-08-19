// login.component.ts
import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/Login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Correo = '';
  Contra = '';

  constructor(private loginService: LoginService, private router: Router) {}

}
