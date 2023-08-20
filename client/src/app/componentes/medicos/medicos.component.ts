import { Component,HostBinding,OnInit } from '@angular/core';
import { MedicoService } from 'src/app/service/medico.service'; 

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})

export class GameListComponent implements	 OnInit{
  @HostBinding('class') classes='row';
  games:any =[]
  constructor(private gameService:MedicoService){

  }
  ngOnInit(){
    this.getMedicos();
  }

  getMedicos(){
    this.gameService.getMedicos().subscribe(
      // res => console.log(res),
      res => {
        this.games=res;
      },
      err => console.log(err)
    )
  }

  deleteMedi(id: string){
    // console.log(id);//se lo manda a consola
    this.gameService. deleteMedi(id).subscribe(
      res =>{
        console.log(res)//mueste lo de la api, aqui se puede poner lo de registro eliminado
        this.getMedicos();
      },
      err => console.log(err)
    )
  }

}