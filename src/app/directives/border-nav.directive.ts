import { Directive, ElementRef, HostBinding, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderNav]'
})
export class BorderNavDirective {
  @HostBinding('style.borderBottom') borderBottom: string = '1px solid transparent';

  // Renderer2 reminds me of jQuery, look up the documents !important
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  // HostListener decorator listens to any event
  @HostListener('mouseenter') onscroll(eventData: Event) {
    this.borderBottom = '0.5px solid black';
  }
}
