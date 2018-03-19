import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-machine-desc',
  templateUrl: './machine-desc.component.html',
  styleUrls: ['./machine-desc.component.css']
})
export class MachineDescComponent implements OnInit {
@Input() name : string;
@Input() desc : string;

  constructor() { }

  ngOnInit() {
  }

}
