import { Component, HostBinding, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/Login/login.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @HostBinding('class') clases ='row';
  login: any = [];


   
constructor(private loginService: LoginService,private router:Router,private activeRoute:ActivatedRoute){}


ngOnInit() {
  this.getlogins();
}
getlogins(){
  this.loginService.getlogins().subscribe(
    res => {
      this.login = res;
    },
    err => console.log(err)
  );
}

  

}



