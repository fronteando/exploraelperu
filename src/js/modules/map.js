var map = function() {
	var locations = [
		['<p class="marker-title">Portal Confituria Nro 257</p><p class="marker-paragraph">Plaza de Armas Cusco - Perú</p>', -13.516575,-71.979588, 'images/global/marker.png']
	];

	var map = new google.maps.Map(document.getElementById('contact-map'), mapOptions);

	var infowindow = new google.maps.InfoWindow();
	var markers = new Array();
	var marker, i;

	for (var i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map,
			icon: locations[i][3]
		});
		markers.push(new google.maps.LatLng(locations[i][1], locations[i][2]));
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	};
}
module.exports = map;