var $window = $(window);
var $doc = $(document);

function formPlacing() {
    var form = $('.calc-price__form-wrapper');
    var container = $('.container');
    var containerLeftPos = container.offset().left;
    form.css('right', containerLeftPos);
}

function checkbox_switching() {
    var checkbox = $('.main-checkbox')
    var checkboxInput = checkbox.find('.main-checkbox__input');

    checkboxInput.click(function() {
        $(this).parent().toggleClass('active');
    });
}

function numbersSlider() {
    var numSlider = $('.numbers__wrapper');
    var numSlidePrev = numSlider.find('.slider-prev');
    var numSlideNext = numSlider.find('.slider-next');

    if ($window.width() < 768) {
        numSlider.slick({
            arrows: false,
            slidesToShow: 1,
        });

        numSlidePrev.on('click', function() {
            numSlider.slick('slickPrev');
        });

        numSlideNext.on('click', function() {
            numSlider.slick('slickNext');
        });
    }    
}

function switchMobileNav() {
    var burger = $('.main-header__burger');
    var mainNav = $('.main-nav');
    var body = $('body');

    if ($window.width() < 768) {
        burger.click(function () {
            ths = $(this);

            if (!ths.hasClass('active')) {
                ths.addClass('active');
                mainNav.addClass('active');
                body.addClass('no-scroll');
            } else {
                ths.removeClass('active');
                mainNav.removeClass('active');
                body.removeClass('no-scroll');
            }
        });
    }    
}

$window.resize(formPlacing);

