import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(name:string, gender:string): string {
    if(gender == 'm'|| gender =='M')
      return 'Mr.'+name;
  
    else if(gender == 'f' || gender == 'F')
      return 'Ms.'+name;
    
    else 
      return name;
  }

}
