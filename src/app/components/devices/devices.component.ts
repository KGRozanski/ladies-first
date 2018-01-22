import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../../shared/models/devices.model';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  @Input()
  device: Device[];

  constructor() { }

  ngOnInit() {
  }

}
