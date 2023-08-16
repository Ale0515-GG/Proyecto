import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, pipe } from 'rxjs';
import { PacienteService } from 'src/app/service/paciente.service';

@Component({
  selector: 'app-pasiente',
  templateUrl: './pasiente.component.html',
  styleUrls: ['./pasiente.component.css']
})
export class PasienteComponent implements OnInit{

  paciente:any =[]
  pacienteEncontrado: any;  

  control = new FormControl();
  constructor(private http : HttpClient){}


  ngOnInit(): void{
    // this.pacienteService.getPacientes().subscribe(
    //    res => {
        
    //      this.paciente = res;
    //    },
    //    err => console.error(err)
    // );
    this.observerChangeSearch()
  }

  observerChangeSearch(){
    this.control.valueChanges.pipe(
      debounceTime(1000) //tiemñpo espera
    ).subscribe(query => {
      console.log(query)
    })
  }

  // buscarPaciente() {
  //   this.pacienteService.getPaciente(this.paciente)
  //     .subscribe(
  //       (paciente) => {
  //         console.log('Paciente encontrado:', paciente);
  //         this.pacienteEncontrado = paciente;
  //       },
  //       (error) => {
  //         console.error('Error al buscar paciente:', error);
  //         this.pacienteEncontrado = null;
  //       }
  //     );
  // }
  // getPacientequery(query:String){
  //   this.http.get('http://localhost:3000/api/paciente',{
  //     params: new HttpParams()
  //     .set('access_token',this.token)
  //     .set('q',query)
  //   }).pipe{
  //     map(result => result-Response.hits)
  //   }.subscribe(result =>{
  //     console.log(result)
  //   })
  //}
} 
