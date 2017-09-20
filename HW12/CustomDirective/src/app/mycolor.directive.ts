import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';
import {timeout} from "q";

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {
  colors : string[] = ["red","green", "yellow","black","purple"];
  index :number = 0;
  @Output() emitter = new EventEmitter();
  constructor(private el: ElementRef) { }

  @HostListener('click') onMouseClick(){
    this.el.nativeElement.style.color = this.colors[this.index];
    this.emitter.emit(this.colors[this.index]);
    //next color
    this.index = (this.index + 1) % this.colors.length;
  }

}
