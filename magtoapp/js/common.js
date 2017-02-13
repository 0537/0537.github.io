

$(document).ready(function() {

    // $('.cash-wrapper--carousel').parallax({
    //     imageSrc: 'img/wp-carousel.jpg',
    //     speed: 0.4,
    //     naturalWidth: 1140,
    //     naturalHeight: 570
    // });
    //
    // $('.cash-wrapper--magazines').parallax({
    //     imageSrc: 'img/wp-magazines.jpg',
    //     speed: 0.4
    // });
    //
    // $('.cash-wrapper--hotnews').parallax({
    //     imageSrc: 'img/wp-hotnews.jpg',
    //     speed: 0.4
    // });
    //
    // $('.cash-wrapper--blogapp').parallax({
    //     imageSrc: 'img/wp-blogapp.jpg',
    //     speed: 0.4
    // });

    $.stellar({
        horizontalScrolling: false,
		verticalOffset: 40
    });

    $(window).scroll(function() {
        var st = $(this).scrollTop();
        $('.present-img').css({
            'transform': "translate(0%, -" + st / 50 + "%"
        });
    });

    // popup
    $('.lang-on').click(function(event) {
        event.preventDefault();
        $('.popup-lang').css({
            'display': 'flex',
            'display': '-webkit-flex'
        });
        $('.blur-wrapper').css({
            'filter': 'blur(30px)',
            '-webkit-filter': 'blur(30px)'
        });
        $('.blur-wrapper').css({
            'position': 'fixed',
            'width': '100%',
            'margin': '0 auto'
        });
    });

    // popup close
    $('.popup-lang, .lang li').click(function() {
        $('.popup-lang').css('display', 'none');
        $('.blur-wrapper').css({
            'filter': 'none',
            '-webkit-filter': 'none'
        });
        $('.blur-wrapper').css({
            'position': 'relative',
            'margin': '0'
        });
    });

    // close lang panel
    $('.lang-off').click(function() {
        $('.lang').css('display', 'none');
    })




    // carousels

    $('#carousel-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 3000
    });

    $('#nativator-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 3000
    });

    $('#magazines-slider-1').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 3000
    });
    setTimeout(function() {
        $('#magazines-slider-2').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            dots: false,
            lazyLoad: true,
            autoplay: true,
            autoplayTimeout: 3000
        });
    }, 200)
    setTimeout(function() {
        $('#magazines-slider-3').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            dots: false,
            lazyLoad: true,
            autoplay: true,
            autoplayTimeout: 3000
        });
    }, 600)

    $('#blogapp-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 3000
    });

    $(".next").click(function() {
        $('#nativator-slider').trigger('next.owl.carousel');
        $('#carousel-slider').trigger('next.owl.carousel');
        $('#magazines-slider-1').trigger('next.owl.carousel');
        $('#blogapp-slider').trigger('next.owl.carousel');
        setTimeout(function() {
            $('#magazines-slider-2').trigger('next.owl.carousel');
        }, 200)
        setTimeout(function() {
            $('#magazines-slider-3').trigger('next.owl.carousel');
        }, 400)
    });
    $(".prev").click(function() {
        $('#nativator-slider').trigger('prev.owl.carousel');
        $('#carousel-slider').trigger('prev.owl.carousel');
        $('#magazines-slider-1').trigger('prev.owl.carousel');
        $('#blogapp-slider').trigger('prev.owl.carousel');
        setTimeout(function() {
            $('#magazines-slider-2').trigger('prev.owl.carousel');
        }, 200)
        setTimeout(function() {
            $('#magazines-slider-3').trigger('prev.owl.carousel');
        }, 400)
    });

    // // chrome Smooth Scroll
    // try {
    //     $.browserSelector();
    //     if ($("html").hasClass("chrome")) {
    //         $.smoothScroll();
    //     }
    // } catch (err) {
    //
    // };
    //
    // $("img, a").on("dragstart", function(event) {
    //     event.preventDefault();
    // });
});

