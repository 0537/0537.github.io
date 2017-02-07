jQuery(document).ready(function($) {

		$('.faq-link').on('click', function () {
				$(this).parent().find('.faq-item').slideToggle();
		});




		// врубаем подложку и перемещаем в центр окна чата на мобильных устройствах
		var backdropPoint = $(window).width();
		if (backdropPoint < 475) {
			$('.chat-anchor-js').attr('data-backdrop', 'true');
		} else {
			$('.chat-anchor-js').attr('data-backdrop', 'false');
		}

		//вырубаем ссылку в поисковой выдаче на десктопе
		if (backdropPoint > 1024) {
			$(document).on("click", ".m-event-js", function (e) {
					e.preventDefault();
			});
		}


		// прячем номер доверенности
		var osnov = $('select[name=osnov]').val();
		$('select[name=osnov]').on('change', function(){
				if ($(this).val() == "ustav")	{
						$('.js-ustav-none').hide();
				} else {
						$('.js-ustav-none').show();
				}
		});


    // Fancybox
		$(".fancybox").fancybox({
        padding : 0,
        closeBtn : false,
        helpers : {
            title : {
                type : 'outside'
            }
        }
    });


    // Bootstrap - File Input
    $('input[type=file]').attr('data-filename-placement', 'inside');
    $('input[type=file]').attr('title', 'Загрузить');
    $('.input-file-photo').attr('title', 'Загрузить фото');
    $('.input-file-scan').attr('title', 'Загрузить скан');
    $('input[type=file]').attr('class', 'btn-primary btn-data');
    $('input[type=file]').bootstrapFileInput();


    // Dropdown menu
    var heightMenu = $('.js-dropdown .dropdown-menu').height();
    $('.b-header-main').css('padding-bottom', heightMenu);

    $('.js-dropdown').on('show.bs.dropdown', function () {
        $('.b-header-main').css('padding-bottom', heightMenu);
    });

    $('.js-dropdown').on('hide.bs.dropdown', function () {
        $('.b-header-main').css('padding-bottom', '0');
    });

    $('.js-dropdown .dropdown-toggle').click(function() {
        if ($(this).parent().hasClass('open')) {
            $(this).parent().removeClass('open');
        }
        else {
            $(this).parent().addClass('open');
        }
    });



    if ($('.js-ustav').parent('li').hasClass('selected')) {
        $('.js-ustav-none').hide();
    }
    else {
        $('.js-ustav-none').show();
    }


    // Bootstrap datetimepicker
    $('#datetimepicker1').datetimepicker({
        locale: 'ru',
        format: 'DD.MM.YY',
        icons: {
            time: 'glyphicon glyphicon-time',
            date: 'glyphicon glyphicon-calendar',
            up: 'glyphicon glyphicon-chevron-up',
            down: 'glyphicon glyphicon-chevron-down',
            previous: 'glyphicon glyphicon-chevron-left',
            next: 'glyphicon glyphicon-chevron-right',
            today: 'glyphicon glyphicon-screenshot',
            clear: 'glyphicon glyphicon-trash',
            close: 'glyphicon glyphicon-remove'
        }
    });

});



// Google map
var map;
var myLatLng = new google.maps.LatLng(53.22172699999999,50.26880900000003);

/**
 * The ZoomControl adds +/- button for the map
 */
function ZoomControl(controlDiv, map) {

  // Creating divs & styles for custom zoom control
  controlDiv.style.padding = '10px';

  // Set CSS for the control wrapper
  var controlWrapper = document.createElement('div');
  controlWrapper.style.cursor = 'pointer';
  controlWrapper.style.width = '40px';
  controlWrapper.style.height = '90px';
  controlWrapper.style.marginRight = '10px';
  controlDiv.appendChild(controlWrapper);

  // Set CSS for the zoomIn
  var zoomInButton = document.createElement('div');
  zoomInButton.style.width = '40px';
  zoomInButton.style.height = '40px';
  zoomInButton.style.textAlign = 'center';
  zoomInButton.style.borderRadius = '3px';
  zoomInButton.style.marginBottom = '5px';
  /* Change this to be the .png image you want to use */
  zoomInButton.style.backgroundColor = '#2a6fb5';
  controlWrapper.appendChild(zoomInButton);

  // Set CSS for the zoomOut
  var zoomOutButton = document.createElement('div');
  zoomOutButton.style.width = '40px';
  zoomOutButton.style.height = '40px';
  zoomOutButton.style.textAlign = 'center';
  zoomOutButton.style.borderRadius = '3px';
  /* Change this to be the .png image you want to use */
  zoomOutButton.style.backgroundColor = '#2a6fb5';
  controlWrapper.appendChild(zoomOutButton);

  var zoomInButtonText = document.createElement('div');
  zoomInButtonText.style.color = '#fff';
  zoomInButtonText.style.fontFamily = 'Open Sans,sans-serif';
  zoomInButtonText.style.fontSize = '38px';
  zoomInButtonText.style.lineHeight = '38px';
  zoomInButtonText.style.fontWeight = '300';
  zoomInButtonText.innerHTML = '+';
  zoomInButton.appendChild(zoomInButtonText);

  var zoomOutButtonText = document.createElement('div');
  zoomOutButtonText.style.color = '#fff';
  zoomOutButtonText.style.fontFamily = 'Open Sans,sans-serif';
  zoomOutButtonText.style.fontSize = '48px';
  zoomOutButtonText.style.lineHeight = '30px';
  zoomOutButtonText.style.fontWeight = '300';
  zoomOutButtonText.innerHTML = '-';
  zoomOutButton.appendChild(zoomOutButtonText);

  // Setup the click event listener - zoomIn
  google.maps.event.addDomListener(zoomInButton, 'click', function() {
    map.setZoom(map.getZoom() + 1);
  });

  // Setup the click event listener - zoomOut
  google.maps.event.addDomListener(zoomOutButton, 'click', function() {
    map.setZoom(map.getZoom() - 1);
  });

}

function initialize() {

  var mapDiv = document.getElementById('map-canvas');

  var mapOptions = {
    zoom: 17,
    center: myLatLng,
    scrollwheel: false,
    disableDefaultUI: true,
    // zoomControl: true,
    // zoomControlOptions: {
    //     style: google.maps.ZoomControlStyle.LARGE,
    //     position: google.maps.ControlPosition.RIGHT_CENTER,
    // },
  };

  map = new google.maps.Map(mapDiv, mapOptions);

  var image = 'img/map_icon.png';
  var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });

  // Create the DIV to hold the control and call the ZoomControl() constructor
  // passing in this DIV.
  var zoomControlDiv = document.createElement('div');
  var zoomControl = new ZoomControl(zoomControlDiv, map);

  zoomControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);
}

google.maps.event.addDomListener(window, 'load', initialize);
