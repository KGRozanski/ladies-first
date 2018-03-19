webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=app.component.css.map */\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\" style=\"margin-top: 70px;\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_pipe__ = __webpack_require__("./src/app/select.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_header_header_component__ = __webpack_require__("./src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_devices_devices_component__ = __webpack_require__("./src/app/components/devices/devices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_capsule_capsule_component__ = __webpack_require__("./src/app/components/capsule/capsule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ritual_ritual_component__ = __webpack_require__("./src/app/components/ritual/ritual.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_diet_diet_component__ = __webpack_require__("./src/app/components/diet/diet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_news_news_component__ = __webpack_require__("./src/app/components/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_massage_massage_component__ = __webpack_require__("./src/app/components/massage/massage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_nails_nails_component__ = __webpack_require__("./src/app/components/nails/nails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_franchise_franchise_component__ = __webpack_require__("./src/app/components/franchise/franchise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_medicine_medicine_component__ = __webpack_require__("./src/app/components/medicine/medicine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_contact_contact_component__ = __webpack_require__("./src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_cellulite_cellulite_component__ = __webpack_require__("./src/app/components/cellulite/cellulite.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_pregnat_pregnat_component__ = __webpack_require__("./src/app/components/pregnat/pregnat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_regeneration_regeneration_component__ = __webpack_require__("./src/app/components/regeneration/regeneration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_slimming_slimming_component__ = __webpack_require__("./src/app/components/slimming/slimming.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_firmness_firmness_component__ = __webpack_require__("./src/app/components/firmness/firmness.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_hairs_hairs_component__ = __webpack_require__("./src/app/components/hairs/hairs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_salons_salons_component__ = __webpack_require__("./src/app/components/salons/salons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_hero_image_hero_image_component__ = __webpack_require__("./src/app/components/hero-image/hero-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_device_device_component__ = __webpack_require__("./src/app/components/device/device.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_sonoqueen_sonoqueen_component__ = __webpack_require__("./src/app/components/sonoqueen/sonoqueen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_booksy_booksy_component__ = __webpack_require__("./src/app/components/booksy/booksy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material_slider__ = __webpack_require__("./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material_progress_spinner__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_device_machine_sprite_machine_sprite_component__ = __webpack_require__("./src/app/components/device/machine-sprite/machine-sprite.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__shared_directive_move_machine_directive__ = __webpack_require__("./src/app/shared/directive/move-machine.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_device_machine_desc_machine_desc_component__ = __webpack_require__("./src/app/components/device/machine-desc/machine-desc.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'aktualnosci', component: __WEBPACK_IMPORTED_MODULE_12__components_news_news_component__["a" /* NewsComponent */] },
    { path: 'urzadzenia', component: __WEBPACK_IMPORTED_MODULE_26__components_device_device_component__["a" /* DeviceComponent */] },
    { path: 'kapsula', component: __WEBPACK_IMPORTED_MODULE_9__components_capsule_capsule_component__["a" /* CapsuleComponent */] },
    { path: 'rytual-piekna', component: __WEBPACK_IMPORTED_MODULE_10__components_ritual_ritual_component__["a" /* RitualComponent */] },
    { path: 'dieta', component: __WEBPACK_IMPORTED_MODULE_11__components_diet_diet_component__["a" /* DietComponent */] },
    { path: 'masaz', component: __WEBPACK_IMPORTED_MODULE_13__components_massage_massage_component__["a" /* MassageComponent */] },
    { path: 'paznokcie', component: __WEBPACK_IMPORTED_MODULE_14__components_nails_nails_component__["a" /* NailsComponent */] },
    { path: 'franczyza', component: __WEBPACK_IMPORTED_MODULE_15__components_franchise_franchise_component__["a" /* FranchiseComponent */] },
    { path: 'medycyna-estetyczna', component: __WEBPACK_IMPORTED_MODULE_16__components_medicine_medicine_component__["a" /* MedicineComponent */] },
    { path: 'kontakt', component: __WEBPACK_IMPORTED_MODULE_17__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'cellulit', component: __WEBPACK_IMPORTED_MODULE_18__components_cellulite_cellulite_component__["a" /* CelluliteComponent */] },
    { path: 'po-ciazy', component: __WEBPACK_IMPORTED_MODULE_19__components_pregnat_pregnat_component__["a" /* PregnatComponent */] },
    { path: 'odnowa', component: __WEBPACK_IMPORTED_MODULE_20__components_regeneration_regeneration_component__["a" /* RegenerationComponent */] },
    { path: 'odchudzanie', component: __WEBPACK_IMPORTED_MODULE_21__components_slimming_slimming_component__["a" /* SlimmingComponent */] },
    { path: 'jedrnosc', component: __WEBPACK_IMPORTED_MODULE_22__components_firmness_firmness_component__["a" /* FirmnessComponent */] },
    { path: 'wlosy', component: __WEBPACK_IMPORTED_MODULE_23__components_hairs_hairs_component__["a" /* HairsComponent */] },
    { path: 'nasze-salony', component: __WEBPACK_IMPORTED_MODULE_24__components_salons_salons_component__["a" /* SalonsComponent */] },
    { path: 'sonoqueen', component: __WEBPACK_IMPORTED_MODULE_27__components_sonoqueen_sonoqueen_component__["a" /* SonoqueenComponent */] },
    { path: 'rezerwacja', component: __WEBPACK_IMPORTED_MODULE_28__components_booksy_booksy_component__["a" /* BooksyComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_devices_devices_component__["a" /* DevicesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_capsule_capsule_component__["a" /* CapsuleComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_ritual_ritual_component__["a" /* RitualComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_diet_diet_component__["a" /* DietComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_massage_massage_component__["a" /* MassageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_nails_nails_component__["a" /* NailsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_franchise_franchise_component__["a" /* FranchiseComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_medicine_medicine_component__["a" /* MedicineComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_cellulite_cellulite_component__["a" /* CelluliteComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_pregnat_pregnat_component__["a" /* PregnatComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_regeneration_regeneration_component__["a" /* RegenerationComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_slimming_slimming_component__["a" /* SlimmingComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_firmness_firmness_component__["a" /* FirmnessComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_hairs_hairs_component__["a" /* HairsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_salons_salons_component__["a" /* SalonsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_hero_image_hero_image_component__["a" /* HeroImageComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_device_device_component__["a" /* DeviceComponent */],
                __WEBPACK_IMPORTED_MODULE_3__select_pipe__["a" /* SelectPipe */],
                __WEBPACK_IMPORTED_MODULE_27__components_sonoqueen_sonoqueen_component__["a" /* SonoqueenComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_booksy_booksy_component__["a" /* BooksyComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_device_machine_sprite_machine_sprite_component__["a" /* MachineSpriteComponent */],
                __WEBPACK_IMPORTED_MODULE_33__shared_directive_move_machine_directive__["a" /* MoveMachineDirective */],
                __WEBPACK_IMPORTED_MODULE_34__components_device_machine_desc_machine_desc_component__["a" /* MachineDescComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_29__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_30__angular_material_slider__["a" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/booksy/booksy.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/booksy/booksy.component.html":
/***/ (function(module, exports) {

module.exports = "<iframe class=\"booksy\" src=\"https://booksy.net/widget/index.html?id=7595&lang=pl&country=pl&mode=dialog\"></iframe>"

/***/ }),

/***/ "./src/app/components/booksy/booksy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BooksyComponent = (function () {
    function BooksyComponent() {
    }
    BooksyComponent.prototype.ngOnInit = function () {
    };
    BooksyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-booksy',
            template: __webpack_require__("./src/app/components/booksy/booksy.component.html"),
            styles: [__webpack_require__("./src/app/components/booksy/booksy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BooksyComponent);
    return BooksyComponent;
}());



/***/ }),

/***/ "./src/app/components/capsule/capsule.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/capsule/capsule.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12 siteTitle\">\r\n        <h1>Kapsuła Beauty & Slim</h1>\r\n    </div>\r\n</div>\r\n<img alt=\"maszyny do ochudzania\" style=\"width: 100%;\" src=\"./assets/img/capsule/beautyAndSlim.jpg\"/>\r\n<div class=\"container-fluid\">\r\n    <h2>\r\n        5000 kalorii w 30 minut!\r\n    </h2>\r\n    <br/>\r\n    <h4>\r\n        To odchudzanie XXI wieku, innowacyjne urządzenie emitujące wiązki podczerwieni zintegrowani z aromaterapią, koloroterapia, elektrostymulacja i fototerapią ( odbudowa naczynek kolagenowych). Przyczynia się do modelowania sylwetki i odmładzania jednocześnie gwarantując osiagniecie doskonałej formy. Wszystkie funkcje działają jednocześnie co daje spotęgowany efekt i utratę nawet do 5000 kalorii w 30 minut.\r\n        Dodatkowe wzmocnienie efektów kapsuły specjalnie przygotowanymi maskami przyspieszjącymi spalanie tłuszczu i pozbycie się cellulitu, powoduje że jest to obecnie najbardziej skuteczne urządzenie na rynku.\r\n    </h4>\r\n    <br/>\r\n    <h4>\r\n        &bull; Aromaterapia<br/>\r\n        &bull; Chromoterapia<br/>\r\n        &bull; Elektrostymulacja<br/>\r\n        &bull; Podczerwień IR<br/>\r\n        &bull; Fotoodmładzanie LED Kolagen<br/>\r\n        &bull; Koloroterapia\r\n    </h4>\r\n</div>"

/***/ }),

/***/ "./src/app/components/capsule/capsule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapsuleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CapsuleComponent = (function () {
    function CapsuleComponent() {
    }
    CapsuleComponent.prototype.ngOnInit = function () {
    };
    CapsuleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-capsule',
            template: __webpack_require__("./src/app/components/capsule/capsule.component.html"),
            styles: [__webpack_require__("./src/app/components/capsule/capsule.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CapsuleComponent);
    return CapsuleComponent;
}());



/***/ }),

/***/ "./src/app/components/cellulite/cellulite.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cellulite/cellulite.component.html":
/***/ (function(module, exports) {

module.exports = "<app-devices [device]=\"device\"></app-devices>\r\n"

/***/ }),

/***/ "./src/app/components/cellulite/cellulite.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CelluliteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_devices_service__ = __webpack_require__("./src/app/shared/models/devices.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CelluliteComponent = (function () {
    function CelluliteComponent(devicesService) {
        this.devicesService = devicesService;
    }
    CelluliteComponent.prototype.ngOnInit = function () {
        this.device = this.devicesService.getCellulite();
    };
    CelluliteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-cellulite',
            template: __webpack_require__("./src/app/components/cellulite/cellulite.component.html"),
            styles: [__webpack_require__("./src/app/components/cellulite/cellulite.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_models_devices_service__["a" /* DevicesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_models_devices_service__["a" /* DevicesService */]])
    ], CelluliteComponent);
    return CelluliteComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <!-- WARSZAWA -->\r\n    <div class=\"col-lg-4 col-xs-12 map\">\r\n        <iframe \r\n            src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.4097754875447!2d21.020810315957515!3d52.14505717170001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471932625fdb51bd%3A0x93cfd87e4d0bbc63!2sMakol%C4%85gwy+25%2C+Warszawa!5e0!3m2!1spl!2spl!4v1474392993901\" \r\n            width=\"100%\" \r\n            height=\"500px\" \r\n            frameborder=\"0\"\r\n            style=\"border:0\" \r\n            allowfullscreen>\r\n        </iframe>\r\n    </div>\r\n    <div class=\"col-lg-2 col-xs-12 contactSection\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-xs-2 iconWrapper\">\r\n                <i class=\"fa fa-phone fa-2x iconContact\" aria-hidden=\"true\"></i>\r\n            </div>\r\n            <div class=\"col-lg-12 col-xs-10 anchor\">\r\n                <a href=\"tel:+48 698 811 000\">698-811-000</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-xs-2 iconWrapper\">\r\n                <i class=\"fa fa-envelope fa-2x iconContact\" aria-hidden=\"true\"></i>\r\n            </div>\r\n            <div class=\"col-lg-12 col-xs-10 anchor\">\r\n                <a href=\"mailto:studio-warszawa@ladies-first.pl\">studio-warszawa@ladies-first.pl</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-xs-2 iconWrapper\">\r\n                <i class=\"fa fa-location-arrow fa-2x iconContact\" aria-hidden=\"true\"></i>\r\n            </div>\r\n            <div class=\"col-lg-12 col-xs-10 anchor\">\r\n                <span>ul.Makolągwy 25 02-811 Warszawa</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-xs-2 iconWrapper\">\r\n                <i class=\"fa fa-clock-o fa-2x iconContact\" aria-hidden=\"true\"></i>\r\n            </div>\r\n            <div class=\"col-lg-12 col-xs-10 anchor\">\r\n                <span>Pon - Pt: 10:00 - 22:00 <br> Sob: 10:00 - 16:00</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- ŁÓDŹ -->\r\n    <div class=\"col-lg-4 col-xs-12 map\">\r\n        <iframe \r\n            src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2076.9243192349736!2d19.482049152674215!3d51.75327688012906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a34b61627678b%3A0x61390351389e5eab!2sKsi%C4%99dza+Biskupa+Wincentego+Tymienieckiego+25c%2C+90-350+%C5%81%C3%B3d%C5%BA!5e0!3m2!1spl!2spl!4v1519412490460\"\r\n            width=\"100%\" \r\n            height=\"500px\" \r\n            frameborder=\"0\"\r\n            style=\"border:0\" \r\n            allowfullscreen>\r\n        </iframe>\r\n    </div>\r\n    <div class=\"col-lg-2 col-xs-12 contactSection\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-xs-2 iconWrapper\">\r\n                <i class=\"fa fa-phone fa-2x iconContact\" aria-hidden=\"true\"></i>\r\n            </div>\r\n            <div class=\"col-lg-12 col-xs-10 anchor\">\r\n                <a href=\"tel:+48 512-873-838\">512-873-838</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-xs-2 iconWrapper\">\r\n                <i class=\"fa fa-envelope fa-2x iconContact\" aria-hidden=\"true\"></i>\r\n            </div>\r\n            <div class=\"col-lg-12 col-xs-10 anchor\">\r\n                <a href=\"mailto:studio-lodz@ladies-first.pl\">studio-lodz@ladies-first.pl</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-xs-2 iconWrapper\">\r\n                <i class=\"fa fa-location-arrow fa-2x iconContact\" aria-hidden=\"true\"></i>\r\n            </div>\r\n            <div class=\"col-lg-12 col-xs-10 anchor\">\r\n                <span>ul. Tymienieckiego 25C/311 90-350</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-xs-2 iconWrapper\">\r\n                <i class=\"fa fa-clock-o fa-2x iconContact\" aria-hidden=\"true\"></i>\r\n            </div>\r\n            <div class=\"col-lg-12 col-xs-10 anchor\">\r\n                <span>Pon - Pt: 9:00 - 22:00 <br> Sob: 9:00 - 16:00</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"col-lg-4 col-xs-12\">\r\n        <div\r\n\t\t\tdata-href=\"https://www.facebook.com/ladiesfirst.warszawa/\"\r\n\t\t\tdata-small-header=\"false\"\r\n\t\t\tdata-hide-cover=\"false\" \r\n\t\t\tdata-show-facepile=\"true\"\r\n            data-adapt-container-width=\"true\"\r\n\t\t\t>\r\n\t\t\t<blockquote cite=\"https://www.facebook.com/ladiesfirst.warszawa/\" class=\"fb-xfbml-parse-ignore\">\r\n\t\t\t\t<a href=\"https://www.facebook.com/ladiesfirst.warszawa/\">Ladies First: Profesjonalne Studio Modelowania Sylwetki</a>\r\n\t\t\t</blockquote>\r\n\t\t</div>\r\n    </div> -->\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/device/device.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/device/device.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row display-flex\">\r\n    <div class=\"col-lg-3 col-md-6 col-xs-12\" *ngFor=\"let ids of machineIds\">\r\n        \r\n        <app-machine-sprite [id]=\"ids.id\" (value)=\"onChange($event)\"></app-machine-sprite>\r\n        <app-machine-desc class=\"desc\" [name]=\"ids.name\" [desc]=\"ids.desc\"></app-machine-desc>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/device/device.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeviceComponent = (function () {
    function DeviceComponent() {
        this.machineIds = [];
        this.machineIds.push({ id: "bicycle", name: "Body Shape", desc: "Podczas ćwiczeń i panujących w kapsule podciśnieniem oraz podczerwieni dochodzi do usprawnienia przepływu krwi w organizmie i szybszego spalania tłuszczu w okolicach brzucha, talii, pośladków oraz ud." });
        this.machineIds.push({ id: "infrashape", name: "Infra Shape", desc: "To rewolucyjne połączenie roweru oraz kapsuły łączącej w sobie wszystkie funkcje Body Shape, dzięki czemu odciąża kręgosłup i stawy, pozwalając uzyskać lepszą wydolność podczas ćwiczeń." });
        this.machineIds.push({ id: "rollshape", name: "Roll Shape", desc: "Głownym celem jest uzyskanie szczupłej wymodelowanej sylwetki w bardzo krótkim czasie. Inspiracją dla stworzenia Roll Shape był rolki drewniane wykorzystywane w Dynastii Ming." });
        this.machineIds.push({ id: "vibrashape", name: "Vibra Shape", desc: "Urządzenie opiera się na stymulacji nerwowo mięśniowej przez drgania mechaniczne. Do treningu zastosowano drgania, które mają stymulacyjny wpływ na nasze tkanki, takie jak mięśnia, ścięgna więzadła, kości, skóra." });
    }
    DeviceComponent.prototype.ngOnInit = function () {
    };
    DeviceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-device',
            template: __webpack_require__("./src/app/components/device/device.component.html"),
            styles: [__webpack_require__("./src/app/components/device/device.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeviceComponent);
    return DeviceComponent;
}());



/***/ }),

/***/ "./src/app/components/device/machine-desc/machine-desc.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/device/machine-desc/machine-desc.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{name}}</h1>\n<p>{{desc}}</p>"

/***/ }),

/***/ "./src/app/components/device/machine-desc/machine-desc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MachineDescComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MachineDescComponent = (function () {
    function MachineDescComponent() {
    }
    MachineDescComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], MachineDescComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], MachineDescComponent.prototype, "desc", void 0);
    MachineDescComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-machine-desc',
            template: __webpack_require__("./src/app/components/device/machine-desc/machine-desc.component.html"),
            styles: [__webpack_require__("./src/app/components/device/machine-desc/machine-desc.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MachineDescComponent);
    return MachineDescComponent;
}());



/***/ }),

/***/ "./src/app/components/device/machine-sprite/machine-sprite.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/device/machine-sprite/machine-sprite.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"deviceHolder center-block\">\n  <div class=\"device360\" id=\"{{this.id}}\" ></div>\n  <mat-slider class=\"slider\" min=\"1\" max=\"145\" step=\"1\" value=\"1\" [rotate]=\"rotate\" id=\"{{this.id}}\" (input)=\"valueChange($event)\" appMoveMachine></mat-slider>\n</div>"

/***/ }),

