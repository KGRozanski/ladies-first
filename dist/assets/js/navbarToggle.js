$(document).ready(function(){
    var button =  document.getElementById('navbar-toggle');
    button.addEventListener("click", function(){ rotateArrow() });

    var val = 180;

    function rotateArrow() {
        $('#navbar-toggle').css({'transform':'rotate('+val+'deg)'});
        val += 180;
    }

    function hideNavbar() {
        window.scrollTo(0, 0);
        $('.navbar-collapse').collapse('hide');
        rotateArrow();
    }

    $('.nav a').click(function(){
       var x = $(this).children().length;
       if (x == 0) {
           hideNavbar();
       }
    });
});