import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeMe]'
})
export class ChangeMeDirective implements OnInit{

  @Input() myColor='';
  @Input() myBgColor='';

  constructor(private el:ElementRef) {
    // this.el.nativeElement.style.color="red";
   }
  ngOnInit(): void {
    this.el.nativeElement.style.color=this.myColor;
    this.el.nativeElement.style.backgroundColor=this.myBgColor;
  }

}
