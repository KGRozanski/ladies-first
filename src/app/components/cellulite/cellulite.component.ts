import { Component, OnInit } from '@angular/core';

import { DevicesService } from '../../shared/models/devices.service';

import { Device } from '../../shared/models/devices.model';

@Component({
  selector: 'app-cellulite',
  templateUrl: './cellulite.component.html',
  styleUrls: ['./cellulite.component.css'],
  providers: [DevicesService]
})
export class CelluliteComponent implements OnInit {

  device: Device[];

  constructor(private devicesService: DevicesService) { }

  ngOnInit() {
    this.device = this.devicesService.getCellulite();
  }

}
