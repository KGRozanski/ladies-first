import { Component, OnInit } from '@angular/core';

import { DevicesService } from '../../shared/models/devices.service';

import { Device } from '../../shared/models/devices.model';

@Component({
  selector: 'app-slimming',
  templateUrl: './slimming.component.html',
  styleUrls: ['./slimming.component.css'],
  providers: [DevicesService]
})
export class SlimmingComponent implements OnInit {

  device: Device[];

  constructor(private devicesService: DevicesService) { }

  ngOnInit() {
    this.device = this.devicesService.getSlimming();
  }

}