/***/ "./src/app/components/device/machine-sprite/machine-sprite.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MachineSpriteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MachineSpriteComponent = (function () {
    function MachineSpriteComponent() {
    }
    MachineSpriteComponent.prototype.valueChange = function (event) {
        this.rotate = event.value;
    };
    MachineSpriteComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], MachineSpriteComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('rotate'),
        __metadata("design:type", Number)
    ], MachineSpriteComponent.prototype, "rotate", void 0);
    MachineSpriteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-machine-sprite',
            template: __webpack_require__("./src/app/components/device/machine-sprite/machine-sprite.component.html"),
            styles: [__webpack_require__("./src/app/components/device/machine-sprite/machine-sprite.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MachineSpriteComponent);
    return MachineSpriteComponent;
}());



/***/ }),

/***/ "./src/app/components/devices/devices.component.css":
/***/ (function(module, exports) {

module.exports = "table {\r\n  font-size: 34px; }\r\ntable tr {\r\n  border-bottom: 1px solid #000; }\r\ntable tr:last-child {\r\n  border: none; }\r\ntable td {\r\n  border: none; }\r\ntable td:last-child {\r\n  border-left: 1px solid #000; }\r\n"

/***/ }),

/***/ "./src/app/components/devices/devices.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngFor=\"let devices of device\">\r\n    <div class=\"col-lg-6\">\r\n        <img src=\"{{devices.imagePath}}\" alt=\"{{devices.name}}\" class=\"img-responsive\">\r\n        <table>\r\n            <tr>\r\n                <td>1 wejście</td>\r\n                <td>{{devices.oneEnterenceFee}}PLN</td>\r\n            </tr>\r\n            <tr>\r\n                <td>5 wejściówek</td>\r\n                <td>{{devices.fiveEnterenceFee}}PLN</td>\r\n            </tr>\r\n            <tr>\r\n                <td>10 wejściówek</td>\r\n                <td>{{devices.tenEnterenceFee}}PLN</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"col-lg-6 benefits-list\">\r\n        <h1>{{devices.name}}</h1>\r\n        <p>{{devices.description}}</p>\r\n        <ol>\r\n            <li *ngFor=\"let effect of devices.effects\">{{effect}}</li>\r\n        </ol>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/devices/devices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DevicesComponent = (function () {
    function DevicesComponent() {
    }
    DevicesComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], DevicesComponent.prototype, "device", void 0);
    DevicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-devices',
            template: __webpack_require__("./src/app/components/devices/devices.component.html"),
            styles: [__webpack_require__("./src/app/components/devices/devices.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ }),

/***/ "./src/app/components/diet/diet.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/diet/diet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12 siteTitle\">\r\n        <h1>Dieta</h1>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-lg-offset-2 col-lg-8 col-md-offset-1 col-md-10 col-xs-12\">\r\n    <h2>Specjalnie dla Ciebie</h2>\r\n    <h3>\r\n      przygotujemy dwutygodniową dietę, którą otrzymasz przy zakupie pakietu treningowego.\r\n      To Ty decydujesz jak restrykcyjna ma być dieta i jaki cel sobie postawiłaś.\r\n      Jeśli chcesz stracić na wadze bez szkody dla swojego zdrowia, stosuj się do następujących wskazówek:\r\n    </h3>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-lg-offset-1 col-lg-5 col-xs-12 dietList\">\r\n    <ul>\r\n      <li>Codziennie spożywaj 4-5 posiłków, regularnie, co 3-4 godziny.</li>\r\n      <li>Pij co najmniej 2 litry wody dziennie ( zwiększa ona metabolizm o 30% oraz oczyszcza organizm z toksyn).</li>\r\n      <li>Każdy z posiłków powinien w składać się z białka, warzyw i złożonych węglowodanów.</li>\r\n      <li>Posiłki powinny być małe objętościowo, ale częste by nie dopuścić do uczucia głodu. (jedząc częściej – chudniesz).</li>\r\n      <li>Spożywaj produkty zdrowe, nieprzetworzone i świeże.</li>\r\n      <li>Unikaj gotowych dań, produktów typu fast food, posiłków typu instant (dania z torebki).</li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"col-lg-6 col-xs-12 dietList\">\r\n    <ul>\r\n      <li>Pamiętaj o codziennym spożywaniu śniadania! Posiłek ten powinien być zjedzony w ciągu godziny po przebudzeniu. Śniadanie rozpędza Twój metabolizm na cały dzień.</li>\r\n      <li>Nie podjadaj między posiłkami.</li>\r\n      <li>Unikaj słodyczy oraz słodkich i gazowanych napoi.</li>\r\n      <li>Unikaj słodzenia kawy i herbaty, dzięki temu zmniejszysz magazynowanie tłuszczu w organizmie.</li>\r\n      <li>Nie jedz podrobów, tłustych serów (sery żółte) i mięsa wieprzowego oraz ściągaj skórę z mięsa drobiowego!</li>\r\n      <li>Unikaj produktów mącznych, zastępuj je warzywami, zwłaszcza zielonymi i liściastymi.</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/diet/diet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DietComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DietComponent = (function () {
    function DietComponent() {
    }
    DietComponent.prototype.ngOnInit = function () {
    };
    DietComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-diet',
            template: __webpack_require__("./src/app/components/diet/diet.component.html"),
            styles: [__webpack_require__("./src/app/components/diet/diet.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DietComponent);
    return DietComponent;
}());



/***/ }),

