import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(lista: any[], filtro: string): any[] {
    if (!lista || !filtro) {
      return lista; // Si la lista o el filtro son nulos, devolver la lista original
    }

    filtro = filtro.toLowerCase(); // Convertir el filtro a minúsculas para la búsqueda insensible a mayúsculas

    return lista.filter(item => {
      // Aquí defines la lógica de búsqueda. Por ejemplo, si deseas buscar por nombre:
      return item.Nombre.toLowerCase().includes(filtro);
    });
  }
}
