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

$window.resize(formPlacing);

$doc.ready(function() {
	$('.main-select').selectmenu({
		width: 350,
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

	$('.clients__slider').slick({
		arrows: false,
		slidesToShow: 1,
  		centerMode: true,
		variableWidth: true
	});

	$('.clients__slider-wrapper .slider-prev').on('click', function() {
		$('.clients__slider').slick('slickPrev');
	});

	$('.clients__slider-wrapper .slider-next').on('click', function() {
		$('.clients__slider').slick('slickNext');
	});

	$('.faq__slider').on('init', function(event, slick) {
		var totalCont = $('.faq__slider-count');
		var slidesCount = $('.faq__slide').not('.slick-cloned').length;
		console.log(slidesCount);
		totalCont.text(slidesCount);
	});

	$('.faq__slider').slick({
		arrows: false,
		slidesToShow: 1,
		adaptiveHeight: true
	});

	$('.faq__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		var numberCont = $('.faq__slider-current');
		var totalCont = $('.faq__slider-count');
		var number = +nextSlide + 1;
		numberCont.text(number);
	});

	$('.faq .slider-prev').on('click', function() {
		$('.faq__slider').slick('slickPrev');
	});

	$('.faq .slider-next').on('click', function() {
		$('.faq__slider').slick('slickNext');
	});

	$('.faq__spoiler').on('click', function () {
		var ths = $(this);
		var desc = ths.find('.faq__desc');
		desc.stop(true, true).slideToggle('fast');
		ths.find('.faq__spoiler-icon').stop(true, true).toggleClass('flip');
		return false;
	});

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

	var REGION1_coords = [
		{
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
		}
	];

	var REGION2_coords = [
		{
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
		}
	];

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