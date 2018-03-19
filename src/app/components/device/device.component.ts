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
    this.machineIds.push({id:"bicycle", name: "Body Shape", desc: "Podczas ćwiczeń i panujących w kapsule podciśnieniem oraz podczerwieni dochodzi do usprawnienia przepływu krwi w organizmie i szybszego spalania tłuszczu w okolicach brzucha, talii, pośladków oraz ud."});
    this.machineIds.push({id:"infrashape", name: "Infra Shape", desc: "To rewolucyjne połączenie roweru oraz kapsuły łączącej w sobie wszystkie funkcje Body Shape, dzięki czemu odciąża kręgosłup i stawy, pozwalając uzyskać lepszą wydolność podczas ćwiczeń."});
    this.machineIds.push({id:"rollshape", name: "Roll Shape", desc: "Głownym celem jest uzyskanie szczupłej wymodelowanej sylwetki w bardzo krótkim czasie. Inspiracją dla stworzenia Roll Shape był rolki drewniane wykorzystywane w Dynastii Ming."});
    this.machineIds.push({id:"vibrashape", name: "Vibra Shape", desc: "Urządzenie opiera się na stymulacji nerwowo mięśniowej przez drgania mechaniczne. Do treningu zastosowano drgania, które mają stymulacyjny wpływ na nasze tkanki, takie jak mięśnia, ścięgna więzadła, kości, skóra."});

  }

  ngOnInit() {

  }

}
