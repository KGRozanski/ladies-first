import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-machine-sprite',
  templateUrl: './machine-sprite.component.html',
  styleUrls: ['./machine-sprite.component.css']
})
export class MachineSpriteComponent implements OnInit {

  @Input() id : string;
  @Input('rotate') rotate : number;

  constructor() { }

  valueChange(event){
    this.rotate = event.value;
  }

  ngOnInit() {
    
  }

}
