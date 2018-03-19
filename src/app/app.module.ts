import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SelectPipe } from './select.pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DevicesComponent } from './components/devices/devices.component';
import { CapsuleComponent } from './components/capsule/capsule.component';
import { RitualComponent } from './components/ritual/ritual.component';
import { DietComponent } from './components/diet/diet.component';
import { NewsComponent } from './components/news/news.component';
import { MassageComponent } from './components/massage/massage.component';
import { NailsComponent } from './components/nails/nails.component';
import { FranchiseComponent } from './components/franchise/franchise.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { ContactComponent } from './components/contact/contact.component';
import { CelluliteComponent } from './components/cellulite/cellulite.component';
import { PregnatComponent } from './components/pregnat/pregnat.component';
import { RegenerationComponent } from './components/regeneration/regeneration.component';
import { SlimmingComponent } from './components/slimming/slimming.component';
import { FirmnessComponent } from './components/firmness/firmness.component';
import { HairsComponent } from './components/hairs/hairs.component';
import { SalonsComponent } from './components/salons/salons.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { DeviceComponent } from './components/device/device.component';
import { SonoqueenComponent } from './components/sonoqueen/sonoqueen.component';
import { BooksyComponent } from './components/booksy/booksy.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MachineSpriteComponent } from './components/device/machine-sprite/machine-sprite.component';
import { MoveMachineDirective } from './shared/directive/move-machine.directive';
import { MachineDescComponent } from './components/device/machine-desc/machine-desc.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'aktualnosci', component: NewsComponent},
  { path: 'urzadzenia', component: DeviceComponent},
  { path: 'kapsula', component: CapsuleComponent},
  { path: 'rytual-piekna', component: RitualComponent},
  { path: 'dieta', component: DietComponent},
  { path: 'masaz', component: MassageComponent},
  { path: 'paznokcie', component: NailsComponent},
  { path: 'franczyza', component: FranchiseComponent},
  { path: 'medycyna-estetyczna', component: MedicineComponent},
  { path: 'kontakt', component: ContactComponent},
  { path: 'cellulit', component: CelluliteComponent},
  { path: 'po-ciazy', component: PregnatComponent},
  { path: 'odnowa', component: RegenerationComponent},
  { path: 'odchudzanie', component: SlimmingComponent},
  { path: 'jedrnosc', component: FirmnessComponent},
  { path: 'wlosy', component: HairsComponent},
  { path: 'nasze-salony', component: SalonsComponent},
  { path: 'sonoqueen', component: SonoqueenComponent},
  { path: 'rezerwacja', component: BooksyComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    DevicesComponent,
    CapsuleComponent,
    RitualComponent,
    DietComponent,
    MassageComponent,
    NailsComponent,
    FranchiseComponent,
    MedicineComponent,
    ContactComponent,
    CelluliteComponent,
    PregnatComponent,
    RegenerationComponent,
    SlimmingComponent,
    FirmnessComponent,
    HairsComponent,
    SalonsComponent,
    HeroImageComponent,
    DeviceComponent,
    SelectPipe,
    SonoqueenComponent,
    BooksyComponent,
    MachineSpriteComponent,
    MoveMachineDirective,
    MachineDescComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSliderModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