/***/ "./src/app/components/firmness/firmness.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/firmness/firmness.component.html":
/***/ (function(module, exports) {

module.exports = "<app-devices [device]=\"device\"></app-devices>"

/***/ }),

/***/ "./src/app/components/firmness/firmness.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmnessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_devices_service__ = __webpack_require__("./src/app/shared/models/devices.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirmnessComponent = (function () {
    function FirmnessComponent(devicesService) {
        this.devicesService = devicesService;
    }
    FirmnessComponent.prototype.ngOnInit = function () {
        this.device = this.devicesService.getFirmness();
    };
    FirmnessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-firmness',
            template: __webpack_require__("./src/app/components/firmness/firmness.component.html"),
            styles: [__webpack_require__("./src/app/components/firmness/firmness.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_models_devices_service__["a" /* DevicesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_models_devices_service__["a" /* DevicesService */]])
    ], FirmnessComponent);
    return FirmnessComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=footer.component.css.map */\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n\t<div class=\"row margin-default\">\r\n\t\t<div class=\"col-lg-4 col-12 col-sm-8\">\r\n\t\t\t<!-- <div\r\n\t\t\tdata-href=\"https://www.facebook.com/ladiesfirst.warszawa/\"\r\n\t\t\tdata-small-header=\"false\"\r\n\t\t\tdata-hide-cover=\"false\" \r\n\t\t\tdata-show-facepile=\"true\"\r\n\t\t\tdata-adapt-container-width=\"true\"\r\n\t\t\t>\r\n\t\t\t<blockquote cite=\"https://www.facebook.com/ladiesfirst.warszawa/\" class=\"fb-xfbml-parse-ignore\">\r\n\t\t\t\t<a href=\"https://www.facebook.com/ladiesfirst.warszawa/\">Ladies First: Profesjonalne Studio Modelowania Sylwetki</a>\r\n\t\t\t</blockquote>\r\n\t\t\t</div> -->\r\n\t\t</div>\r\n\t\t<div class=\"col-md-3 col-lg-4 col-12 col-sm-4\">\r\n\t\t\t<img class=\"footer-logo\" src=\"assets/img/lady_logo.png\" alt=\"ladies-first\" height=\"216px\">\r\n\t\t</div>\r\n\t\t<div class=\"col-md-12 col-xs-12 col-lg-4 contact-info\">\r\n\t\t\t<br>\r\n\t\t\t<h3>Zadzwoń i zapisz się</h3>\r\n\t\t\t<p>\r\n\t\t\t\t<i class=\"fa fa-phone fa-2x\" aria-hidden=\"true\" style=\"margin-right: 10px;\"></i><a href=\"tel:+48 698 811 000\">698-811-000</a><br>\r\n\t\t\t\t<i class=\"fa fa-envelope fa-2x\" aria-hidden=\"true\" style=\"margin-right: 10px;\"></i><a href=\"mailto:studio-warszawa@ladies-first.pl\">studio-warszawa@ladies-first.pl</a><br>\r\n\t\t\t\t<i class=\"fa fa-location-arrow fa-2x\" aria-hidden=\"true\" style=\"margin-right: 10px;\"></i><span class=\"font-bigger-footer\">ul.Makolągwy 25 <br> 02-811 Warszawa</span>\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<p>Copyright © Ladies First - 2017 - <a href=\"regulamin.html\" target=\"_blank\" style=\"color: red;\">Regulamin</a></p>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/franchise/franchise.component.css":
/***/ (function(module, exports) {

module.exports = ".add-padding {\r\n  padding: 0 10%; }\r\n\r\n.pad {\r\n  padding: 3%; }\r\n\r\n.icon {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  font-size: 250px;\r\n  color: #000;\r\n  opacity: 0.15; }\r\n\r\n.benefits {\r\n  color: #fff;\r\n  text-align: center;\r\n  padding: 20px; }\r\n\r\n.benefits h4 {\r\n    font-size: 30px;\r\n    margin-top: 10px;\r\n    text-align: center; }\r\n\r\n.benefits:nth-last-child(n+3) {\r\n    padding-bottom: 0; }\r\n\r\n.benefits-inner {\r\n  height: 250px;\r\n  border-radius: 2px;\r\n  position: relative;\r\n  background-color: rgba(132, 76, 130, 0.85); }\r\n\r\n.benefits-wrapper {\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%); }\r\n\r\np {\r\n  font-size: 20px;\r\n  padding: 0 15px; }\r\n\r\nb {\r\n  color: #844C82; }\r\n\r\n.benefits-area {\r\n  position: relative;\r\n  background-image: url('pik_100.050aca44e559a8b48061.jpg'); }\r\n\r\n#waypoint2 {\r\n  position: relative;\r\n  margin-left: 50%; }\r\n\r\n.inset-shadow {\r\n  -webkit-box-shadow: inset 1px 1px 5px 0px rgba(0, 0, 0, 0.75);\r\n  box-shadow: inset 1px 1px 5px -3px rgba(0, 0, 0, 0.75); }\r\n\r\n/*# sourceMappingURL=franchise.component.css.map */\r\n"

/***/ }),

/***/ "./src/app/components/franchise/franchise.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<img alt=\"studio urody\" src=\"assets/img/franczyza.jpg\" style=\"width: 100%;\"/>\r\n</div>\r\n<div id=\"waypoint2\"></div>\r\n<div class=\"row add-padding\">\r\n\t<div class=\"col-xs-12\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-5 col-xs-12 pad\">\r\n\t\t\t\t<h1><b id=\"zl\">0</b> ZŁOTYCH</h1>\r\n\t\t\t\t<p>tyle kosztuje pakiet dzięki któremu klientki mogą wejść do świata zabiegów modelujących, odchudzających i pielęgnujący</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-5 col-xs-12 col-md-offset-2 pad\">\r\n\t\t\t\t<h1><b id=\"m\">0</b> METRÓW KWADRATOWYCH</h1>\r\n\t\t\t\t<p>taka powierzchnia wystarczy, by stworzyć unikatowe miejsce dla kobiet XXI wieku</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-5 col-xs-12 pad\">\r\n\t\t\t\t<h1><b id=\"client\">0</b> KLIENTÓW <br> W MIESIĄCU</h1>\r\n\t\t\t\t<p>średnio tyle klientek odwiedza miesięcznie Studio</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-5 col-xs-12 col-md-offset-2 pad\">\r\n\t\t\t\t<h1><b id=\"profit\">0</b> ŚREDNI <br>POZIOM ZYSKU</h1>\r\n\t\t\t\t<p>Know How i zaangażowanie franczyzobiorcy przekłada się na konkretny zysk</p>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\t</div>\t\r\n</div>\r\n\r\n<div class=\"row benefits-area\">\r\n\t<div class=\"col-lg-4 col-md-6 col-xs-12 benefits\">\r\n\t\t<div class=\"benefits-inner inset-shadow\">\r\n\t\t\t<i class=\"fa fa-money icon\" aria-hidden=\"true\"></i>\t\t\t\t\r\n\t\t\t<div class=\"benefits-wrapper\">\r\n\t\t\t\t<h4>GWARANCJA  RENTOWNOŚCI</h4>\r\n\t\t\t\t<p>Każdy franczyzobiorca otrzymuje gwarancję rentowności, która umożliwia osiągnięcie zysku już w pierwszym miesiącu i zwrot inwestycji po roku działalności.</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-lg-4 col-md-6 col-xs-12 benefits\">\r\n\t\t<div class=\"benefits-inner inset-shadow\">\r\n\t\t\t<i class=\"fa fa-line-chart icon\" aria-hidden=\"true\"></i>\t\t\t\t\r\n\t\t\t<div class=\"benefits-wrapper\">\r\n\t\t\t\t<h4>SPRAWDZONY MODEL BIZNESU</h4>\r\n\t\t\t\t<p>Rekomendacje i zadowolenie kobiet to nasza najlepsza wizytówka, sprawdzony know-how wraz z zaleceniami centrali gwarantuje zysk z inwestycji już w pierwszym miesiącu.</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-lg-4 col-md-6 col-xs-12 benefits\">\r\n\t\t<div class=\"benefits-inner inset-shadow\">\r\n\t\t\t<i class=\"fa fa-handshake-o icon\" aria-hidden=\"true\"></i>\t\t\t\t\r\n\t\t\t<div class=\"benefits-wrapper\">\r\n\t\t\t\t<h4>WSPARCIE BIZNESU</h4>\r\n\t\t\t\t<p>Wspieramy naszych franczyzobiorców na każdym kroku, każdego dnia udzielamy niezbędnych porad  i wskazówek do prowadzenia biznesu.</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-lg-4 col-md-6 col-xs-12 benefits\">\r\n\t\t<div class=\"benefits-inner inset-shadow\">\r\n\t\t\t<div class=\"benefits-wrapper\">\r\n\t\t\t\t<i class=\"fa fa-newspaper-o icon\" aria-hidden=\"true\"></i>\t\t\t\t\t\r\n\t\t\t\t<h4>MARKETING</h4>\r\n\t\t\t\t<p>Dostarczamy naszym franczyzobiorcom najlepsze materiały i techniki marketingowe dopasowane do potrzeb klientek.</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-lg-4 col-md-6 col-xs-12 benefits\">\r\n\t\t<div class=\"benefits-inner inset-shadow\">\r\n\t\t\t<i class=\"fa fa-book icon\" aria-hidden=\"true\"></i>\t\t\t\t\r\n\t\t\t<div class=\"benefits-wrapper\">\r\n\t\t\t\t<h4>SZKOLENIA I WIEDZA</h4>\r\n\t\t\t\t<p>Jako franczyzobiorca, zyskujesz wiedzę i dostęp do szkoleń u najlepszych trenerów i specjalistów.</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-lg-4 col-md-6 col-xs-12 benefits\">\r\n\t\t<div class=\"benefits-inner inset-shadow\">\r\n\t\t\t<i class=\"fa fa-life-ring icon\" aria-hidden=\"true\"></i>\t\t\t\t\r\n\t\t\t<div class=\"benefits-wrapper\">\r\n\t\t\t\t<h4>WSPARCIE PARTNERÓW</h4>\r\n\t\t\t\t<p>Zyskujesz wsparcie specjalistów, którzy pomogą odnieść ci sukces.</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/franchise/franchise.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FranchiseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FranchiseComponent = (function () {
    function FranchiseComponent(_elRef) {
        this._elRef = _elRef;
    }
    FranchiseComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            var animated = 0;
            $('#waypoint2').waypoint({
                handler: function () {
                    if (animated == 0) {
                        animate();
                    }
                },
                offset: 300
            });
            function animate() {
                animateValue('zl', 0, 450, 1000);
                animateValue('m', 0, 120, 1000);
                animateValue('client', 0, 250, 1000);
                animateValue('profit', 0, 20000, 1000);
                animated++;
            }
            function animateValue(id, start, end, duration) {
                // assumes integer values for start and end
                var obj = $('#' + id + '');
                var range = end - start;
                // no timer shorter than 50ms (not really visible any way)
                var minTimer = 50;
                // calc step time to show all interediate values
                var stepTime = Math.abs(Math.floor(duration / range));
                // never go below minTimer
                stepTime = Math.max(stepTime, minTimer);
                // get current time and calculate desired end time
                var startTime = new Date().getTime();
                var endTime = startTime + duration;
                var timer;
                function run() {
                    var now = new Date().getTime();
                    var remaining = Math.max((endTime - now) / duration, 0);
                    var value = Math.round(end - (remaining * range));
                    obj.html(value);
                    if (value == end) {
                        clearInterval(timer);
                    }
                }
                timer = setInterval(run, stepTime);
                run();
            }
        });
    };
    FranchiseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-franchise',
            template: __webpack_require__("./src/app/components/franchise/franchise.component.html"),
            styles: [__webpack_require__("./src/app/components/franchise/franchise.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], FranchiseComponent);
    return FranchiseComponent;
}());



