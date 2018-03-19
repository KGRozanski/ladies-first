import { 
  Component, 
  OnInit

  
} from '@angular/core';



@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})



export class DeviceComponent implements  OnInit {
  
  machineIds : any[];


  constructor() {
    this.machineIds = [];
    this.machineIds.push({id:"bicycle"});
    this.machineIds.push({id:"infrashape"});
    this.machineIds.push({id:"rollshape"});
    this.machineIds.push({id:"vibrashape"});

  }

  ngOnInit() {

  }

}
