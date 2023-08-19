import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/models/Medico';
import { MedicoService } from 'src/app/service/medico.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  medi: Medico = {
    Id: 0,
    Nombre: '',
    Especialidad: '',
    Telefono: '',
    Correo: ''
  };

  constructor(private mediService: MedicoService, private router: Router) {}

  ngOnInit(): void {
    // Initialization code if needed
  }


// <<<<<<< HEAD
//   saveNewMedi() {
//     this.mediService.saveMedi(this.medi).subscribe(
//       res => {
//         console.log(res);
//         this.router.navigate(['/medicos']);
//       },
//       err => console.error(err)
//     );
//   }
// }

// @Component({
//   selector: 'app-gene-med',
//   template: `
//     <!-- Your template for GeneMEDComponent -->
//   `,
//   // styleUrls: ... if needed
// })
// export class GeneMEDComponent implements OnInit {
//   @HostBinding('class') classes = 'row';
//   medi: any = [];

//   constructor(private medicoService: MedicoService) {}

//   ngOnInit() {
//     this.getMedicos();
//   }

//   getMedicos() {
//     this.medicoService.getMedicos().subscribe(
//       res => {
//         this.medi = res;
//       },
//       err => console.log(err)
//     );
//   }

//   deleteMedi(id: string) {
//     this.medicoService.deleteMedi(id).subscribe(
//       res => {
//         console.log(res);
//         this.getMedicos();
//       },
//       err => console.log(err)
//     );
//   }
// // saveNewMedi(){ //generamos el metodo
// //   // console.log(this.game);

// //   this.mediService.saveMedi(this.medi).subscribe(
// //     res =>{
// //       console.log(res);
// //       this.router.navigate(['/medicos']);
// //     },
// // //     err => console.error(err)
// // //   )
// // // }

// // // }

// =======
//   this.mediService.saveMedi(this.medi).subscribe(
//     res =>{
//       console.log(res);
//       this.router.navigate(['/medicos']);
//     },
//     err => console.error(err)
//   )
// }

// }

// >>>>>>> 7f0efffafc490f7f936df46c5c645e62fc766335
