import { Component, OnInit } from '@angular/core';

import { DevicesService } from '../../shared/models/devices.service';

import { Device } from '../../shared/models/devices.model';

@Component({
  selector: 'app-regeneration',
  templateUrl: './regeneration.component.html',
  styleUrls: ['./regeneration.component.css'],
  providers: [DevicesService]
})
export class RegenerationComponent implements OnInit {

  device: Device[];

  constructor(private devicesService: DevicesService) { }

  ngOnInit() {
    this.device = this.devicesService.getRegeneration();
  }

}