/***/ }),

/***/ "./src/app/components/hairs/hairs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/hairs/hairs.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\r\n    <img alt=\"studio urody\" src=\"assets/img/trycho.jpg\" style=\"width: 100%\"/>\r\n</div> -->\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12 siteTitle\">\r\n        <h1>Włosy</h1>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-lg-offset-1 col-lg-5 col-xs-12 list\">\r\n        <h3>Jeśli Cierpisz na:</h3>\r\n        <ul>\r\n            <li>Okresowe lub przewlekłe wypadanie włosów</li>\r\n            <li>Łojotok skóry głowy</li>\r\n            <li>Łupież suchy</li>\r\n            <li>Podrażnienie i stany zapalne skóry</li>\r\n            <li>Wrażliwa i sucha skóra głowy</li>\r\n            <li>Łamliwe i kruche pozbawione blasku włosy</li>\r\n        </ul>\r\n        <p>To znak że powinnaś wybrać się na konsultację trychologiczną, podczas której dobierzemy odpowiedni program rewitalizujący i dobierzemy kosmetyki do pielęgnacji domowej, wzmacniające efekt.</p>\r\n    </div>\r\n    <div class=\"col-lg-5 col-xs-12 list\">\r\n        <h3>Wykonujemy zabiegi:</h3>\r\n        <ul>\r\n            <li>Peeling Skóry głowy</li>\r\n            <li>Zabiegi przeciw wypadaniu włosów</li>\r\n            <li>Zabiegi stymulujący wzrost włosów</li>\r\n            <li>Zabiegi przeciw łojotokowi skóry głowy</li>\r\n            <li>Zabiegi przeciw łupieżowe</li>\r\n            <li>Zabieg łagodzący na podrażnioną skórę głowy</li>\r\n            <li>Zabiegi intensywnie regenerujące</li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<div class=\"row drCyj\">\r\n    <div class=\"col-lg-12\">\r\n       <h2>Zabiegi specjalne - dr.Cyj</h2>\r\n       <div class=\"col-lg-offset-1 col-lg-5 col-xs-12\">\r\n            <h3>Zabieg</h3>\r\n            <p>\r\n                Ile trwa pojedynczy zabieg (bez znieczulenia lub ze znieczuleniem, jakim)?\r\n                ​<br><br>\r\n                Cały zabieg trwa ok. 30 min. Jest praktycznie bezbolesny i nie wymaga znieczulenia.\r\n                Ile trwa cała kuracja, czyli ilu powtórek wymaga zabieg, w jakim odstępie czasu?\r\n                ​<br><br>\r\n                Terapia trwa 2 miesiące i wymaga 4 sesji w odstępach co 2 tygodnie. Dla podtrzymania efektu zaleca się zabieg przypominający po 6 miesiącach.\r\n                Przebieg zabiegu krok po kroku, czy wymaga przygotowania się, czy boli?\r\n                ​<br><br>\r\n                Zabieg nie wymaga specjalnego przygotowania, jedynie dzień przed zabiegiem i po zabiegu nie wskazane jest picie alkoholu. Zabieg z wykorzystaniem preparatu DR.CYJ Hair Filler polega na wykonaniu serii wkłuć w skórę głowy\r\n                w powierzchniowe warstwy skóry właściwej. Zabieg jest praktycznie bezbolesny, ponieważ w przeciwieństwie do mezoterapii wymaga mniej wkłuć. Lekarz podaje niewielką ilość preparatu, dzięki czemu nie jest tak odczuwalny dla skóry głowy.                    \r\n            </p>\r\n       </div>\r\n       <div class=\"col-lg-5 col-xs-12\">\r\n            <img class=\"center-block img-responsive peptydowaTerapiaWlosow\" src=\"assets/img/hairs/drCyj.jpg\" alt=\"Zabiegi Specjalne DrCyj\">\r\n       </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-offset-1 col-lg-5 col-xs-12\">\r\n        <img class=\"img-responsive center-block\" src=\"assets/img/hairs/drCyj2.jpg\" alt=\"DrCyj Odbudowa Cebulek\">\r\n    </div>\r\n    <div class=\"col-lg-5 col-xs-12 list\">\r\n        <h2>Jakiego efektu możemy się spodziewać, po jakim czasie od zabiegu?</h2>\r\n        <p>Już pierwszy zabieg zatrzymuje wypadanie włosów. Natomiast kolejne zabiegi pobudzają krążenie i rewitalizują mieszki włosowe przyspieszając odrost włosów.</p>\r\n\r\n        <h2>Jak długo efekt jest widoczny?</h2>\r\n        <p>Efekt jest widoczny przez rok. Po tym okresie terapię należy powtórzyć.</p>\r\n\r\n        <ul>\r\n            <li>Powstrzymuje wypadanie włosów</li>\r\n            <li>Skuteczny w walce z alopecją</li>\r\n            <li>Przyspiesza odrost włosów</li>\r\n            <li>Pogrubia i zagęszcza włosy</li>\r\n            <li>Pobudza krążenie i poprawia ukrwienie skóry głowy</li>\r\n            <li>Rewitalizuje mieszki włosowe</li>\r\n            <li>Pielęgnuje skórę głowy</li>\r\n            <li>Wzmacnia włosy przed i po przeszczepi</li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<div class=\"row drCyj\">\r\n    <h2>Zabiegi Specjalne - Infuzja tlenowa skóry głowy</h2>\r\n    <div class=\"col-lg-offset-1 col-lg-5 col-xs-12\">\r\n        <p>\r\n            <br><br>\r\n            Procedura infuzji tlenowej skóry głowy w trychologii jest oparta na działaniu cząsteczek O2. Skoncentrowany tlen charakteryzuje się całym wachlarzem pozytywnych działań i efektów. Każda komórka naszego ciała potrzebuje do życia tlenu, skóra głowy również. \r\n            Terapeutyczne zabiegi tlenowe polecane są w szczególności osobom, które borykają się z wypadaniem włosów, ich osłabieniem, problemami łojotokowymi lub różnego rodzaju schorzeniami z  podłożem nadmiernej keratynizacji. \r\n            <br><br>\r\n            Zabieg infuzji tlenowej polega na równoczesnym wtłaczaniu w skórę głowy wysoko sprężonego tlenu cząsteczkowego oraz składników aktywnych, które to są niejako przemycane w głąb skóry, dzięki zastosowaniu wysokiego ciśnienia.\r\n        </p>\r\n    </div>\r\n    <div class=\"col-lg-5 col-xs-12\">\r\n        <h3>Jakiego efektu możemy się spodziewać?​</h3>\r\n        <p>\r\n            Bardzo dobre rezultaty uzyskamy wykonując zabieg osobom, które prowadzą niezdrowy tryb życia. Transport tlenu odbywa się wolniej, krew nie jest wysoko wysycona cząsteczkami O2. Do mieszka włosowego, dociera niewielką ilość tlenu więc jego rozwój jest spowolniony a w wielu wypadkach całkowicie zatrzymany.\r\n            <br><br>\r\n            Niewątpliwym atutem infuzji tlenowej skóry głowy jest bezinwazyjna procedura zabiegowa, brak przerwania ciągłości naskórka, brak powikłań i skutków ubocznych. Zabiegi nie wymagają rekonwalescencji i mogą być wykonywane przez cały rok.\r\n        </p>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-offset-1 col-lg-5 col-xs-12\">\r\n        <p>\r\n            Pierwsze polskie preparaty trychologiczne do profesjonalnych zabiegów w gabinetach i pielęgnacji domowej, opracowane w laboratorium badawczym BANDI przez ekspertów w dziedzinie pielęgnacji skóry głowy.\r\n            <br><br>\r\n            Linia Tricho-esthetic została opracowana na najczęstsze problemy skóry głowy i włosów, aby uzupełniać terapię farmakologiczną, zwiększać jej skuteczność i wydłużać efektywność leczenia dla zdrowych, mocnych i pięknych włosów.Pierwsze polskie preparaty trychologiczne do profesjonalnych zabiegów w gabinetach i pielęgnacji domowej.\r\n            <br><br>\r\n            Pierwsze silnie skoncentrowane aktywne ekstrakty w połączeniu z prowitaminą D3 na najczęstsze problemy skóry głowy dla silnych i zdrowych włosów.\r\n            <br>\r\n            Opracowane we współpracy z prekursorką Trychologii w Polsce Kingą Esterą Jach-Skrzypczak założycielkę Międzynarodowego Stowarzyszenia Trychologii Estetycznej (ISAT).\r\n        </p>\r\n    </div>\r\n    <div class=\"col-lg-5 col-xs-12\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-xs-12 list\">\r\n                <ul>\r\n                    <li>Nadmierne wypadanie włosów</li>\r\n                    <li>Łupież suchy</li>\r\n                    <li>Łupież tłusty</li>\r\n                    <li>Sucha i wrażliwa skóra głowy</li>\r\n                    <li>Łojotok skóry głowy</li>\r\n                    <li>Kruche i łamliwe włosy</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-lg-6 col-xs-12\">\r\n                <img class=\"img-responsive center-block\" src=\"assets/img/hairs/bandi.jpg\" alt=\"kruche i łamliwe włosy\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/hairs/hairs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HairsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HairsComponent = (function () {
    function HairsComponent() {
    }
    HairsComponent.prototype.ngOnInit = function () {
    };
    HairsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-hairs',
            template: __webpack_require__("./src/app/components/hairs/hairs.component.html"),
            styles: [__webpack_require__("./src/app/components/hairs/hairs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HairsComponent);
    return HairsComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "a {\r\n  font-weight: bold; }\r\n\r\n.open-arrow {\r\n  position: absolute;\r\n  top: 9px;\r\n  left: 9px; }\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"fb-root\"></div>\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"navbar-header\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n\t\t\t<button type=\"button\" class=\"navbar-toggle box-transition\" data-toggle=\"collapse\" data-target=\"#ladie-navbar\" id=\"navbar-toggle\">\r\n\t\t\t\t<i class=\"fa fa-chevron-up fa-lg open-arrow\" aria-hidden=\"true\"></i>\r\n\t\t\t</button>\r\n\t\t\t<a class=\"navbar-brand\" routerLink=\"/\" >\r\n\t\t\t\t<img class=\"pull-left img-circle\" src=\"assets/img/lady_logo.png\" alt=\"ladies-first\" height=\"50px\">\r\n\t\t \t</a>\r\n\t\t\t <span class=\"title\" routerLink=\"/\">\r\n\t\t\t\t<div class=\"title-inner\">\r\n\t\t\t\t\t<span class=\"shiny\">\r\n\t\t\t\t\t\t<span class=\"inner-shiny\">LADIES FIRST</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t\t<div class=\"collapse navbar-collapse\" id=\"ladie-navbar\">\r\n\t\t\t<ul class=\"nav navbar-nav navbar-right\">\r\n\t\t\t\t<!-- <li routerLinkActive=\"active\">\r\n\t\t\t\t\t<a routerLink=\"aktualnosci\">AKTUALNOŚCI</a>\r\n\t\t\t\t</li> -->\r\n\t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"kontakt\">KONTAKT</a></li>\r\n\t\t\t\t<li class=\"dropdown\" routerLinkActive=\"active\">\r\n\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\">OFERTA<span class=\"caret\"></span></a>\r\n\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t<li><a routerLink=\"urzadzenia\">URZĄDZENIA</a></li>\r\n\t\t\t\t\t\t<li><a routerLink=\"dieta\">DIETA</a></li>\r\n\t\t\t\t\t\t<li><a routerLink=\"rytual-piekna\">RYTUAŁ PIĘKNA</a></li>\r\n\t\t\t\t\t\t<li><a routerLink=\"kapsula\">KAPSUŁA BEAUTY & SLIM</a></li>\r\n\t\t\t\t\t\t<li><a routerLink=\"paznokcie\">PAZNOKCIE</a></li>\r\n\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t  \t\t\t<li><a routerLink=\"cellulit\">CELLULIT</a></li>\r\n\t\t\t  \t\t\t<li><a routerLink=\"po-ciazy\">PO CIĄŻY</a></li>\r\n\t\t\t  \t\t\t<li><a routerLink=\"odnowa\">ODNOWA</a></li>\r\n\t\t\t  \t\t\t<li><a routerLink=\"odchudzanie\">ODCHUDZANIE</a></li>\r\n\t\t\t  \t\t\t<li><a routerLink=\"jedrnosc\">JĘDRNOŚĆ</a></li>\r\n\t\t\t\t\t\t<li><a routerLink=\"wlosy\">WŁOSY</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t  </li>\r\n\t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"sonoqueen\" class=\"awesome\">SONO QUEEN</a></li>\r\n\t\t\t\t<!-- <li routerLinkActive=\"active\"><a routerLink=\"rezerwacja\">ZAREZERWUJ TERMIN</a></li> -->\r\n\t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"medycyna-estetyczna\">MEDYCYNA ESTETYCZNA</a></li>\r\n\t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"nasze-salony\">NASZE SALONY</a></li> \t\t\t\t\t\t\r\n\t\t\t  \t<li routerLinkActive=\"active\"><a routerLink=\"franczyza\">FRANCZYZA</a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/hero-image/hero-image.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/hero-image/hero-image.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/hero-image/hero-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroImageComponent = (function () {
    function HeroImageComponent() {
    }
    HeroImageComponent.prototype.ngOnInit = function () {
    };
    HeroImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-hero-image',
            template: __webpack_require__("./src/app/components/hero-image/hero-image.component.html"),
            styles: [__webpack_require__("./src/app/components/hero-image/hero-image.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroImageComponent);
    return HeroImageComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row hero\">\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/massage/massage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/massage/massage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  massage works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/massage/massage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MassageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MassageComponent = (function () {
    function MassageComponent() {
    }
    MassageComponent.prototype.ngOnInit = function () {
    };
    MassageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-massage',
            template: __webpack_require__("./src/app/components/massage/massage.component.html"),
            styles: [__webpack_require__("./src/app/components/massage/massage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MassageComponent);
    return MassageComponent;
}());



/***/ }),

/***/ "./src/app/components/medicine/medicine.component.css":
/***/ (function(module, exports) {

module.exports = ".doctors-image {\r\n  padding: 5%;\r\n  margin: 0 auto; }\r\n\r\n.vertical-align {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center; }\r\n\r\n@media (max-width: 767px) {\r\n  .row.vertical-align {\r\n    display: block;\r\n    /* Turn off the flexible box layout */ }\r\n\r\n  .doctors-paragraph {\r\n    text-align: center; } }\r\n\r\n/*# sourceMappingURL=medicine.component.css.map */\r\n"

/***/ }),

/***/ "./src/app/components/medicine/medicine.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\r\n\t<img alt=\"studio urody\" src=\"assets/img/czapeczka.jpg\" style=\"width: 100%\"/>\r\n</div> -->\r\n<div class=\"row vertical-align\">\r\n\t<div class=\"col-xs-12 col-md-4 col-lg-3\">\r\n\t\t<img src=\"assets/img/dobrzanska.jpg\" alt=\"Prof. dr. hab. n. med. Anna Dobrzańska\" class=\"img-circle img-responsive doctors-image\">\r\n\t</div>\r\n\t<div class=\"col-xs-12 col-md-8 col-lg-9 doctors-paragraph\">\r\n\t\t<h1>Prof. dr. hab. n. med. Anna Dobrzańska</h1>\r\n\t\t<h3>Dyrektor ds. Medycznych Ladies First</h3>\r\n\t\t<p>\r\n\t\t\tAbsolwentka Akademii Medycznej w Lublinie. Specjalista II stopnia w dziedzinie pediatrii oraz neonatologii. Od 1996 r. kierownik Kliniki Neonatologii Patologii i Intensywnej Terapii Noworodka Instytutu „Pomnik – Centrum Zdrowia Dziecka” w Warszawie. Przez 13. lat pełniła funkcję Krajowego Konsultanta w Dziedzinie Pediatrii. Autorka wielu prac naukowych opublikowanych w kraju i za granicą. Członek licznych stowarzyszeń medycznych m.in. członek Rady Naukowej przy Ministrze Zdrowia,\r\n\t\t\tCzłonek Komitetu Rozwoju Człowieka PAN, członek Zarządu Głównego Polskiego Towarzystwa Pediatrycznego,\r\n\t\t\tczłonek zarządu „Zdrowe Pokolenia” — Stowarzyszenie Promocji Zdrowego Żywienia, Redaktor naczelna wydawnictwa „Standardy Medyczne — Profilaktyka Zdrowotna”.\r\n\t\t</p>\r\n\t</div>\r\n</div>\r\n<div class=\"row vertical-align\" style=\"text-align: right;\">\r\n\t<div class=\"col-xs-12 col-md-8 col-lg-9 doctors-paragraph\" id=\"div1\">\r\n\t\t<h1>Dr. Karina Felberg</h1>\r\n\t\t<h3>Ekspert medycyny estetycznej</h3>\r\n\t\t<p>\r\n\t\t\tAbsolwentka Warszawskiego Uniwersytetu Medycznego, stypendystka Uniwersytetu w Perugii (Włochy), certyfikowany specjalista medycyny estetycznej z ponad ośmoletnim doświadczeniem w tej dziedzinie. Prowadzi kursy i szkolenia dla lekarzy z zakresu medycyny estetycznej. Kładzie nacisk na bezpieczeństwo i skuteczność wykonywanych zabiegów. Pracuje na preparatach najwyższej jakości. Zmarszczki są efektem upływu czasu oraz skutkiem działania wielu czynników zależnych od naszego trybu życia. To wgłębienia powstałe w skórze z powodu zmian w jej \"rusztowaniu\" , utworzonym przez włókna kolagenowe i elastylowe. Pani Doktor jak nikt inny rozumie tę zależność, dzięki czemu stała się jedną z ekspertek w dziedzinie upiększania skóry.\t\t\t\t\r\n\t\t</p>\r\n\t</div>\r\n\t<div class=\"col-xs-12 col-md-4 col-lg-3\" id=\"div2\">\r\n\t\t<img src=\"assets/img/felberg.jpg\" alt=\"Prof. dr. hab. n. med. Anna Dobrzańska\" class=\"img-circle img-responsive doctors-image\">\r\n\t</div>\r\n</div>\r\n<div class=\"row vertical-align\">\r\n\t<div class=\"col-xs-12 col-md-4 col-lg-3\">\r\n\t\t<img src=\"assets/img/szostek.jpg\" alt=\"Prof. dr. hab. n. med. Anna Dobrzańska\" class=\"img-circle img-responsive doctors-image\">\r\n\t</div>\r\n\t<div class=\"col-xs-12 col-md-8 col-lg-9 doctors-paragraph\">\r\n\t\t<h1>Dr. Renata Szostek</h1>\r\n\t\t<p>\r\n\t\t\tAbsolwentka wydziału lekarskiego oraz wydziału stomatologii akademii medycznej w warszawie, od 2002 roku prowadzi indywidualną praktykę lekarską we własnym gabinecie. Świadczy usługi z zakresu stomatologii estetycznej, zachowawczej, dziecięcej, protetyki, chirurgii.  Nieustannie się szkoli i rozwija. W swojej pracy kładzie nacisk na estetykę i profesjonalizm wykonywanych prac.\t\t\t\t\t\r\n\t\t</p>\r\n\t</div>\r\n</div>\r\n<div class=\"row vertical-align\" style=\"text-align: right;\">\r\n\t<div class=\"col-xs-12 col-md-8 col-lg-9 doctors-paragraph\" id=\"div3\">\r\n\t\t<h1>Katarzyna Czarnota</h1>\r\n\t\t<p>\r\n\t\t\tAbsolwentka Warszawskiego Uniwersytetu Medycznego w dziedzinie kosmetologii i dietetyki.\r\n\t\t\tMistrzyni technologii liftingu i zabiegów anti-aging\r\n\t\t\tPacjenci uwielbiają ją za dokładność, precyzyjność i perfekcję wykonywanych zabiegów. Słynie z pięknego uśmiechu, pełnego zaangażowania w pracy. Prowadzi szkolenia na terenie całej Polski z kosmetologii, kosmetyki, pielęgnacji skóry, dermatologii i biochemii.\r\n\t\t\tNieustannie podnosi swoje kwalifikacje na prestiżowych szkoleniach i kursach.\t\t\t\t\r\n\t\t</p>\r\n\t</div>\r\n\t<div class=\"col-xs-12 col-md-4 col-lg-3\" id=\"div4\">\r\n\t\t<img src=\"assets/img/czarnota.jpg\" alt=\"Prof. dr. hab. n. med. Anna Dobrzańska\" class=\"img-circle img-responsive doctors-image\">\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/medicine/medicine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MedicineComponent = (function () {
    function MedicineComponent() {
    }
    MedicineComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            var mobile = $(window).width();
            if (mobile < 767) {
                $('#div2').insertBefore($('#div1'));
                $('#div4').insertBefore($('#div3'));
            }
            $(window).resize(function () {
                mobile = $(window).width();
                if (mobile < 767) {
                    $('#div2').insertBefore($('#div1'));
                    $('#div4').insertBefore($('#div3'));
                }
                else if (mobile > 767) {
                    $('#div1').insertBefore($('#div2'));
                    $('#div3').insertBefore($('#div4'));
                }
            });
        });
    };
    MedicineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-medicine',
            template: __webpack_require__("./src/app/components/medicine/medicine.component.html"),
            styles: [__webpack_require__("./src/app/components/medicine/medicine.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MedicineComponent);
    return MedicineComponent;
}());



