$(function() {

    //header

    $('.scroll-down').on('click', function(){
        
        var aboutOffset = $('#about').offset().top;

        $('html, body').animate({
            scrollTop: aboutOffset
        }, 500);
    });

    $('.nav').on('click','a', function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

    $('.mobile-nav-btn').on('click', function(){
        $('.nav__list').slideToggle();
    })

    // slider

    if ($('.testimonials__list').length) {

        $('.testimonials__list').slick({
            infinite: true,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            arrows: false,
            variableWidth: true
        });

        $('.slick-current').css('opacity', '1');
        
        $('.testimonials__list').on('afterChange', function(){

            $('.testimonials__item').css('opacity', '.5');

            if($('.testimonials__item').hasClass('slick-current')){
                $('.slick-current').css('opacity', '1');
            }
        });
    }


});