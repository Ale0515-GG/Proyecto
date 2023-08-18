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

  constructor( private loginService: LoginService,private router: Router,private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getLogin();
  }

  getLogin() {
    const params =this.activeRoute.snapshot.params;
    this.loginService.getLogin(params['id']
    ).subscribe(
      res => {
        this.login = res;
      },
      err => console.log(err)
    );
  }

}