$(document).ready(function() {
    var screenWidth = $(window).width();

    if (screenWidth > 992) {
      var s = skrollr.init();
    }

    // var $juiceParallax = $('.juice-parallax').parallax();
    // var $zombieParallax = $('.zombie-parallax').parallax();
    // var $promotionParallax = $('.promotion-parallax').parallax();

    // КАСТОМНЫЙ СКРОЛЛБАР С ПЕРВОЙ СЕКЦИИ
    $(".audit-start .description").mCustomScrollbar();

    // АНИМАЦИЯ НА СТР. "ОПРЕДЕЛЕНИЕ ЦЕЛЕЙ И ЗАДАЧ"
    $(window).scroll(function() {
        var topScrolled = $(window).scrollTop(),
            topPos = $('.audit-targets').offset().top,
            circleOne = $('.point:first-child .red-circle'),
            circleTwo = $('.point:nth-child(2) .red-circle'),
            circleThree = $('.point:nth-child(3) .red-circle'),
            circleFour = $('.point:last-child .red-circle'),
            textOne = $('.point:first-child .red-text'),
            textTwo = $('.point:nth-child(2) .red-text'),
            textThree = $('.point:nth-child(3) .red-text'),
            textFour = $('.point:last-child .red-text');


        if (topPos < topScrolled) {
            $('.redline').css('width', '1000px');

            circleOne.css('transform', 'scale(1)');
            textOne.css({
                'left': '0',
                'opacity': '1'
            });

            setTimeout(function() {
                circleTwo.css('transform', 'scale(1)');
                textTwo.css({
                    'left': '0',
                    'opacity': '1'
                });
            }, 600);

            setTimeout(function() {
                circleThree.css('transform', 'scale(1)');
                textThree.css({
                    'left': '0',
                    'opacity': '1'
                });
            }, 1200);

            setTimeout(function() {
                circleFour.css('transform', 'scale(1.6)');
                textFour.css({
                    'left': '0',
                    'opacity': '1'
                });
            }, 1800);

            setTimeout(function() {
                $('.flag').css({
                    'transform': 'translateX(0)'
                });
            }, 2200);
        }
    });

    $(window).scroll(function benderAppears() {
        var topScrolled = $(window).scrollTop(),
            topPos = $('.audit-seo').offset().top;

        if (topPos < topScrolled + 500) {
            $('.bender').css('transform', 'translateY(0)');
        }
    });

    $(window).scroll(function redirectRides() {
        var topScrolled = $(window).scrollTop(),
            topPos = $('.audit-seo').offset().top;

        if (topPos < topScrolled + 500) {
            setTimeout(function() {
                $('.redirect').css({
                    'transform' : 'translateX(0)',
                    'opacity' : '1'
                });
            }, 800);
        }
    });
});
