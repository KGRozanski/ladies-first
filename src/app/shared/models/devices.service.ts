import { EventEmitter } from '@angular/core';

import { Device } from '../../shared/models/devices.model';

export class DevicesService {

  device = new EventEmitter<Device>();

    private devices: Device[] = [
        {
          	name: 'Roll Shape', 
          	oneEnterenceFee: 40, 
          	fiveEnterenceFee: 200, 
         	tenEnterenceFee: 300, 
		  	description: 'Pogromca cellulitu, inspiracją dla stworzenia  Roll Shape były drewniane rolki wykorzystywane do masażu w czasach dynastii Ming.',
		  	effects:
          	[
				'Znaczące zmniejszenie cellulitu',
				'Poprawa krążenia krwi i limfy',
				'Mechaniczne rozbicie tkanki tłuszczowej',
				'Modelowanie sylwetki',
				'Zmniejszenie zatrzymania wody w organizmie', 
				'Ujędrnienie skóry',
				'Poprawia przemianę materii',
				'Stymulacja pracy mięśni',
				'Detoksykacja'
          	],
          	imagePath: '../../assets/img/roll_shape.png'
		}, 
		{
			name: 'Body Shape', 
			oneEnterenceFee: 45, 
			fiveEnterenceFee: 200, 
			tenEnterenceFee: 350, 
			description: 'Podczas ćwiczeń i panujących w kapsule podciśnieniem oraz podczerwieni dochodzi do usprawnienia przepływu krwi w organizmie i szybszego spalania tłuszczu w okolicach brzucha, talii, pośladków oraz ud.',
			effects:
			[
				'Utrata do 12 kilogramów', 
				'W ciągu 30 minut spalasz do 1 200 kalorii',
				'Zmniejszanie cellulitu',
				'Zmniejszanie obwodu w pasie oraz udach nawet o 20cm',
				'Wzrost przemiany materii',
				'Usprawnienie przepływu krwi i limfy w organizmie',
				'Uzyskanie efektu talii osy'
			],
			imagePath: '../../assets/img/body_shape.png'
		},
		{
			name: 'Rower Horyzontalny', 
			oneEnterenceFee: 60, 
			fiveEnterenceFee: 250, 
			tenEnterenceFee: 450, 
			description: 'To rewolucyjne połączenie roweru oraz kapsuły łączącej w sobie wszystkie funkcje Body Shape, dzięki czemu odciąża kręgosłup i stawy, pozwalając uzyskać lepszą wydolność podczas ćwiczeń.',
			effects:
			[
				'Do 640 spalonych kalorii w ciągu jednego treningu', 
				'Zmniejszenie tkanki tłuszczowej w okolicach ud, pośladków, i dolnej partii mięśni brzucha',
				'Poprawia i przyśpiesza metabolizm',
				'Oczyszcza organizm',
				'Wzmacnia mięśnie',
				'Pozbicie się zbędnych kilogramów',
				'Zmiana kształtu i figury'
			],
			imagePath: '../../assets/img/bike.png'
		},
		{
			name: 'SonoQueen', 
			oneEnterenceFee: 30, 
			fiveEnterenceFee: 150, 
			tenEnterenceFee: 250, 
			description: 'SonoQueen to prawdziwie królewski dotyk odmładzający, za­mknięty w formie szybkiego, komfortowego zabiegu na twarz i ciało. Proces przebudowy i liftingu odbywa się wewnątrz Twojej skóry, dzięki temu natychmiast powracasz do swoich codziennych zajęć, a resztę pracy nad młodym wyglądem pozostawiasz swojej skórze. SonoQueen to nowa era uzyskiwania efektu wielowymiarowego, trwałego napięcia i wygładzenia skóry, zarówno twarzy, jak i ciała.',
			effects:
			[
				'Lifting twarzy i ujędrnianie ciała', 
				'Napięcie delikatnej skóry w okolicach oczu',
				'Ujędrnienie skóry w okolicy ramion',
				'Lifting wiotkiej skóry na brzuchu',
				'Uniesienie i ujędrnienie pośladków',
				'Wygładzenie skóry w okolicach ud i kolan',
				'Redukcja tzw. „drugiego podbródka” Rozświetlenie skóry',
				'Wygładzenie zmarszczek',
				'Spowolnienie procesu starzenia skóry'
			],
			imagePath: './assets/img/sonoqueen/sq21.png'
		},
		{
			name: 'Activ Slim', 
			oneEnterenceFee: 50, 
			fiveEnterenceFee: 200, 
			tenEnterenceFee: 350, 
			description: 'Urządzenie Activ Slim  ączy w sobie funkcję elektrostymulacji, sauny na podczerwień oraz drenażu limfatycznego.',
			effects:
			[
				'Drenaż limfatyczny – zabieg bezpośrednio oddziaływujący na układ krwionośny i limfatyczny. Ma działanie oczyszczające poprzez uwolnienie szkodliwych produktów przemiany materii, odtransportowanie ich naczyniami limfatycznymi z narządów filtrujących i wydalenie ich z organizmu.', 
				'Sauna – dzięki saunie  ciało zostaje podgrzane co wpływa na pobudzenie przemiany materii. Dodatkowo zwiększa dotlenienie i odżywienie komórek, poprawia krążenie. Terapia ciepłem wspomaga działanie preparatów wyszczuplających, antycellulitowych oraz wszelkiego rodzaju zabiegów detoksykacji.', 
				'Detoksykacja - jest bezpiecznym i sprawdzonym sposobem usprawnienia naturalnych procesów usuwania toksyn i odnowy organizmu. Brak możliwości całkowitego usunięcia toksyn z organizmu może powodować liczne dolegliwości zdrowotne. Zabieg detoksykacji to najskuteczniejsza terapia na efekty stosowania nieodpowiedniej diety', 
				'Masaż ciała - zabieg terapeutyczny polegający na sprężystym odkształcaniu tkanek. Masaż wykonywany jest rytmicznie poprzez zastosowanie sprężonego powietrza. Zabieg może działać leczniczo, relaksacyjnie lub w celu przygotowania mięśni do wysiłku.', 
				'Odchudzanie - prąd o niskiej częstotliwości stymuluje mięsnie do drgania i kurczenia się, co wspomaga procesy rozbijania komórek tłuszczowych. Dodatkowo działające promieniowanie podczerwone oddziałuje bezpośrednio na strukturę tłuszczu, wyzwalając duże ilości energii, przyspieszając krążenie krwi i limfy oraz procesów metabolicznych w ciele.'
			],
			imagePath: '../../assets/img/activ_slim.png'
		},
		{
			name: 'Elektrosymulacja', 
			oneEnterenceFee: 30, 
			fiveEnterenceFee: 150, 
			tenEnterenceFee: 250, 
			description: 'Elektrosymulacja pozwala pozbyć się nadmiaru tkanki tłuszczowej,  szybkią rozbudowę tkanki mięśniowej  a przedewszystkim redukuje obwisłą skórę brzucha, ud etc.',
			effects:
			[
				'Zmniejszenie tkanki tłuszczowej', 
				'Zmniejszenie cellulitu',
				'Rozbudowa tkanki mięśniowej przy niewielkich nakładach energii',
				'Zmniejszenie obwodu ud i talii'
			],
			imagePath: '../../assets/img/elektro.jpg'
		},
		{
			name: 'Kapsuła Slim & Beauty', 
			oneEnterenceFee: 50, 
			fiveEnterenceFee: 200, 
			tenEnterenceFee: 350, 
			description: 'To odchudzanie XXI wieku, innowacyjne urządzenie emitujące wiązki podczerwieni zintegrowane z aromaterapią, koloroterapia, elektrostymulacja i fototerapią ( odbudowa naczynek kolagenowych). Przyczynia się do modelowania sylwetki i odmładzania jednocześnie gwarantując osiagniecie doskonałej formy. Wszystkie funkcje działają jednocześnie co daje spotęgowany efekt i utratę nawet do 5000 kalorii w 30 minut. Dodatkowe wzmocnienie efektów kapsuły specjalnie przygotowanymi maskami przyspieszjącymi spalanie tłuszczu i pozbycie się cellulitu, powoduje że jest to obecnie najbardziej skuteczne urządzenie na rynku.',
			effects:
			[
				'Aromaterapia',
				'Chromoterapia',
				'Elektrostymulacja',
				'Podczerwień IR',
				'Fotoodmładzanie LED Kolagen',
				'Koloroterapia'
			],
			imagePath: './assets/img/capsule_beauty_and_slim.png'
		}
      ];

