$(document).ready(function () {

	//Open street  Map
	var coord = [10.948121221987646, 106.8550734769955]; // <--- coordinates here

	var map = L.map('map-canvas', { scrollWheelZoom: false }).setView(coord, 19);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 22,

	}).addTo(map);

	L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
		attribution: ''
	}).addTo(map);

	// custom icon
	var customIcon = L.icon({
		iconUrl: 'img/mapmarker.png',
		iconSize: [64, 64], // size of the icon
		iconAnchor: [32, 63] // point of the icon which will correspond to marker's location
	});

	// marker object, pass custom icon as option, add to map         
	var marker = L.marker(coord, { icon: customIcon }).addTo(map);


	//Open street  Map
	var coord2 = [10.94752126440296, 106.82323505316518]; // <--- coordinates here

	var map2 = L.map('map-canvas-2', { scrollWheelZoom: false }).setView(coord2, 19);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 22,

	}).addTo(map2);

	L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
		attribution: ''
	}).addTo(map2);

	// custom icon
	var customIcon2 = L.icon({
		iconUrl: 'img/mapmarker.png',
		iconSize: [64, 64], // size of the icon
		iconAnchor: [32, 63] // point of the icon which will correspond to marker's location
	});

	// marker object, pass custom icon as option, add to map         
	var marker2 = L.marker(coord2, { icon: customIcon2 }).addTo(map2);
});