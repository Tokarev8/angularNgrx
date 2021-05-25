import { Directive, ElementRef, EventEmitter, HostListener, Output, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appZoom]",
})
export class StyleDirective {


  constructor(private el: ElementRef, public render: Renderer2, ) {
     this.render.setStyle(this.el.nativeElement, "fontSize", "20px" );
  }


  @HostListener("mouseenter")
  onEnter(): void {
    const x = this.el.nativeElement.children;
    for (const i of x) {
      this.render.setStyle(i, "border-color", "white" );
    }


    this.render.setStyle(this.el.nativeElement, "text-shadow", "2px 2px 5px white" );
    this.render.setStyle(this.el.nativeElement, "background", "black" );
    this.render.setStyle(this.el.nativeElement, "color", "white" );


  }

  @HostListener("mouseleave")
  onLeave(): void {
    const x = this.el.nativeElement.children;
    for (const i of x) {
      this.render.setStyle(i, "border-color", "black" );
    }

    this.render.setStyle(this.el.nativeElement, "text-shadow", "" );
    this.render.setStyle(this.el.nativeElement, "background", "" );
    this.render.setStyle(this.el.nativeElement, "color", "" );

  }

}
