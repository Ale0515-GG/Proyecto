import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {
  transform(value: any, arg: any):any {
    const resultPost =[];
    for(const post of value){
      if(post.Nombre.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultPost.push(post);
      };
    };

    return resultPost;
  }
  }