/***/ }),

/***/ "./src/app/components/nails/nails.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nails/nails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row nailsContainer\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 siteTitle nailsTitle\">\r\n        <div class=\"nailsTitleBg\"></div>\r\n        <h1 id=\"curvedTitle\">Paznokcie</h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<div class=\"col-lg-offset-1 col-lg-10 col-xs-12 nailsContent\">\r\n  <h2>Dłonie to wizytówka człowieka, dlatego doskonale zadbamy o nie w naszym Studiu Modelowania Sylwetki. Oferujemy różne rodzaje manicure dostosowane do indywidualnych potrzeb klienta z szerokiej gamy kolorystycznej.</h2>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 col-xs-12\">\r\n      <img src=\"assets/img/nails/hands1.jpg\" class=\"img-responsive center-block\">\r\n      <h3>Manicure Klasyczny</h3>\r\n      <span class=\"priceTag\">40zł</span>\r\n    </div>\r\n    <div class=\"col-md-4 col-xs-12\">\r\n      <img src=\"assets/img/nails/hands2.jpg\" class=\"img-responsive center-block\">\r\n      <h3>Manicure Hybrydowy</h3>\r\n      <span class=\"priceTag\">80zł</span>\r\n    </div>\r\n    <div class=\"col-md-4 col-xs-12\">\r\n      <img src=\"assets/img/nails/hands3.jpg\" class=\"img-responsive center-block\">\r\n      <h3>Manicure Japoński</h3>\r\n      <span class=\"priceTag\">80zł</span>\r\n    </div>\r\n  </div>\r\n  <h2>Dodatkowo po każdym manicure odżywiamy i nawilżamy skórę dłoni za pomocą zabiegu parafinowego. Tworzy ona warstwę ochronną, która zatrzymuje wilgoć w skórze co przyczynia się do hamowania procesów starzenia. Zabiegi parafinowe wykonywane są również osobno (15zł).</h2>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/nails/nails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NailsComponent = (function () {
    function NailsComponent() {
    }
    NailsComponent.prototype.ngOnInit = function () {
        new CircleType(document.getElementById('curvedTitle')).radius(800);
    };
    NailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-nails',
            template: __webpack_require__("./src/app/components/nails/nails.component.html"),
            styles: [__webpack_require__("./src/app/components/nails/nails.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NailsComponent);
    return NailsComponent;
}());



