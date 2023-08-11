import { Component, HostBinding, OnInit } from '@angular/core';
import { Medi } from 'src/app/models/Medico';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})

export class MedicosComponent implements OnInit{
  @HostBinding('class') clases ='row';

  medi: Medi = {
    id: 0,
    nombre: '',
    especialidad: '',
    Telefono: '',
    correo: ''
};

ngOnInit(): void {
}

saveNewGame(){ //generamos el metodo
  // console.log(this.game);

  this.gameService.saveGame(this.game).subscribe(
    res =>{
      console.log(res);
      this.router.navigate(['/games']);
    },
    err => console.error(err)
  )
}

}