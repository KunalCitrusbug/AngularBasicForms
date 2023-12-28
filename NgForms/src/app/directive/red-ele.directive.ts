import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRedEle]'
})
export class RedEleDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = "green";
   }
   private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  @Input() appRedEle = '';
  @Input() defaultColor = '';
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appRedEle || this.defaultColor || 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  

}
