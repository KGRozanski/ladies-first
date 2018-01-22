import { Component, OnInit } from '@angular/core';

import { DevicesService } from '../../shared/models/devices.service';

import { Device } from '../../shared/models/devices.model';

@Component({
  selector: 'app-firmness',
  templateUrl: './firmness.component.html',
  styleUrls: ['./firmness.component.css'],
  providers: [DevicesService]
})
export class FirmnessComponent implements OnInit {

  device: Device[];
  
  constructor(private devicesService: DevicesService) { }

  ngOnInit() {
    this.device = this.devicesService.getFirmness();
  }

}
