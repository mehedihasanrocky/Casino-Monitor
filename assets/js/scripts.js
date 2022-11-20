$(document).ready(function(){
     //carousel
     $('.slider').owlCarousel({
        center:true,
        loop:true,
        autoplay:true,
        autoplayTime:3000,
        nav:true,
        responsive : {
         // breakpoint from 0 up
           0 : {
              items:1,
           },
         // breakpoint from 480 up
            480 : {
              items:1,
            },
            // breakpoint from 768 up
            768 : {
                items:1,
            },
            991 : {
                items:1,
            },
            1200 : {
                items:1,
            },
            1350 : {
                items:1,
            },
        }
        
    });




});