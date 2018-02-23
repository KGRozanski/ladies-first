import { Component, OnInit } from '@angular/core';
declare var $ :any;
declare var CircleType :any;

@Component({
  selector: 'app-nails',
  templateUrl: './nails.component.html',
  styleUrls: ['./nails.component.css']
})
export class NailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new CircleType(document.getElementById('curvedTitle')).radius(800);
  }

}
