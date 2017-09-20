import {Directive, ElementRef,Input} from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective {
@Input("myvisibility") visible : boolean;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    //console.log(this.visible);
    this.el.nativeElement.style.display = "none";

    if(this.visible){
      this.el.nativeElement.style.display = "block";
    }
  }

}
