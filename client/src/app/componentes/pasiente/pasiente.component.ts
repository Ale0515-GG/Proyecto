import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { PacienteService } from 'src/app/service/paciente.service';
import { Route, Router, RouterModule } from '@angular/router';
import { ExpedienteService } from '../../service/expediente.service';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-pasiente',
  templateUrl: './pasiente.component.html',
  styleUrls: ['./pasiente.component.css']
})
export class PasienteComponent implements OnInit {

  edit : boolean = false;
  
  paciente: any = [];
  expediente: any =[];
  pacienteEncontrado: any;
  

  control = new FormControl();
  
  constructor(private pacienteService: PacienteService, private expedienteService:ExpedienteService, private toastrService:ToastrService, private router:Router) {}

  buscarpost='';
  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe(
      res => {
        this.paciente = res;
      },
      err => console.error(err)
    );
    
    this.observerChangeSearch();

    this.expedienteService.getExpedientes().subscribe(
      res => {
        this.expediente = res;
      },
      err => console.error(err)
    );
  }

  observerChangeSearch() {
    this.control.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(query => {
      console.log(query);
      // Llama el método para buscar paciente cuando se genera un cambio en el valor
      this.buscarPaciente(query); // Pasa el valor 'query' como argumento
    });
  }

  buscarPaciente(query: string) {
    this.pacienteService.getPaciente(query) // Usa el valor de 'query' en la búsqueda
      .subscribe(
        (paciente) => {
          console.log('Paciente encontrado:', paciente);
          this.pacienteEncontrado = paciente;
        },
        (error) => {
          console.error('Error al buscar paciente:', error);
          this.pacienteEncontrado = null;
        } 
      );
}

getPaciente(){
  this.pacienteService.getPacientes().subscribe(
    // res => console.log(res),
    res => {
      this.paciente=res;
    },
    err => console.log(err)
  )
}

getExpediente(){
  this.expedienteService.getExpedientes().subscribe(
    // res => console.log(res),
    res => {
      this.expediente=res;
    },
    err => console.log(err)
  )
}


deletePaciente(Id: string){
  // console.log(id);//se lo manda a consola
  this.pacienteService.deletePaciente(Id).subscribe(
    res =>{
      console.log(res)//mueste lo de la api, aqui se puede poner lo de registro eliminado
      this.getPaciente();
      this.toastrService.warning(`Se borro un paciente`,'Atencion')

    },
    err => this.toastrService.error(`No se pudo borrar el paciente`,'Error')
  )
}

deleteExpediente(idExpediente: string){
  // console.log(id);//se lo manda a consola
  this.expedienteService.delteExpediente(idExpediente).subscribe(
    res =>{
      console.log(res)//mueste lo de la api, aqui se puede poner lo de registro eliminado
      this.getExpediente();
      this.toastrService.warning(`Se borro un expediente`,'Atencion')

    },
    err => this.toastrService.error(`No se pudo borrar el expediente`,'Error')
  )
}


fileName = "Pacientes.xlsx";
exportexcel(){
  //passing table id
  let data = document.getElementById("table-data");
  const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);

  //generate workbook and add the worksheet
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws, 'Sheet1')

  //save to file
  XLSX.writeFile(wb,this.fileName)
}

fileNameEx = "Expediente.xlsx";
exportex(){
    //passing table id
    let data = document.getElementById("table-exp");
    const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);
  
    //generate workbook and add the worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws, 'Sheet1')
  
    //save to file
    XLSX.writeFile(wb,this.fileNameEx)
}







}
