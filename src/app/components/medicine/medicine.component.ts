import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      var mobile = $(window).width();
      if ( mobile < 767 ) {
        $('#div2').insertBefore($('#div1'));
        $('#div4').insertBefore($('#div3'));
      }
      $(window).resize(function() {
        mobile = $(window).width();
        if( mobile < 767 ){
          $('#div2').insertBefore($('#div1'));
          $('#div4').insertBefore($('#div3'));
        }
        else if ( mobile > 767 ){
          $('#div1').insertBefore($('#div2'));
          $('#div3').insertBefore($('#div4'));
        }
      });
  });
  }

}