$doc.ready(function() {
    function anchorScroll() {
        var link = $('.main-nav__link, .footer__nav-link');

        link.on('click', function(event) {
            var ths = $(this);

            if (ths.attr('href') && ths.attr('href') !== '' && ths.attr('href') !== '#') {
                event.preventDefault();

                var sectionId = ths.attr('href');
                var top = $(sectionId).offset().top;

                $('body, html').animate({
                    scrollTop: top
                }, 1000);
            }
        });

        var calcPrice = $('[data-action="#calcPrice"]')

        calcPrice.on('click', function(event) {
            var ths = $(this);

            if (ths.data('action') && ths.data('action') !== '' && ths.data('action') !== '#') {
                event.preventDefault();

                var sectionId = ths.data('action');
                var top = $(sectionId).offset().top;

                $('body, html').animate({
                    scrollTop: top
                }, 1000);
            }
        });
    }

    anchorScroll();

    $('input[name="phone"]').mask('+7 (999) 999-99-99');

    $('[data-action="confirm"]').magnificPopup({
        showCloseBtn: false,
        items: {
            src: '.modal--confirm'
        },
        type: 'inline'
    });

    $('[data-action="callCourier"]').magnificPopup({
        showCloseBtn: false,
        items: {
            src: '.modal--callCourier'
        },
        type: 'inline'
    });

    $('[data-action="setReview"]').magnificPopup({
        showCloseBtn: false,
        items: {
            src: '.modal--setReview'
        },
        type: 'inline'
    });

    $('[data-action="makeDeal"]').magnificPopup({
        showCloseBtn: false,
        items: {
            src: '.modal--makeDeal'
        },
        type: 'inline'
    });

    $('.modal__close').click(function() {
        $.magnificPopup.close();
    });

    $('.main-select').selectmenu({
        change: function(event, ui) {
            var garbageType = ui.item.element.data('garbage');
            var garbageInfoCont = $('.calc-price__garbage-info');
            garbageInfoCont.removeClass('active');
            $(garbageType).addClass('active');
        }
    });

    $('.rates__titles').slick({
        arrows: false,
        draggable: false,
        infinite: false,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.rates__cards',
    });

    $('.rates__cards').slick({
        arrows: false,
        infinite: false,
        asNavFor: '.rates__titles',
    });

    function clientsSlider() {
        var cli = $('.clients');
        var cliSlider = cli.find('.clients__slider');
        var cliSlidePrev = cli.find('.slider-prev');
        var cliSlideNext = cli.find('.slider-next');

        cliSlider.slick({
            arrows: false,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    variableWidth: false,
                    centerMode: false
                }
            }]
        });

        cliSlidePrev.on('click', function() {
            cliSlider.slick('slickPrev');
        });

        cliSlideNext.on('click', function() {
            cliSlider.slick('slickNext');
        });
    }

    function faqSlider() {
        var faq = $('.faq');
        var faqSlider = faq.find('.faq__slider');
        var faqSlidePrev = faq.find('.slider-prev');
        var faqSlideNext = faq.find('.slider-next');
        var faqSpoiler = faq.find('.faq__spoiler');

        faqSlider.on('init', function(event, slick) {
            var totalCont = $('.faq__slider-count');
            var slidesCount = $('.faq__slide').not('.slick-cloned').length;
            totalCont.text(slidesCount);
        });

        faqSlider.slick({
            arrows: false,
            slidesToShow: 1,
            adaptiveHeight: true
        });

        faqSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            var numberCont = faqSlider.find('.faq__slider-current');
            var totalCont = faqSlider.find('.faq__slider-count');
            var number = +nextSlide + 1;
            numberCont.text(number);
        });


        faqSlidePrev.on('click', function() {
            faqSlider.slick('slickPrev');
            faqSlider.find('.slick-list').height('auto');
        });

        faqSlideNext.on('click', function() {
            faqSlider.slick('slickNext');
            faqSlider.find('.slick-list').height('auto');
        });

        faqSpoiler.on('click', function() {
            var ths = $(this);
            var desc = ths.find('.faq__desc');
            var faqSlideCurrentHeight = faq.find('.slick-current').height();
            console.log(faqSlideCurrentHeight);

            desc.stop(true, true).slideToggle('fast');
            ths.find('.faq__spoiler-icon').stop(true, true).toggleClass('flip');

            faqSlider.find('.slick-list').height('auto');
                
            return false;
        });
    }

    clientsSlider();
    faqSlider();
    numbersSlider();
    switchMobileNav();

    $('.reviews__slider').slick({
        arrows: false,
        slidesToShow: 1
    });

    $('.reviews .slider-prev').on('click', function() {
        $('.reviews__slider').slick('slickPrev');
    });

    $('.reviews .slider-next').on('click', function() {
        $('.reviews__slider').slick('slickNext');
    });

    formPlacing();
    checkbox_switching();
});

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 53.222366,
            lng: 50.306130
        },
        zoom: 11
    });

    var geocoder = new google.maps.Geocoder();

    function geocodeAddress(geocoder, resultsMap, type) {
        var adress = [];
        var city = $('.main-input[name="city"]').val();
        var street = $('.main-input[name="street"]').val();
        var houseNumber = $('.main-input[name="houseNumber"]').val();

        if (street !== '' && street !== undefined && houseNumber !== '' && houseNumber !== undefined) {
            adress.push(city, street, houseNumber);
            adress = adress.toString();

            geocoder.geocode({
                'address': adress
            }, function(results, status) {
                if (status === 'OK') {
                    resultsMap.setCenter(results[0].geometry.location);

                    var markerName = ('marker_' + type);
                    var markerName = new google.maps.Marker({
                        map: resultsMap,
                        position: results[0].geometry.location,
                    });

                    var markerPos = markerName.getPosition();

                    if (google.maps.geometry.poly.containsLocation(markerPos, REGION1)) {
                        alert('Объект внутри области REGION1');
                    } else {
                        alert('Объект внутри области REGION2');
                    }

                    resultsMap.panTo(results[0].geometry.location);
                    resultsMap.setZoom(15);
                }
            });
        }
    }

    function change_step() {
        var submit = $('#setMarkerFrom');
        var formWrapper = $('.calc-price__form-wrapper');
        var form = formWrapper.find('calc-price__form');
        var formInfo = formWrapper.find('.calc-price__form-info-wrapper');
        var formBackground = formWrapper.find('.calc-price__form-background');
        var formHeader = formWrapper.find('.calc-price__form-header');
        var formStepNumber = formWrapper.find('.calc-price__step-number');

        formInfo.html('');
        formHeader.css('opacity', '0');
        formBackground.addClass('flip');

        setTimeout(function() {
            formHeader.attr('style', '');
            formStepNumber.text(2);
            formInfo.html(' \
                <div class="calc-price__form-info"> \
                    <input class="main-input" type="text" name="city" value="Самара" disabled> \
                    <input class="main-input" type="text" name="street" placeholder="Улица"> \
                    \
                    <div class="main-input__wrapper">\
                        <input class="main-input main-input--small"  type="text" name="homeNumber" placeholder="№ Дома"> \
                        <input class="main-input main-input--small"  type="text" name="" placeholder="№ офиса"> \
                    </div>\
                    \
                    <label for="checky_01" class="main-checkbox"> \
                        <input type="checkbox" id="checky_01" class="main-checkbox__input"/> \
                        <div class="main-checkbox__icon"> \
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 26 26" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 26 26" class="checked"><path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"></path></svg> \
                        </div> \
                        <div class="main-checkbox__text">Страхование отправления</div> \
                    </label> \
                    \
                    <a class="desc--form desc--link" href="#">Правила страхования</a> \
                    \
                    <label for="checky_02" class="main-checkbox"> \
                        <input type="checkbox" id="checky_02" class="main-checkbox__input"/> \
                        <div class="main-checkbox__icon"> \
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 26 26" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 26 26" class="checked"><path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"></path></svg> \
                        </div> \
                        <div class="main-checkbox__text">Упаковка отправления</div> \
                    </label> \
                    \
                    <p class="desc--form">Варианты упаковки: тубус, коробки, мешки, пузырчатая пленка</p> \
                </div> \
                <button class="main-btn" type="button" id="setMarkerTo">Далее</button> \
                ')
            checkbox_switching();
        }, 150);
    }

    var REGION1_coords = [{
        lat: 53.196494,
        lng: 50.171279
    }, {
        lat: 53.196671,
        lng: 50.178590
    }, {
        lat: 53.191293,
        lng: 50.179110
    }, {
        lat: 53.191165,
        lng: 50.174082
    }];

    var REGION2_coords = [{
        lat: 53.191293,
        lng: 50.179110
    }, {
        lat: 53.191165,
        lng: 50.174082
    }, {
        lat: 53.186997,
        lng: 50.174493
    }, {
        lat: 53.187074,
        lng: 50.178830
    }];

    var REGION1 = new google.maps.Polygon({
        paths: REGION1_coords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });

    var REGION2 = new google.maps.Polygon({
        paths: REGION2_coords,
        strokeColor: '#00FF00',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#00FF00',
        fillOpacity: 0.35
    });

    REGION1.setMap(map);
    REGION2.setMap(map);

    var submitFrom = $('#setMarkerFrom, #setMarkerTo');

    submitFrom.on('click', function() {
        geocodeAddress(geocoder, map, 'from');
        change_step();
    });
}