/***/ }),

/***/ "./src/app/components/news/news.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n \r\n\r\n\r\n              "

/***/ }),

/***/ "./src/app/components/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsComponent = (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-news',
            template: __webpack_require__("./src/app/components/news/news.component.html"),
            styles: [__webpack_require__("./src/app/components/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/components/pregnat/pregnat.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pregnat/pregnat.component.html":
/***/ (function(module, exports) {

module.exports = "<app-devices [device]=\"device\"></app-devices>\r\n"

/***/ }),

/***/ "./src/app/components/pregnat/pregnat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PregnatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_devices_service__ = __webpack_require__("./src/app/shared/models/devices.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PregnatComponent = (function () {
    function PregnatComponent(devicesService) {
        this.devicesService = devicesService;
    }
    PregnatComponent.prototype.ngOnInit = function () {
        this.device = this.devicesService.getPregnat();
    };
    PregnatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-pregnat',
            template: __webpack_require__("./src/app/components/pregnat/pregnat.component.html"),
            styles: [__webpack_require__("./src/app/components/pregnat/pregnat.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_models_devices_service__["a" /* DevicesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_models_devices_service__["a" /* DevicesService */]])
    ], PregnatComponent);
    return PregnatComponent;
}());



/***/ }),

/***/ "./src/app/components/regeneration/regeneration.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/regeneration/regeneration.component.html":
/***/ (function(module, exports) {

module.exports = "<app-devices [device]=\"device\"></app-devices>"

/***/ }),

