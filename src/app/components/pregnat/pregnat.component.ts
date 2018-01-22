import { Component, OnInit } from '@angular/core';

import { DevicesService } from '../../shared/models/devices.service';

import { Device } from '../../shared/models/devices.model';

@Component({
  selector: 'app-pregnat',
  templateUrl: './pregnat.component.html',
  styleUrls: ['./pregnat.component.css'],
  providers: [DevicesService]
})
export class PregnatComponent implements OnInit {

  device: Device[];
  
  constructor(private devicesService: DevicesService) { }

  ngOnInit() {
    this.device = this.devicesService.getPregnat();
  }

}
