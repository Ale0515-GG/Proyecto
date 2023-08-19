import { Component,HostBinding,OnInit } from '@angular/core';
import { CitaService } from 'src/app/service/Cita/paciente.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-citaconf',
  templateUrl: './citaconf.component.html',
  styleUrls: ['./citaconf.component.css']
})
export class CitaconfComponent {
  @HostBinding('class') classes='row';
  cita:any =[]
  constructor(private citaService:CitaService,private router:Router){

  }
  ngOnInit(){
    this.getCitas();
  }

  getCitas(){
    this.citaService.getCitas().subscribe(
      // res => console.log(res),
      res => {
        this.cita=res;
      },
      err => console.log(err)
    )
  }

  deleteCita(id: string){
    // console.log(id);//se lo manda a consola
    this.citaService.deleteCita(id).subscribe(
      res =>{
        console.log(res)//mueste lo de la api, aqui se puede poner lo de registro eliminado
        this.router.navigate(['/cita']);
      },
      err => console.log(err)
    )
  }
  

}
