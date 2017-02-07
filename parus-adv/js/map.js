var map;
// var samara = new google.maps.LatLng(53.198729, 50.111249);
// var kazan = new google.maps.LatLng(55.828813, 49.064310);

if (location.hash == '#kazan_city') {
    center_start = kazan;
}
else{
    center_start = moscow;
}    

  

function active_city(hasi){
            $('#to_'+hasi).parent().siblings().removeClass('active');
            $('#to_'+hasi).parent().addClass('active');
            $('#'+hasi).siblings().removeClass("active");
            $('#'+hasi).addClass('active');
}
var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

    var featureOpts = [
        {
            stylers: [
                {hue: '#cccccc'},
                {saturation: -100},
                {lightness: -10},
                {visibility: 'simplified'}
            ]
        },
        {
            elementType: 'labels',
            stylers: [
                {visibility: 'off'}
            ]
        },
        {
            featureType: 'water',
            stylers: [
                {color: '#ccc'}
            ]
        }

    ];

    var mapOptions = {
        zoom: 15,
        center: center_start,
        scrollwheel: false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
        },
        mapTypeId: MY_MAPTYPE_ID
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var styledMapOptions = {
        name: 'Custom Style'
    };

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

    var image = '/bitrix/templates/parus/img/map_icon.png';

    var beachMarker = new google.maps.Marker({
        position: samara,
        map: map,
        icon: image
    });
    var beachMarker2 = new google.maps.Marker({
        position: kazan,
        map: map,
        icon: image
    });
    var beachMarker3 = new google.maps.Marker({
        position: moscow,
        map: map,
        icon: image
    });

    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}

google.maps.event.addDomListener(window, 'load', initialize);

function clickroute(lati,long,hasi) {
    var latLng = new google.maps.LatLng(lati, long); //Makes a latlng
    map.panTo(latLng); //Make map global
    active_city(hasi);
}


$(document).ready(function() {
    active_city("moscow");
});