/***/ "./src/app/components/regeneration/regeneration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegenerationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_devices_service__ = __webpack_require__("./src/app/shared/models/devices.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegenerationComponent = (function () {
    function RegenerationComponent(devicesService) {
        this.devicesService = devicesService;
    }
    RegenerationComponent.prototype.ngOnInit = function () {
        this.device = this.devicesService.getRegeneration();
    };
    RegenerationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-regeneration',
            template: __webpack_require__("./src/app/components/regeneration/regeneration.component.html"),
            styles: [__webpack_require__("./src/app/components/regeneration/regeneration.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_models_devices_service__["a" /* DevicesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_models_devices_service__["a" /* DevicesService */]])
    ], RegenerationComponent);
    return RegenerationComponent;
}());



/***/ }),

/***/ "./src/app/components/ritual/ritual.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/ritual/ritual.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12 siteTitle\">\r\n        <h1>Rytułał Piękna</h1>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12 col-md-1 col-md-offset-1\">\r\n        <img class=\"img img-responsive center-block\" src=\"./assets/img/ritual/krem.jpg\" alt=\"Krem\">\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-9\">\r\n        <p>\r\n            Nie masz ochoty spędzać godzin w łazience aby Twoja skóra twarzy wyglądała na zdrową i promienną? Nie masz czasu na brudne, czasochłonne zabiegi na ciało w domowym zaciszu? Zapraszamy wszystkie Panie na zabiegi kosmetyczne, które wykonamy w trakcie ćwiczeń na naszych urządzeniach nie tracąc Waszego cennego czasu!\r\n        </p>\r\n    </div>\r\n</div>\r\n<div class=\"row ritualOffer\">\r\n    <div class=\"col-lg-offset-1 col-lg-5 col-xs-12\">\r\n        <h2>OFERTA ZABIEGÓW NA TWARZ</h2>\r\n        <ul>\r\n            <li>\r\n                <h3>Lift me up</h3>\r\n                <p>\r\n                    Zabieg odżywczo-liflingujący z wykorzystaniem kosmetyków Bandi Perfect Lift.\r\n                    Pobudzi procesy antyoksydacyjne w skórze, stymuluje proces wytwarzania kolagenu.\r\n                </p>\r\n            </li>\r\n            <li>\r\n                <h3>Zatrzymać czas</h3>\r\n                <p>\r\n                    Wspomaga naturalne procesy regeneracji i rewitalizcji skóry, \r\n                    odbudowuje płaszcz hydrolipidowy naskórka dzięki czemu przyraca odpowiedni poziom nawilżenia.\r\n                </p>\r\n            </li>\r\n            <li>\r\n                <h3>„Zastrzyk” świeżości</h3>\r\n                <p>\r\n                    Nawilżający zabieg z wykorzystaniem kwasu hialuronowego.\r\n                    Przywraca skórze odpowiedni poziom nawilżenia, dzięki czemu wygłdza zmarszczki powstałe w wyniku wysuszenia, ujędrnia oraz poprawia koloryt skóry.\r\n                </p>\r\n            </li>\r\n            <li>\r\n                <h3>Soft touch</h3>\r\n                <p>\r\n                    Zabieg odżywczo-liflingujący z wykorzystaniem urządzenia Byas Sensation.\r\n                </p>\r\n            </li>\r\n            <li>\r\n                <h3>Bye bye pimples</h3>\r\n                <p>\r\n                    Przeciwtrądzikowy zabieg, który usuwa z powierzchni skóry patogenne bakterie, reguluje wydzielanie sebum, \r\n                    zwęża ujścia gruczołów łojowych. Rezultatem zabiegu jest złagodzenie stanów zapalnych, zmatowienie skóry bez wysuszania, \r\n                    przeciwdziała powstaniu wyprysków i zaskórników, poprawia koloryt skóry.\r\n                </p>\r\n            </li>\r\n            <li>\r\n                <h3>Czysta Pzyjemność</h3>\r\n                <p>\r\n                    Zabieg oczyszcza, zwęża i reguluje pracę gruczołów łojowych, działa antybakeryjnie i przeciwzapalnie.\r\n                </p>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class=\"col-lg-5 col-xs-12\">\r\n            <h2>OFERTA ZABIEGÓW NA CIAŁO</h2>\r\n            <ul>\r\n                <li>\r\n                    <h3>Cytrusowy gaj</h3>\r\n                    <p>\r\n                        Zabieg antycellulitowy z zastosowaniem koncentratu i maski antycellulitowej firmy Bandi i bodywrappingu.\r\n                        Poprawia mikrocyrkulację krwi, przyśpiesza spalanie tkanki tłuszczowej oraz redukuje zastój limfy. \r\n                        Rezultatem zabiegu jest redukcja cellulitu, wygładzenie i ujędrnienie skóry.\r\n                    </p>\r\n                </li>\r\n                <li>\r\n                    <h3>Piekielna słodycz</h3>\r\n                    <p>\r\n                        Zabieg antycellulitowy max z zastosowaniem piekącej maski z cynamonem i bodywrappingu\r\n                        Poprzez wzmożone krążenie krwi i pobudzenie metabolizmu tkanek, pozbywamy się nie tylko cellulitu, ale także zbędnych centymetrów w talli i udach, dodatkowo wygładza i ujędnia skórę.\r\n                    </p>\r\n                </li>\r\n                <li>\r\n                    <h3>Błotne Szaleństwo</h3>\r\n                    <p>\r\n                        Zabieg intensywnie wyszczuplający oraz pielęgnujący z zastosowaniem drogocenngo błota z morza martwego.\r\n                    </p>\r\n                </li>\r\n                <li>\r\n                    <h3>Shake it baby</h3>\r\n                    <p>\r\n                        Zabieg wyszczuplający z zastosowaniem maski CelluSlim i pobudzającym masażem ud.\r\n                    </p>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/ritual/ritual.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RitualComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RitualComponent = (function () {
    function RitualComponent() {
    }
    RitualComponent.prototype.ngOnInit = function () {
    };
    RitualComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-ritual',
            template: __webpack_require__("./src/app/components/ritual/ritual.component.html"),
            styles: [__webpack_require__("./src/app/components/ritual/ritual.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RitualComponent);
    return RitualComponent;
}());



/***/ }),

/***/ "./src/app/components/salons/salons.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/salons/salons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"lodz tentant\" id=\"lodz\">\r\n    <span class=\"tentant-span te-lodz\">Łódź</span>\r\n  </div>\r\n  <div class=\"wawa tentant\" id=\"wawa\">\r\n    <span class=\"tentant-span te-wawa\">Warszawa</span>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/salons/salons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SalonsComponent = (function () {
    function SalonsComponent() {
    }
    SalonsComponent.prototype.ngOnInit = function () {
    };
    SalonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-salons',
            template: __webpack_require__("./src/app/components/salons/salons.component.html"),
            styles: [__webpack_require__("./src/app/components/salons/salons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SalonsComponent);
    return SalonsComponent;
}());



/***/ }),

/***/ "./src/app/components/slimming/slimming.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/slimming/slimming.component.html":
/***/ (function(module, exports) {

module.exports = "<app-devices [device]=\"device\"></app-devices>"

/***/ }),

/***/ "./src/app/components/slimming/slimming.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlimmingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_devices_service__ = __webpack_require__("./src/app/shared/models/devices.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlimmingComponent = (function () {
    function SlimmingComponent(devicesService) {
        this.devicesService = devicesService;
    }
    SlimmingComponent.prototype.ngOnInit = function () {
        this.device = this.devicesService.getSlimming();
    };
    SlimmingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-slimming',
            template: __webpack_require__("./src/app/components/slimming/slimming.component.html"),
            styles: [__webpack_require__("./src/app/components/slimming/slimming.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_models_devices_service__["a" /* DevicesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_models_devices_service__["a" /* DevicesService */]])
    ], SlimmingComponent);
    return SlimmingComponent;
}());



/***/ }),

