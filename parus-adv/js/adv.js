$(document).ready(function() {
    var screenWidth = $(window).width();

    if (screenWidth > 992) {
      var s = skrollr.init();
    }

    var $juiceParallax = $('.juice-parallax').parallax();
    var $zombieParallax = $('.zombie-parallax').parallax();
    var $promotionParallax = $('.promotion-parallax').parallax();

    // КАСТОМНЫЙ СКРОЛЛБАР С ПЕРВОЙ СЕКЦИИ
    $(".a-start .description").mCustomScrollbar();


    // КАСТОМНЫЙ СЕЛЕКТ С ПЕРВОЙ СЕКЦИИ
    var li = $('.seo-start .selected'),
        liNotFirst = $('.seo-start .select li:not(:first-of-type)'),
        liValue = $('.seo-start .value');

    li.click(function() {
        $.each(liNotFirst, function(index) {
            setTimeout(function() {
                liNotFirst.eq(index).slideToggle();
            }, (50 * index));
        });
    });

    liNotFirst.click(function() {
        liValue.text($(this).text());
        $.each(liNotFirst, function(index) {
            setTimeout(function() {
                liNotFirst.eq(index).slideToggle();
            }, (50 * index));
        });
    });


    // АНИМАЦИЯ НА СТР. "ОПРЕДЕЛЕНИЕ ЦЕЛЕЙ И ЗАДАЧ"
    $(window).scroll(function() {
        var topScrolled = $(window).scrollTop(),
            topPos = $('.a-targets').offset().top,
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

    $(window).scroll(function() {
        var topScrolled = $(window).scrollTop(),
            topPos = $('.a-media').offset().top - 400;

            if(topPos < topScrolled) {
                $('.wall').css('transform', 'translateX(-400px)');
            }
    });

    $(window).scroll(function() {
        var topScrolled = $(window).scrollTop(),
            topPos = $('.a-complex').offset().top - 400;

            if(topPos < topScrolled) {
                var firstSticker = $('.sticker').eq(0);
                var secondSticker = $('.sticker').eq(1);
                var thirdSticker = $('.sticker').eq(2);

                firstSticker.css('transform', 'scale(1)');
                firstSticker.find('.sticker-content').css('opacity', '1');

                setTimeout(function () {
                    secondSticker.css('transform', 'scale(1)');
                    secondSticker.find('.sticker-content').css('opacity', '1');
                }, 500);

                setTimeout(function () {
                    thirdSticker.css('transform', 'scale(1)');
                    thirdSticker.find('.sticker-content').css('opacity', '1');
                }, 1000);
            }
    });

    $(window).scroll(function() {
        var topScrolled = $(window).scrollTop(),
            topPos = $('.a-email').offset().top - 400;

        if(topPos < topScrolled) {
            $('.many-birds').css('transform', 'translateY(0)');

            setTimeout(function () {
                $('.big-bird').css('transform', 'translateX(0)');
            }, 500);

            setTimeout(function () {
                $('.airplane').css('transform', 'translate(0, 0)');
            }, 1000);

            setTimeout(function () {
                $('.bird-shadow').css('opacity', '1');
            }, 1500);
        }
    });

    $(window).scroll(function() {
        var topScrolled = $(window).scrollTop(),
            topPos = $('.a-price-drop').offset().top - 400;

        if(topPos < topScrolled) {
            $('.plane-wrapper').css('transform', 'translate(0, 0)');

            setTimeout(function () {
                $('.plane-wrapper .light').css('opacity', '1');
            }, 500);
        }

    });
});
