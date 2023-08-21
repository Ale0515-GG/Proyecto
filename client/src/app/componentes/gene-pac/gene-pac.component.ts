
import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/Paciente';
import { PacienteService } from 'src/app/service/paciente.service';

@Component({
  selector: 'app-gene-pac',
  templateUrl: './gene-pac.component.html',
  styleUrls: ['./gene-pac.component.css']
})
export class GenePACComponent {
 Genepa:Paciente ={
  Id:0,
    Nombre: '',
    Telefono: '',
    fecha_nacimiento:new Date,
    Genero: ''

};

constructor(private pacienteService: PacienteService,private router:Router){}

saveNewPaciente(){ //generamos el metodo
  // console.log(this.game);
  delete this.Genepa.Id;
this.pacienteService.savePaciente(this.Genepa)
  this.pacienteService.savePaciente(this.Genepa).subscribe(
    res =>{
      console.log(res);
      this.router.navigate(['/paciente']);
    },
    err => console.error(err)
  )
}

}