/***/ "./src/app/components/sonoqueen/sonoqueen.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sonoqueen/sonoqueen.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"row\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <img class=\"img-baner\" src=\"assets/img/sonoqueen/sono_baner.jpg\" alt=\"Baner Sonoqueen\" width=\"100%\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container-fluid parallax-section\" style=\"padding: 2%\">\r\n    <p>\r\n      SonoQueen to prawdziwie królewski dotyk odmładzający, zamknięty w formie szybkiego, komfortowego zabiegu na twarz i ciało. Proces przebudowy i liftingu odbywa się wewnątrz Twojej skóry, dzięki temu natychmiast powracasz do swoich codziennych zajęć, a resztę pracy nad młodym wyglądem pozostawiasz swojej skórze.\r\n    </p>\r\n  </div>\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"col-lg-4 col-xs-6 application-item\">\r\n              <div class=\"col-lg-2 col-xs-12 padding\">\r\n                <img src=\"assets/img/sonoqueen/lifting.jpg\" class=\"circle-image img-responsive\">\r\n              </div>\r\n              <div class=\"col-lg-10 col-xs-12 circle-title\">\r\n                  <h4>Lifting twarzy i ujędrnianie ciała</h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-xs-6 application-item\">\r\n              <div class=\"col-lg-2 col-xs-12 padding\">\r\n                <img src=\"assets/img/sonoqueen/napiecie.jpg\" class=\"circle-image img-responsive\">\r\n              </div>\r\n              <div class=\"col-lg-10 col-xs-12 circle-title\">\r\n                  <h4>Napięcie delikatnej skóry w okolicach oczu</h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-xs-6 application-item\">\r\n              <div class=\"col-lg-2 col-xs-12 padding\">\r\n                <img src=\"assets/img/sonoqueen/ramiona.jpg\" class=\"circle-image img-responsive\">\r\n              </div>\r\n              <div class=\"col-lg-10 col-xs-12 circle-title\">\r\n                  <h4>Ujędrnienie skóry w okolicy ramion </h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-xs-6 application-item\">\r\n              <div class=\"col-lg-2 col-xs-12 padding\">\r\n                <img src=\"assets/img/sonoqueen/belly.jpg\" class=\"circle-image img-responsive\">\r\n              </div>\r\n              <div class=\"col-lg-10 col-xs-12 circle-title\">\r\n                  <h4>Lifting wiotkiej skóry na brzuchu </h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-xs-6 application-item\">\r\n              <div class=\"col-lg-2 col-xs-12 padding\">\r\n                <img src=\"assets/img/sonoqueen/ass.jpg\" class=\"circle-image img-responsive\">\r\n              </div>\r\n              <div class=\"col-lg-10 col-xs-12 circle-title\">\r\n                  <h4>Uniesienie i ujędrnienie pośladków</h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-xs-6 application-item\">\r\n              <div class=\"col-lg-2 col-xs-12 padding\">\r\n                <img src=\"assets/img/sonoqueen/knee.jpg\" class=\"circle-image img-responsive\">\r\n              </div>\r\n              <div class=\"col-lg-10 col-xs-12 circle-title\">\r\n                  <h4>Wygładzenie skóry w okolicach ud i kolan</h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-xs-6 application-item\">\r\n              <div class=\"col-lg-2 col-xs-12 padding\">\r\n                <img src=\"assets/img/sonoqueen/chin.jpg\" class=\"circle-image img-responsive\">\r\n              </div>\r\n              <div class=\"col-lg-10 col-xs-12 circle-title\">\r\n                  <h4>Redukcja tzw. „drugiego podbródka” Rozświetlenie skóry</h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-xs-6 application-item\">\r\n              <div class=\"col-lg-2 col-xs-12 padding\">\r\n                <img src=\"assets/img/sonoqueen/wrinkles.jpg\" class=\"circle-image img-responsive\">\r\n              </div>\r\n              <div class=\"col-lg-10 col-xs-12 circle-title\">\r\n                  <h4>Wygładzenie zmarszczek</h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-xs-6 application-item\">\r\n              <div class=\"col-lg-2 col-xs-12 padding\">\r\n                <img src=\"assets/img/sonoqueen/time.jpg\" class=\"circle-image img-responsive\">\r\n              </div>\r\n              <div class=\"col-lg-10 col-xs-12 circle-title\">\r\n                  <h4>Spowolnienie procesu starzenia skóry</h4>\r\n              </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-xs-12 about-section\">\r\n        <h2>CZYM JEST TECHNOLOGIA HIFU ZASTOSOWANA W SONOQUEEN?</h2>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-8 col-xs-12\">\r\n            <p>\r\n              SonoQueen jest to nowoczesne urządzenie wykorzystujące technologie HIFU (High Intensity Focused Ultrasound) czyli skupionej wiązki fal ultradźwiękowych.\r\n              Technologia ultradźwięków była już znana w latach 70 XX wieku i stosuje się ją z powodzeniem do dzisiaj w różnych obszarach medycyny.\r\n              USG wykorzystuje te same fale ultradźwiękowe co SonoQueen.\r\n            </p>\r\n          </div>\r\n          <div class=\"col-lg-4 col-xs-12\">\r\n            <img src=\"assets/img/sonoqueen/sq21.png\" alt=\"Sono device\" width=\"100%\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4 col-md-12 col-xs-12\">\r\n            <img src=\"assets/img/sonoqueen/przed_i_po.png\" alt=\"Sono device\" width=\"100%\">\r\n          </div>\r\n          <div class=\"col-lg-8 col-md-12 col-xs-12\">\r\n            <h2>A więc jaka jest różnica?</h2>\r\n            <p>W USG fala określonej częstotliwości działa jak radar, odbijając się od różnych struktur, np. wątroby czy płodu, a potem wracając, „rysuje” obraz na ekranie.\r\n            Natomiast w HIFU zastosowana jest precyzyjnie zogniskowana fala ultradźwiękowa o wysokiej energii na małym punktowym obszarze.</p>\r\n            <p>Generowanie odpowiedniej częstotliwości fali pozwala nam na dotarcie do 3 warstw skóry: skóry właściwej, tkanki tłuszczowej i powięzi mięśniowej (SMAS).\r\n            Tak głęboka penetracja tkanek pozwala na osiągnięcie jeszcze lepszego efektu liftingu twarzy i nie tylko, jest to doskonały zabieg do pozbycia się wiotkiej skóry po ciąży czy gwałtownym spadku wagi w innych częściach ciała.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/components/sonoqueen/sonoqueen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SonoqueenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SonoqueenComponent = (function () {
    function SonoqueenComponent() {
    }
    SonoqueenComponent.prototype.ngOnInit = function () {
    };
    SonoqueenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-sonoqueen',
            template: __webpack_require__("./src/app/components/sonoqueen/sonoqueen.component.html"),
            styles: [__webpack_require__("./src/app/components/sonoqueen/sonoqueen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SonoqueenComponent);
    return SonoqueenComponent;
}());



/***/ }),

/***/ "./src/app/select.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SelectPipe = (function () {
    function SelectPipe() {
    }
    SelectPipe.prototype.transform = function (value) {
        if (value.name !== 'Roll Shape') {
            return value;
        }
    };
    SelectPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'select'
        })
    ], SelectPipe);
    return SelectPipe;
}());



/***/ }),

/***/ "./src/app/shared/directive/move-machine.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoveMachineDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MoveMachineDirective = (function () {
    function MoveMachineDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
    }
    MoveMachineDirective.prototype.ngOnInit = function () {
    };
    MoveMachineDirective.prototype.valueChange = function (event) {
        var positions = [];
        var row = 0;
        var x;
        var y;
        for (x = 0; x < 13; x++) {
            var col = 0;
            for (y = 0; y < 12; y++) {
                positions.push(col + 'px ' + row + 'px');
                col = col - 400;
            }
            row = row - 400;
        }
        var element = this.renderer.selectRootElement('#' + this.id);
        this.renderer.setStyle(element, 'background-position', positions[this.rotate]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('rotate'),
        __metadata("design:type", Number)
    ], MoveMachineDirective.prototype, "rotate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], MoveMachineDirective.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('input'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], MoveMachineDirective.prototype, "valueChange", null);
    MoveMachineDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appMoveMachine]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */]])
    ], MoveMachineDirective);
    return MoveMachineDirective;
}());



/***/ }),

/***/ "./src/app/shared/models/devices.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var DevicesService = (function () {
    function DevicesService() {
        this.device = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.devices = [
            {
                name: 'Roll Shape',
                oneEnterenceFee: 40,
                fiveEnterenceFee: 200,
                tenEnterenceFee: 300,
                description: 'Pogromca cellulitu, inspiracją dla stworzenia  Roll Shape były drewniane rolki wykorzystywane do masażu w czasach dynastii Ming.',
                effects: [
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
                effects: [
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
                effects: [
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
                effects: [
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
                effects: [
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
                effects: [
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
                effects: [
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
    }
    DevicesService.prototype.getDevices = function () {
        return this.devices.slice();
    };
    DevicesService.prototype.getCellulite = function () {
        var i = this.devices.length;
        while (i--) {
            if (this.devices[i] != undefined) {
                if ((this.devices[i].name !== 'Roll Shape') && (this.devices[i].name !== 'Activ Slim') && (this.devices[i].name !== 'Body Shape')) {
                    this.devices.splice(i, 1);
                }
            }
        }
        return this.devices.slice();
    };
    DevicesService.prototype.getPregnat = function () {
        var i = this.devices.length;
        while (i--) {
            if (this.devices[i] != undefined) {
                if ((this.devices[i].name !== 'Roll Shape') && (this.devices[i].name !== 'Rower Horyzontalny') && (this.devices[i].name !== 'Body Shape') && (this.devices[i].name !== 'Activ Slim') && (this.devices[i].name !== 'Elektrosymulacja')) {
                    this.devices.splice(i, 1);
                }
            }
        }
        return this.devices.slice();
    };
    DevicesService.prototype.getRegeneration = function () {
        var i = this.devices.length;
        while (i--) {
            if (this.devices[i] != undefined) {
                if ((this.devices[i].name !== 'SonoQueen') && (this.devices[i].name !== 'Kapsuła Slim & Beauty') && (this.devices[i].name !== 'Body Shape') && (this.devices[i].name !== 'Roll Shape') && (this.devices[i].name !== 'Activ Slim')) {
                    this.devices.splice(i, 1);
                }
            }
        }
        return this.devices.slice();
    };
    DevicesService.prototype.getSlimming = function () {
        var i = this.devices.length;
        while (i--) {
            if (this.devices[i] != undefined) {
                if ((this.devices[i].name !== 'Rower Horyzontalny') && (this.devices[i].name !== 'Body Shape') && (this.devices[i].name !== 'Roll Shape') && (this.devices[i].name !== 'Activ Slim')) {
                    this.devices.splice(i, 1);
                }
            }
        }
        return this.devices.slice();
    };
    DevicesService.prototype.getFirmness = function () {
        var i = this.devices.length;
        while (i--) {
            if (this.devices[i] != undefined) {
                if ((this.devices[i].name !== 'Elektrosymulacja') && (this.devices[i].name !== 'Roll Shape')) {
                    this.devices.splice(i, 1);
                }
            }
        }
        return this.devices.slice();
    };
    return DevicesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map