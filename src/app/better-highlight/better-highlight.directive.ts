import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string ='transparent';
  @Input() highlightColor: string ='blue';

  constructor(private elref:ElementRef, private renderer:Renderer2 ) { }

  ngOnInit(){
    this.backgroundColor=this.defaultColor;
    //this.renderer.setStyle(this.elref.nativeElement, 'backgroundColor', 'blue')
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  @HostListener('mouseenter') mouseover(eventData: Event){
      //this.renderer.setStyle(this.elref.nativeElement, 'backgroundColor', 'blue')
      this.backgroundColor= this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
      //this.renderer.setStyle(this.elref.nativeElement, 'backgroundColor', 'transparent')
      this.backgroundColor= this.defaultColor;
  }


}
