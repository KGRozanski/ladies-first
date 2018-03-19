import { Directive, OnInit, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appMoveMachine]'
})

export class MoveMachineDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @Input('rotate') rotate : number;
  @Input() id: string;


    

    
    
    

  ngOnInit() {

  }

  @HostListener('input') valueChange(event: number) {


    var positions = [];
    var row = 0;
    var x;
    var y;
    for(x=0; x < 13; x++) {
      var col = 0;
      for(y=0; y < 12; y++) {
        positions.push(col+'px '+row+'px');
        col = col - 400;
      }
      row = row - 400;
    }

  
    
    const element = this.renderer.selectRootElement('#'+this.id);
    this.renderer.setStyle(element, 'background-position', positions[this.rotate] );
    
    
  }

}
