$(document).ready(function () {
    // $('h1').click(function(){
    //     $(this).css('background-color','#ff0000');
    // })

    // var waypoint = new Waypoint({
    //     element: document.getElementById('px-offset-waypoint'),
    //     handler: function(direction) {

    //     },
    //     offset: 20 
    //   });

    // $('.js-section-feature').waypoint({
    //     handler: function (direction) {
    //         if (direction == 'down') {
    //             $('nav').addClass('sticky');
    //         }
    //         else {
    //             $('nav').removeClass('sticky');
    //         }
    //         //   notify(this.element.id + ' hit')
    //     }
    // })


    // fix sticky
    $('.js-section-feature').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    // scroll on buton click
    $('.js-scroll-to-plan').click(function () {
        console.log('click');

        $('html , body').animate({ scrollTop: $('.js-section-plan').offset().top }, 1000);
    });


    // $(".js-scroll-to-plan").click(function () {
    //     $([document.documentElement, document.body]).animate({
    //         scrollTop: $(".js-section-plan").offset().top
    //     }, 1000);
    // });

    $('.js-nav-icon').click(function(){
        var nav =  $('.js-main-nav');
        nav.slideToggle(200);
    });

});