// When the window has finished loading create our google map below
// google.maps.event.addDomListener(window, 'load', init);

function initMap() {

    function addMarker(lat, lng, title, map) {
        var myLatlng = new google.maps.LatLng(lat, lng);
        return new google.maps.Marker({
            position: myLatlng,
            title: title,
            map: map,
            icon: 'img/gm-marker.png',
        });
    }

    var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(47.04, 32, 55),
        scrollwheel: false,
        draggable: true,
        disableDefaultUI: true,
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e9e9e9"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dedede"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#333333"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f2f2f2"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#838383"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    addMarker(43.665413, 78.700090, '', map);
    addMarker(44.626600, 77.429871, '', map);
    addMarker(43.944853, 76.998337, '', map);
    addMarker(42.955004, 77.738943, '', map);
    addMarker(44.720633, 78.497735, '', map);
    addMarker(44.424316, 76.820789, '', map);
    addMarker(44.504776, 78.011007, '', map);
    addMarker(48.730055, 48.716197, '', map);
    addMarker(54.183575, 34.611692, '', map);
    addMarker(53.987112, 23.175659, '', map);
    addMarker(50.407503, 44.955796, '', map);
    addMarker(48.988921, 46.318369, '', map);
    addMarker(60.757763, 40.571721, '', map);
    addMarker(61.790861, 41.430710, '', map);
    addMarker(43.894491, 47.771227, '', map);
    addMarker(57.914490, 39.925639, '', map);
    addMarker(57.760755, 62.021842, '', map);
    addMarker(58.723072, 61.183793, '', map);
    addMarker(59.303527, 63.162933, '', map);
    addMarker(57.332076, 60.974040, '', map);
    addMarker(58.962765, 60.954781, '', map);
    addMarker(56.796051, 51.230783, '', map);
    addMarker(57.896364, 49.093594, '', map);
    addMarker(57.182888, 48.825489, '', map);
    addMarker(56.256910, 51.287405, '', map);
    addMarker(58.323551, 49.236887, '', map);
    addMarker(55.631346, 49.090402, '', map);
    addMarker(57.522285, 50.878917, '', map);
    addMarker(52.705212, 32.296494, '', map);
    addMarker(46.689588, 41.201278, '', map);
    addMarker(44.735850, 39.954277, '', map);
    addMarker(45.726136, 38.835664, '', map);
    addMarker(57.049807, 93.619380, '', map);
    addMarker(58.588875, 44.907209, '', map);
    addMarker(57.474746, 84.808586, '', map);
    addMarker(58.194414, 56.825065, '', map);
    addMarker(57.520203, 38.430755, '', map);
    addMarker(49.242889, 40.929284, '', map);
    addMarker(47.850639, 41.391676, '', map);
    addMarker(47.323873, 40.112520, '', map);
    addMarker(48.496234, 41.216880, '', map);
    addMarker(47.012755, 41.870641, '', map);
    addMarker(54.695007, 52.544427, '', map);
    addMarker(52.927433, 50.319907, '', map);
    addMarker(54.836788, 52.078731, '', map);
    addMarker(54.122606, 51.590442, '', map);
    addMarker(53.206428, 50.907480, '', map);
    addMarker(53.471497, 51.718215, '', map);
    addMarker(52.936893, 52.544524, '', map);
    addMarker(54.324145, 52.572639, '', map);
    addMarker(55.258673, 52.493023, '', map);
    addMarker(53.789568, 51.802981, '', map);
    addMarker(53.217519, 51.487325, '', map);
    addMarker(53.733313, 49.707671, '', map);
    addMarker(54.493308, 50.765057, '', map);
    addMarker(55.570701, 49.326523, '', map);
    addMarker(55.646140, 38.744350, '', map);
    addMarker(57.144393, 66.354647, '', map);
    addMarker(57.188416, 49.428913, '', map);
    addMarker(44.160339, 44.552113, '', map);
}