    getDevices() {
        return this.devices.slice();
    }

    getCellulite() {
		var i = this.devices.length;
		while(i--) {
			if (this.devices[i] != undefined){
				if((this.devices[i].name !== 'Roll Shape') && (this.devices[i].name !== 'Activ Slim') && (this.devices[i].name !== 'Body Shape')) {
					this.devices.splice(i, 1);
				}
			}
		}
      return this.devices.slice();
	}

	getPregnat() {
		var i = this.devices.length;
		while(i--) {
			if (this.devices[i] != undefined){
				if((this.devices[i].name !== 'Roll Shape') && (this.devices[i].name !== 'Rower Horyzontalny') && (this.devices[i].name !== 'Body Shape') && (this.devices[i].name !== 'Activ Slim') && (this.devices[i].name !== 'Elektrosymulacja')) {
					this.devices.splice(i, 1);
				}
			}
		}
      return this.devices.slice();
	}

	getRegeneration() {
		var i = this.devices.length;
		while(i--) {
			if (this.devices[i] != undefined){
				if((this.devices[i].name !== 'SonoQueen') && (this.devices[i].name !== 'Kapsuła Slim & Beauty') && (this.devices[i].name !== 'Body Shape') && (this.devices[i].name !== 'Roll Shape') && (this.devices[i].name !== 'Activ Slim')) {
					this.devices.splice(i, 1);
				}
			}
		}
      return this.devices.slice();
	}

	getSlimming() {
		var i = this.devices.length;
		while(i--) {
			if (this.devices[i] != undefined){
				if((this.devices[i].name !== 'Rower Horyzontalny') && (this.devices[i].name !== 'Body Shape') && (this.devices[i].name !== 'Roll Shape') && (this.devices[i].name !== 'Activ Slim')) {
					this.devices.splice(i, 1);
				}
			}
		}
      return this.devices.slice();
	}

	getFirmness() {
		var i = this.devices.length;
		while(i--) {
			if (this.devices[i] != undefined){
				if((this.devices[i].name !== 'Elektrosymulacja') && (this.devices[i].name !== 'Roll Shape')) {
					this.devices.splice(i, 1);
				}
			}
		}
      return this.devices.slice();
	}
}