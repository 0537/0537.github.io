$(document).ready(function() {

    $('.input-file').on('change', function getFileName() {
        var filename = $('.input-file').val();
        $('.file-name').text(filename);
        console.log(filename);
    });

    $('.usefull-info #modal-order-push, #modal-order-push').magnificPopup({
        items: {
            src: '#modal-order'
        },
        type: 'inline'
    });

    $('.vacancy #modal-resume-push').magnificPopup({
        items: {
            src: '#modal-resume'
        },
        type: 'inline'
    });

    $('#modal-call-push, .map #modal-call-push').magnificPopup({
        items: {
            src: '#modal-call'
        },
        type: 'inline'
    });

    var thirdNumber = $('.office-clean .counter').text();

    function timeChanging() {
        var date = new Date();
        var today;
        // var today = date.getSeconds();
        var today = date.getHours();

        if (today == 0) {
            thirdNumber = Number(thirdNumber) + 3;
            $('.office-clean .counter').text(thirdNumber);
        }

        // thirdNumber = Number(thirdNumber) + 3;
        // $('.office-clean .counter').text(thirdNumber);
    }

    setInterval(function() {
        timeChanging();
    }, 900);

    // CUSTOM SELECT
    $(".main-select").selectmenu();

    // СПОЙЛЕР ОТЗЫВЫ
    $('.review .main-link').on('click', function reviewSpoilerToggle() {

        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.review .desc').css('height', '220px');
            $('.review .main-link').text('развернуть');
        } else {
            $(this).addClass('open');
            $('.review .desc').css('height', 'auto');
            $('.review .main-link').text('свернуть');
        }

    });


    // АНИМАЦИЯ ПРОМО

    $('.promo-open').on('click', function() {

        $(this).slideUp('fast', function() {
            $('.promo-input-wrapper').slideDown('fast');
        });

    });

    $('.promo-close').on('click', function() {
        $('.promo-field').slideUp('fast');
    });


    // АНИМАЦИЯ СВИЧА, ДОБАВИТЬ УСЛОВИЕ 992PX

    $('.switch-item--first').on('mouseover', function() {
        $(this).addClass('switch-item--active');
        $('.item-bg--first').addClass('item-bg--active');
    });

    $('.switch-item--first').on('mouseout', function() {
        $(this).removeClass('switch-item--active');
        $('.item-bg--first').removeClass('item-bg--active');
    });

    $('.switch-item--second').on('mouseover', function() {
        $(this).addClass('switch-item--active');
        $('.item-bg--second').addClass('item-bg--active');
    });

    $('.switch-item--second').on('mouseout', function() {
        $(this).removeClass('switch-item--active');
        $('.item-bg--second').removeClass('item-bg--active');
    });

    //-----------------------------------------


    $('#nav-icon3').on('click', function() {
        $(this).toggleClass('open');
        $('.main-nav').slideToggle('fast');
    });



    // ------------------------ counter -----------

    var clock = $('.counter-client').FlipClock(24231, {
        clockFace: 'Counter'
    });

    setTimeout(function() {
        setInterval(function() {
            clock.increment();
        }, 28800000);
    });



    // ------------------------ main type slider -----------

    $('.cleaner-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ["<svg class='chevron-prev' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 407.4 407.4'><polygon points='315.9 21.2 294.6 0 91.6 203.7 294.6 407.4 315.9 386.3 133.9 203.7 '/>", "<svg class='chevron-next' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 407.4 407.4'><polygon points='315.9 21.2 294.6 0 91.6 203.7 294.6 407.4 315.9 386.3 133.9 203.7 '/>"]
    });

    // ----------------------- super slider

    $('#slider').owlCarousel({
         //loop: true,
         startPosition: 1,
         center:true,
         autoWidth:true,
         navText: ['', ''],
         smartSpeed: 1000,
         items: 3,
         responsive:{
             0:{
                 items:1,
                 nav: true,
                 loop: true,
                 autoWidth:false
             },
             991:{
                 items:3,
             }
         }
    });

    $('#slider').on('translated.owl.carousel initialized.owl.carousel', function(e){
        var active = $('.owl-item.active').index();
        $('.owl-item').removeClass('prev-active');
        $('.owl-item').removeClass('post-active');
        $('.owl-item').eq(active - 1).addClass('prev-active');
        $('.owl-item').eq(active + 1).addClass('post-active');
        $('#service-block .title').fadeOut(150, function(){
            $('#service-block .title').html($('.owl-item.active').find('.text-title').html());
            $('#service-block .title').fadeIn(150, function(){

            });
        });

    });
    $('#slider').on('click', '.owl-item', function(){

        var active = $('.owl-item.active').index();
        var active_tmp = active;
        var click = $(this).index();
        console.log(active);
        if(click == active - 1)
        {
            $('#slider').trigger('prev.owl.carousel');
            $('.owl-item').removeClass('prev-active');
            $('.owl-item').removeClass('post-active');
            $('.owl-item').eq(active_tmp - 2).addClass('prev-active');
            $('.owl-item').eq(active_tmp).addClass('post-active');
        }

        var click = $(this).index();
        if(click == active + 1)
        {
            $('#slider').trigger('next.owl.carousel');
            $('.owl-item').removeClass('prev-active');
            $('.owl-item').removeClass('post-active');
            $('.owl-item').eq(active_tmp).addClass('prev-active');
            $('.owl-item').eq(active_tmp + 2).addClass('post-active');
        }

    });

});
