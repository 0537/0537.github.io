$(document).ready(function() {
    var s = skrollr.init();

    $('.main-page .main-btn').mouseover(function () {
        $('.main-page .photo').hide();
        $('.main-page .photo-2').show();
    });

    $('.main-page .main-btn').mouseout(function () {
        $('.main-page .photo').show();
        $('.main-page .photo-2').hide();
    });

    $(".main-link").on("click","a", function (event) {
        var id  = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);

        return false;
    });


    $('.cert-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: true
		}

	});

    $('.service-item-intro .main-link').on('click', function () {
        $('.service-item-intro .spoiled').slideDown();
        $('.service-item-intro .main-link').text('');
    });


    // Табличка в топе на главной

    $('.state-nav li').on('click', function () {
        $('.state-nav li').removeClass('active');
        $(this).addClass('active');
    });


    // Magnific Popup

    $('.write-us-btn').magnificPopup({
        type: 'inline',
        midClick: true
    });

    $('.call-us-btn').magnificPopup({
        type: 'inline',
        midClick: true
    });

    $('.fos .close-btn').on('click', function() {
        $.magnificPopup.close();
    });


    $('.docs-download .more').on('click', function() {
        $(this).siblings('.container').find('.docs-spoiler').toggleClass('spoiler-open');
    });

    $('.terms-wrapper .item-wrapper').on('click', function() {
        var header = $(this).find('h4').text(),
            article = $(this).find('.hidden-text').html();

        $('.term-desc-box').find('h4').html(header);
        $('.term-desc-box').find('article').html(article);

        $('.desc-box-wrapper').addClass('fall-back-box');

    });

    $('.term-desc-box h4').on('click', function() {
        $('.desc-box-wrapper').removeClass('fall-back-box');
    });


    $('.burger').on('click', function() {
        $('.burger-icon').toggleClass('open');
        $('.main-header .main-nav').toggleClass('nav-open');
    });



    function position(x) {
        x = parseInt(x);
        x = Math.round(x / 2000 * 100);
        $('.ui-slider').css({
            'background': '-webkit-radial-gradient(' + x + '% 50% circle, rgb(219, 50, 33) 0%, rgb(255, 171, 11) 50%);',
            'background': 'radial-gradient(circle at ' + x + '% 50%, #db3221 0%, #ffab0b 50%)'
        });
    }

    $('.area').slider({
        min: 300,
        max: 2000,
        step: 10,
        value: 600,

        create: function() {
            $(".ui-slider-handle").text( $( this ).slider( "value" ) );
            position($( this ).slider( "value" ));
        },

        slide: function( event, ui ) {
            $(".ui-slider-handle").text( ui.value );
            position( ui.value );
        }
    });

    $('.select').selectmenu();

    $('.main-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        responsive: {
            0 : {
                animateIn: 'slideInLeft',
                animateOut: 'slideInRight',
            },
            1024: {
                animateOut: 'slideOutUp',
                animateIn: 'slideInUp',
            }
        }
    });

    $('.news-slider .owl-item')
        .eq(0)
        .find('.news-cont')
        .addClass('left-news-block');

    $('.news-slider').owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        margin: 0,
        responsive: {
            0 : {
                items: 1
            },
            1024 : {
                items: 2
            }
        }
    });

    $('.news-slider-prev').on('click', function() {
        $('.news-slider').trigger('prev.owl.carousel');
    });

    $('.news-slider-next').on('click', function() {
        $('.news-slider').trigger('next.owl.carousel');
    });

    $('.price-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        margin: 100
    });

    $('.price-slider-wrapper .slider-wrapper .btn-next').click(function() {
        $('.price-slider').trigger('next.owl.carousel');
    });

    $('.price-slider-wrapper .slider-wrapper .btn-prev').click(function() {
        $('.price-slider').trigger('prev.owl.carousel');
    });


    // КОМАНДА СЛАЙДЕР

    var nextTeamSlide = $('.team-slider-nav .bnt-next'),
        prevTeamSlider = $('.team-slider-nav .bnt-prev');

    $('.team-slider').slick({
        centerPadding: '0',
        swipe: false,
        autoplay: true,
        fade: true,
        prevArrow: '<div class="team-slider-nav"><img class="btn-prev" src="img/chevron-prev.png"></div>',
        nextArrow: '<div class="team-slider-nav"><img class="btn-next" src="img/chevron-next.png"></div>'
        // arrows: false
    })
    .on('afterChange', function(event, slick, currentSlide, nextSlide) {
        slickItemChanges();
    });

    function slickItemChanges() {

        var teamItemPhoto = $('.slick-active').find('.photo'),
            teamItem = $('.slick-active').find('.team-item'),
            nameFirst = $('.slick-active').find('.team-item').eq(1).find('.name').text(),
            nameSecond = $('.slick-active').find('.team-item').eq(1).find('.second-name').text(),
            postFirst = $('.slick-active').find('.team-item').eq(1).find('.post').text();

        $('.worker-desc--dynamic').find('.second-name').text(nameSecond);
        $('.worker-desc--dynamic').find('.name').text(nameFirst);
        $('.worker-desc--dynamic').find('.post').text(postFirst);

        $('.worker-desc--dynamic').css({
            'opacity': '0',
            'transform': 'translateX(-500px)',
        });

        setTimeout(function () {
            $('.worker-desc--dynamic').css({
                'opacity': '1',
                'transform': 'translateX(0)',
            });
        }, 300);

        teamItem.eq(1).find('.photo').addClass('photo--active');

        teamItem.mouseover(function () {
            teamItemPhoto
                .removeClass('photo--light')
                .addClass('photo--dark');
            $(this).find('.photo')
                .removeClass('photo--dark')
                .addClass('photo--light');
        });

        teamItem.on('click', function () {
            var name = $(this).find('.name').text(),
                nameSecond = $(this).find('.second-name').text(),
                post = $(this).find('.post').text();

            teamItem.find('.photo')
                .removeClass('photo--active')
                .addClass('photo--dark');
            $(this).find('.photo').addClass('photo--active');

            $('.worker-desc--dynamic').css({
                'opacity': '0',
                'transform': 'translateX(-500px)',
            });

            setTimeout(function () {
                $('.worker-desc--dynamic').find('.name').text(name);
                $('.worker-desc--dynamic').find('.second-name').text(nameSecond);
                $('.worker-desc--dynamic').find('.post').text(post);
                $('.worker-desc--dynamic').css({
                    'opacity': '1',
                    'transform': 'translateX(0)',
                });
            }, 300);
        });

        teamItem.eq(0).on('click', function () {
            teamItem.eq(1).css('transform', 'translateX(100px)');
            teamItem.eq(2).css('transform', 'translateX(100px)');

            setTimeout(function () {
                teamItem.eq(1).css('transform', 'translateX(0)');
                teamItem.eq(2).css('transform', 'translateX(0)');
            }, 300);

            setTimeout(function () {
                teamItem.eq(2).css('z-index', '10');
                teamItem.eq(1).css('z-index', '20');
                teamItem.eq(0).css('z-index', '100');
            }, 300);
        });

        teamItem.eq(1).on('click', function () {
            teamItem.eq(0).css('transform', 'translateX(-100px)');
            teamItem.eq(2).css('transform', 'translateX(100px)');

            setTimeout(function () {
                teamItem.eq(0).css('transform', 'translateX(0)');
                teamItem.eq(2).css('transform', 'translateX(0)');
            }, 300);

            setTimeout(function () {
                teamItem.eq(2).css('z-index', '10');
                teamItem.eq(1).css('z-index', '100');
                teamItem.eq(0).css('z-index', '20');
            }, 300);
        });

        teamItem.eq(2).on('click', function () {
            teamItem.eq(0).css('transform', 'translateX(-100px)');
            teamItem.eq(1).css('transform', 'translateX(-100px)');

            setTimeout(function () {
                teamItem.eq(0).css('transform', 'translateX(0)');
                teamItem.eq(1).css('transform', 'translateX(0)');
            }, 300);

            setTimeout(function () {
                teamItem.eq(2).css('z-index', '100');
                teamItem.eq(1).css('z-index', '20');
                teamItem.eq(0).css('z-index', '10');
            }, 300);
        });

    }

    slickItemChanges();


    // История про четыре инпута

    if ($(".multiple-text").length) {
        $('.multiple-text').on('keypress change', function() {
            var thisItem = $(this);
            var target = parseInt($(this).attr('target'));
            var pre_target = target - 1;
            var next_target = target + 1;
            if (target == 1) {
                if (thisItem.val().length >= 40) {
                    $('.multiple-text[target="' + next_target + '"]').focus();
                }
            } else {
                if ($('.multiple-text[target="' + pre_target + '"]').val().length >= 40) {
                    if (thisItem.val().length >= 40) {
                        $('.multiple-text[target="' + next_target + '"]').focus();
                    }
                } else {
                    thisItem.val('');
                    $('.multiple-text[target="' + pre_target + '"]').focus();
                }
            }


        });

        $('.multiple-text').on('keydown', function(event) {
            console.log('1');
            if (event.which == 8) {

                var thisItem = $(this);
                var target = parseInt($(this).attr('target'));
                var pre_target = target - 1;
                var next_target = target + 1;
                if (target != 1) {
                    if (thisItem.val().length == 0) {
                        $('.multiple-text[target="' + pre_target + '"]').focus();
                    }
                }

            }
        });
    }


    $('.news-preview-slider').owlCarousel({
        items: 3,
        margin: 50,
        responsive: {
            0: {
                items: 1
            },
            1024: {
                items: 3
            }
        }
    });

    $('.controller').on('click', function() {
        $('.switcher').removeClass('choise');
    });

    $('.controller .first-part').on('click', function() {
        $('.state-wrapper.first').hide();
        $('.state-wrapper.second').show();
        $('.second-state .state-icon').css('opacity', '.2');
        $('.second-state span').hide();
        $('.first-state .state-icon').css('opacity', '1');
        $('.first-state span').show();
    });

    $('.controller .second-part').on('click', function() {
        $('.state-wrapper.first').show();
        $('.state-wrapper.second').hide();
        $('.second-state .state-icon').css('opacity', '1');
        $('.second-state span').show();
        $('.first-state .state-icon').css('opacity', '.2');
        $('.first-state span').hide();
    });

});
