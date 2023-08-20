import { Pipe, PipeTransform } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  constructor(private toastrService: ToastrService) {} // Inyecta el servicio de notificaciones

  transform(value: any, arg: any): any {
    const resultPost = [];
    for (const post of value) {
      if (post.Nombre.indexOf(arg) > -1) {
        resultPost.push(post);
      }
    }
  
    if (resultPost.length === 0) {
      this.toastrService.warning('No se encontraron resultados', 'Aviso');
    }
  
    return resultPost;
  }
  
}
