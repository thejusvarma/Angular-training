import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(ref:ElementRef) { 
    ref.nativeElement.style.color = 'red';
  }

}
