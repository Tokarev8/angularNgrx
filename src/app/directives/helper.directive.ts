import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from "@angular/core";



@Directive({
  selector: "[helper]",
})
export class HelperDirective {

  @Input("helper")message: string = "";
  @Output() tumbler: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() messageOut: EventEmitter<string> = new EventEmitter<string>();



  @HostListener("mouseenter")
  onEnter(): void {
    setTimeout(() => {

      this.tumbler.emit(true);
      this.messageOut.emit(this.message);
    }, 1500);
  }

  @HostListener("mouseleave")
  onLeave(): void {
    this.tumbler.emit(false);
    this.messageOut.emit("");

  }




}
