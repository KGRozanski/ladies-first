import { Component, AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.css']
})


export class FranchiseComponent implements AfterViewInit {

  constructor(private _elRef: ElementRef) { }

  ngAfterViewInit():any {
    $(document).ready(function(){

      var animated = 0;
      $('#waypoint2').waypoint({
        handler: function() {
          if (animated == 0 ){
            animate();
          }
        },
        offset: 300
      });
      function animate(){
        animateValue('zl', 0, 450, 1000);
        animateValue('m', 0, 120, 1000);
        animateValue('client', 0, 250, 1000);
        animateValue('profit', 0, 20000, 1000);
        animated++;
      }
      function animateValue(id, start, end, duration) {
        // assumes integer values for start and end
        
        var obj = $('#'+id+'');
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

    
  }

  

}
