import { Component, HostBinding, OnInit } from '@angular/core';
import { Login } from 'src/app/models/Login';
import { LoginService } from 'src/app/service/Login/login.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  @HostBinding('class') clases ='row';

  login:Login={
  Id:0,
  Correo:'',
  Contrasena:''
  }

  
constructor(private loginService: LoginService,private router:Router,private activeRoute:ActivatedRoute){}

savelogin(){

  delete this.login.Id;
  
    this.loginService.savelogin(this.login).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/login']);
      },
      err => console.error(err)
    )
  }
  

}
