$( document ).ready(function() {

    // ИНИЦИАЛИЗАЦИЯ ПАРАЛЛАКСА ЧЕРЕЗ SKROLLR.JS
    var skr = skrollr.init();


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

    $('.detailed-info .desc-text').mCustomScrollbar({
        theme:"my-theme"
    });

    // АНИМАЦИЯ МЕНЮ НА ГЛАВНОЙ

    var $checkWidth = $(window).width();

    $('.main-page-nav .wrapper-bg').eq(0).addClass('bg-up');

    if ($checkWidth > 1199) {
        $('.main-page-nav .item').mouseover(function () {
            $('.main-page-nav .wrapper-bg').removeClass('bg-up');
            var itemNumber = $(this).attr('data-bg');
            $('.main-page-nav .wrapper-bg').eq(itemNumber).addClass('bg-up');
            $(this).find('.btn').css('transition-delay', '.25');
            $(this).find('.desc').stop().slideDown(300);
        });

        $('.main-page-nav .item').mouseout(function () {
            $(this).find('.btn').css('transition-delay', '0');
            $(this).find('.desc').stop().slideUp(200);
        });
    }


    // МЕНЮ С ГАМБУРГЕРОМ

    $('.nav-head').on('click', function () {
        $('.main-nav').css('transform', 'translateX(0)');
        $('.giant-wrapper')
            .addClass('content-fix')
            .addClass('content-scroll-show');
        $('.main-nav').addClass('content-scroll-show');
    });

    $('.main-nav .close-btn').on('click', function () {
        $('.main-nav').css('transform', 'translateX(300px)');
        $('.giant-wrapper')
            .removeClass('content-fix')
            .removeClass('content-scroll-show');
        $('.main-nav').removeClass('content-scroll-show');
    });

    $(document).mouseup(function(e) {
        var container = $('.main-nav');
        if (container.has(e.target).length === 0) {
            container.css('transform', 'translateX(300px)');
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

});
