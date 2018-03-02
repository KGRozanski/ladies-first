import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      var slider1 = $('.slider1');
      var slider2 = $('.slider2');
      var slider3 = $('.slider3');
      var slider4 = $('.slider4');
      var positions = [
        '0 0', '-500px 0', '-1000px 0', '-1500px 0', '-2000px 0', '-2500px 0', '-3000px 0', '-3500px 0', '-4000px 0', '-4500px 0', '-5000px 0', '-5500px 0', '-6000px 0', '-6500px 0', '-7000px 0', '-7500px 0',
        '0 -500px', '-500px -500px', '-1000px -500px', '-1500px -500px', '-2000px -500px', '-2500px -500px', '-3000px -500px', '-3500px -500px', '-4000px -500px', '-4500px -500px', '-5000px -500px', '-5500px -500px', '-6000px -500px', '-6500px -500px', '-7000px -500px', '-7500px -500px',
        '0 -1000px', '-500px -1000px', '-1000px -1000px', '-1500px -1000px', '-2000px -1000px', '-2500px -1000px', '-3000px -1000px', '-3500px -1000px', '-4000px -1000px', '-4500px -1000px', '-5000px -1000px', '-5500px -1000px', '-6000px -1000px', '-6500px -1000px', '-7000px -1000px', '-7500px -1000px',
        '0 -1500px', '-500px -1500px', '-1000px -1500px', '-1500px -1500px', '-2000px -1500px', '-2500px -1500px', '-3000px -1500px', '-3500px -1500px', '-4000px -1500px', '-4500px -1500px', '-5000px -1500px', '-5500px -1500px', '-6000px -1500px', '-6500px -1500px', '-7000px -1500px', '-7500px -1500px',
        '0 -2000px', '-500px -2000px', '-1000px -2000px', '-1500px -2000px', '-2000px -2000px', '-2500px -2000px', '-3000px -2000px', '-3500px -2000px', '-4000px -2000px', '-4500px -2000px', '-5000px -2000px', '-5500px -2000px', '-6000px -2000px', '-6500px -2000px', '-7000px -2000px', '-7500px -2000px',
        '0 -2500px', '-500px -2500px', '-1000px -2500px', '-1500px -2500px', '-2000px -2500px', '-2500px -2500px', '-3000px -2500px', '-3500px -2500px', '-4000px -2500px', '-4500px -2500px', '-5000px -2500px', '-5500px -2500px', '-6000px -2500px', '-6500px -2500px', '-7000px -2500px', '-7500px -2500px',
        '0 -3000px', '-500px -3000px', '-1000px -3000px', '-1500px -3000px', '-2000px -3000px', '-2500px -3000px', '-3000px -3000px', '-3500px -3000px', '-4000px -3000px', '-4500px -3000px', '-5000px -3000px', '-5500px -3000px', '-6000px -3000px', '-6500px -3000px', '-7000px -3000px', '-7500px -3000px',
        '0 -3500px', '-500px -3500px', '-1000px -3500px', '-1500px -3500px', '-2000px -3500px', '-2500px -3500px', '-3000px -3500px', '-3500px -3500px', '-4000px -3500px', '-4500px -3500px', '-5000px -3500px', '-5500px -3500px', '-6000px -3500px', '-6500px -3500px', '-7000px -3500px', '-7500px -3500px',
        '0 -4000px', '-500px -4000px', '-1000px -4000px', '-1500px -4000px', '-2000px -4000px', '-2500px -4000px', '-3000px -4000px', '-3500px -4000px', '-4000px -4000px', '-4500px -4000px', '-5000px -4000px', '-5500px -4000px', '-6000px -4000px', '-6500px -4000px', '-7000px -4000px', '-7500px -4000px',
        '0 -4500px', '-500px -4500px', '-1000px -4500px', '-1500px -4500px', '-2000px -4500px', '-2500px -4500px', '-3000px -4500px', '-3500px -4500px', '-4000px -4500px', '-4500px -4500px', '-5000px -4500px', '-5500px -4500px', '-6000px -4500px', '-6500px -4500px', '-7000px -4500px', '-7500px -4500px',
        '0 -5000px', '-500px -5000px', '-1000px -5000px', '-1500px -5000px', '-2000px -5000px', '-2500px -5000px', '-3000px -5000px', '-3500px -5000px', '-4000px -5000px', '-4500px -5000px', '-5000px -5000px', '-5500px -5000px', '-6000px -5000px', '-6500px -5000px', '-7000px -5000px', '-7500px -5000px',
        '0 -5500px', '-500px -5500px', '-1000px -5500px', '-1500px -5500px', '-2000px -5500px', '-2500px -5500px', '-3000px -5500px', '-3500px -5500px', '-4000px -5500px', '-4500px -5500px', '-5000px -5500px', '-5500px -5500px', '-6000px -5500px', '-6500px -5500px', '-7000px -5500px', '-7500px -5500px',
        '0 -6000px', '-500px -6000px', '-1000px -6000px', '-1500px -6000px', '-2000px -6000px', '-2500px -6000px', '-3000px -6000px', '-3500px -6000px', '-4000px -6000px', '-4500px -6000px', '-5000px -6000px', '-5500px -6000px', '-6000px -6000px', '-6500px -6000px', '-7000px -6000px', '-7500px -6000px',
        '0 -6500px', '-500px -6500px', '-1000px -6500px', '-1500px -6500px', '-2000px -6500px', '-2500px -6500px', '-3000px -6500px', '-3500px -6500px', '-4000px -6500px', '-4500px -6500px', '-5000px -6500px', '-5500px -6500px', '-6000px -6500px', '-6500px -6500px', '-7000px -6500px', '-7500px -6500px',
        '0 -7000px', '-500px -7000px', '-1000px -7000px', '-1500px -7000px', '-2000px -7000px', '-2500px -7000px', '-3000px -7000px', '-3500px -7000px', '-4000px -7000px', '-4500px -7000px', '-5000px -7000px', '-5500px -7000px', '-6000px -7000px', '-6500px -7000px', '-7000px -7000px', '-7500px -7000px',
        '0 -7500px', '-500px -7500px', '-1000px -7500px', '-1500px -7500px', '-2000px -7500px', '-2500px -7500px', '-3000px -7500px', '-3500px -7500px', '-4000px -7500px', '-4500px -7500px', '-5000px -7500px', '-5500px -7500px', '-6000px -7500px', '-6500px -7500px', '-7000px -7500px', '-7500px -7500px'
      ];
      
      slider1.slider({
          max: 240,
          min: 1,
          slide: function(event, ui) {
            $('#bicycle').css("background-position", positions[ui.value]);
          }
      });
      slider2.slider({
          max: 240,
          min: 1,
          slide: function(event, ui) {
            $('#infrashape').css("background-position", positions[ui.value]);
          }
      });
      slider3.slider({
          max: 240,
          min: 1,
          slide: function(event, ui) {
            $('#rollshape').css("background-position", positions[ui.value]);
          }
      });
      slider4.slider({
          max: 240,
          min: 1,
          slide: function(event, ui) {
            $('#vibrashape').css("background-position", positions[ui.value]);
          }
      });

  }

}
