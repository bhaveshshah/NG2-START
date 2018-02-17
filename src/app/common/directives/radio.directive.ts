import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRadio]'
})


export class RadioDirective {
  @Input('format') format;

  constructor(private el: ElementRef) { }

  @HostListener('blur')
  onBlur() {
    const value: string = this.el.nativeElement.value;
    // this.format = document.querySelector('input[name="case"]:checked').value;
    if (this.format === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }

}
