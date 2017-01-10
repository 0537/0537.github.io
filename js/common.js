// ИНИЦИАЛИЗАЦИЯ ПАРАЛЛАКСА ЧЕРЕЗ SKROLLR.JS
// var skr = skrollr.init();




$(document).ready(function() {

    var windowHeight = $(window).height();
    var pointStart = $('#footer').offset().top - windowHeight;
    var pointEnd = $('#footer').offset().top + $('#footer').height();




    $(window).scroll(function() {
        if ($(window).scrollTop() >= pointStart && $(window).scrollTop() <= pointEnd) {

            console.log('haha!');

            var top = $(window).scrollTop();
            $('.footer-parallax-elems .circle').css({
                'transform': "translate(0%, " + top / 10 + "%"
            });

            // $('.footer-parallax-elems').find('.circle').(function() {
            //     var element = $(this);
            //     // var depth = parseInt(element.attr('data-depth'));
            //     var top = $(window).scrollTop();
            //     element.css({
            //         'translateY': top + '%'

            //     });
            // });
        } else {

        }
    });


    // var topPos = $('.footer-parallax-elems .circle').offset().top;

    // $(window).scroll(function() {
    //     var st = $(this).scrollTop();
    //
    //     if(topPos <= st) {
    //         alert('scuko!');
    //         $('.footer-parallax-elems .circle').css({
    //             'transform': "translate(0%, " + st / 20 + "%"
    //         });
    //     }
    //
    // });

    // $('.footer-parallax-elems').find('.circle').each(function() {
    //     var element = $(this);
    //     // var left = parseInt(element.attr('data-left'));
    //     var top = parseInt(element.attr('data-top'));
    //     // var depth = parseInt(element.attr('data-depth'));
    //     // var scale = parseFloat(element.attr('data-scale'));
    //
    //     // element.css({
    //     //     // 'z-index': depth,
    //     //     // 'left': left + '%',
    //     //     // '-webkit-transform': 'scale(' + scale + ')',
    //     //     // '-moz-transform': 'scale(' + scale + ')',
    //     //     // '-ms-transform': 'scale(' + scale + ')',
    //     //     // '-o-transform': 'scale(' + scale + ')',
    //     //     // 'transform': 'scale(' + scale + ')'
    //     // });
    // });

    $(".partners .chessboard").on("click","a", function (event) {
       //отменяем стандартную обработку нажатия по ссылке
       event.preventDefault();

       //забираем идентификатор бока с атрибута href
       var id  = $(this).attr('href'),
       //узнаем высоту от начала страницы до блока на который ссылается якорь
           top = $(id).offset().top;

       //анимируем переход на расстояние - top за 1500 мс
       $('body,html').animate({scrollTop: top}, 400);
   });

    // Вадидация номера

    jQuery(function($) {
      $('input[name="phone"]').mask('+9 (999) 999-99-99');
    });


    // ФОСЫ

    $('.main-header .call').on('click', function () {
        $('.fos').css('display', 'flex');
    });

    $('.fos .close-btn').on('click', function () {
        $('.fos').hide();
    });

    $('.docs .main-link').on('click', function () {
        $('.fos--request').css('display', 'flex');
    });

    $('.fos--request .close-btn').on('click', function () {
        $('.fos--request').hide();
    });



    // СПОЙЛЕР НА НОВОСТЯХ

    $('.news .show-more .main-btn').on('click', function () {
        $(this).hide();
        $('.spoiler').css('display', 'flex');
    });

    // FANCYBOX НА ЛИЦЕНЗИЯХ

    $('.licenses .image-link').fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});


    // FANCYBOX НА ОТЗЫВАХ

    $('.reviews .image-link').fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});


    // СПОЙЛЕР НА ВАКАНСИЯХ

    $('.vacancy-item header').on('click', function () {
        $(this).parents('.vacancy-item').find('.spoiler-desc').show();
        $(this).parents('.vacancy-item').find('.strokes-wrapper').show();
        $(this).parents('.vacancy-item').find('.main-link').hide();
    });


    // КАСТОМНЫЙ СКРОЛЛ

    $('.about-and-case .desc-text').mCustomScrollbar({
        theme:"my-theme"
    });

    $('.about-and-case--service-page .desc-text').mCustomScrollbar({
        theme:"my-theme"
    });

    $('.detailed-info .desc-text').mCustomScrollbar({
        theme:"my-theme"
    });


    // АНИМАЦИЯ МЕНЮ НА ГЛАВНОЙ

    var $checkWidth = $(window).width();

    $('.main-page-nav .wrapper-bg-basic').addClass('bg-up');

    if ($checkWidth > 1199) {

        $('.main-page-nav .item').mouseover(function () {
            $('.main-page-nav .wrapper-bg').removeClass('bg-up');

            var itemNumber = $(this).attr('data-bg');

            $('.main-page-nav .wrapper-bg[data-bg-wrapper="'+ itemNumber +'"]').addClass('bg-up');

            $(this).find('.btn').css('transition-delay', '.25');
            $(this).find('.desc').stop().slideDown(300);
        });

        $('.main-page-nav .item').mouseout(function () {
            $(this).find('.btn').css('transition-delay', '0');
            $(this).find('.desc').stop().slideUp(200);
            $('.main-page-nav .wrapper-bg-basic').removeClass('bg-up');
        });

        $('.main-page-nav').mouseout(function () {
            $('.main-page-nav .wrapper-bg').removeClass('bg-up');
            $('.wrapper-bg-basic').addClass('bg-up');
        });
    }


    // МЕНЮ С ГАМБУРГЕРОМ



    $(document).mouseup(function(e) {
        var container = $('.main-nav');
        if (container.has(e.target).length === 0) {
            container.css('transform', 'translateX(320px)');
            $('.giant-wrapper')
                .removeClass('content-fix')
                .removeClass('content-scroll-show');
            $('.main-nav').removeClass('content-scroll-show');
        }
    });


    // ДВОЙНОЙ СЛАЙДЕР С ПРОЕКТОВ

    $('.main-slider-top-proj').slick({
        asNavFor:'.small-slider-proj',
        prevArrow: '.main-slider .btn-prev',
        nextArrow: '.main-slider .btn-next'
    });

    $('.small-slider-proj').slick({
        slidesToShow: 5,
        asNavFor:'.main-slider-top-proj',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    focusOnSelect: false,
                    prevArrow: '.nav-wrapper--mobile .btn-prev',
                    nextArrow: '.nav-wrapper--mobile .btn-next'
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    focusOnSelect: false,
                    prevArrow: '.nav-wrapper--mobile .btn-prev',
                    nextArrow: '.nav-wrapper--mobile .btn-next'
                }
            }, {
                breakpoint: 544,
                settings: {
                    slidesToShow: 1,
                    focusOnSelect: false,
                    prevArrow: '.nav-wrapper--mobile .btn-prev',
                    nextArrow: '.nav-wrapper--mobile .btn-next'
                }
            }
        ]
    });


    // ДВОЙНОЙ СЛАЙДЕР С УСЛУГ

    $('.about-and-case--service-page .case').slick({
        asNavFor:'.small-slider--service-page',
        prevArrow: '.about-and-case--service-page .btn-prev',
        nextArrow: '.about-and-case--service-page .btn-next'
    });

    $('.small-slider--service-page').slick({
        slidesToShow: 5,
        asNavFor:'.about-and-case--service-page .case',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    focusOnSelect: false,
                    prevArrow: '.nav-wrapper--mobile .btn-prev',
                    nextArrow: '.nav-wrapper--mobile .btn-next'
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    focusOnSelect: false,
                    prevArrow: '.nav-wrapper--mobile .btn-prev',
                    nextArrow: '.nav-wrapper--mobile .btn-next'
                }
            }, {
                breakpoint: 544,
                settings: {
                    slidesToShow: 1,
                    focusOnSelect: false,
                    prevArrow: '.nav-wrapper--mobile .btn-prev',
                    nextArrow: '.nav-wrapper--mobile .btn-next'
                }
            }
        ]
    });


    // ДВОЙНОЙ СЛАЙДЕР С ГЛАВНОЙ

    $('.main-slider-top').slick({
        asNavFor:'.small-slider',
        prevArrow: '.main-slider .btn-prev',
        nextArrow: '.main-slider .btn-next'
    });

    $('.small-slider').slick({
        slidesToShow: 5,
        asNavFor:'.main-slider-top',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    focusOnSelect: false,
                    prevArrow: '.nav-wrapper--mobile .btn-prev',
                    nextArrow: '.nav-wrapper--mobile .btn-next'
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    focusOnSelect: false,
                    prevArrow: '.nav-wrapper--mobile .btn-prev',
                    nextArrow: '.nav-wrapper--mobile .btn-next'
                }
            }, {
                breakpoint: 544,
                settings: {
                    slidesToShow: 1,
                    focusOnSelect: false,
                    prevArrow: '.nav-wrapper--mobile .btn-prev',
                    nextArrow: '.nav-wrapper--mobile .btn-next'
                }
            }
        ]
    });

    $('.main-slider-top').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var name = $(this).find('.slick-current').find('.name').text();
        var adress = $(this).find('.slick-current').find('.adress').text();
        $('.main-slider .desc .name').text(name);
        $('.main-slider .desc .adress').text(adress);
    });


    // ЗАКАЗЧИКИ СЛАЙДЕР С ГЛАВНОЙ

    $('.customers-slider').slick({
        slidesToShow: 4,
        prevArrow: '.customers .btn-prev',
        nextArrow: '.customers .btn-next',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    focusOnSelect: false,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    focusOnSelect: false,
                }
            }, {
                breakpoint: 544,
                settings: {
                    slidesToShow: 1,
                    focusOnSelect: false,
                }
            }
        ]
    });


    $('.nav-head').on('click', function () {
        $('.main-nav').css('transform', 'translateX(0)');
        // $('.giant-wrapper')
        //     .addClass('content-fix')
        //     .addClass('content-scroll-show');
        // $('.main-nav').addClass('content-scroll-show');
    });

    $('.main-nav .close-btn').on('click', function () {
        $('.main-nav').css('transform', 'translateX(320px)');
        // $('.giant-wrapper')
        //     .removeClass('content-fix')
        //     .removeClass('content-scroll-show');
        // $('.main-nav').removeClass('content-scroll-show');
    });

});
