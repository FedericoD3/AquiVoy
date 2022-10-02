function mostrarMapa()
{

let opcionesMapa = {
  center:[10.230,-67.324],
  zoom:15
}
let objMapa = new L.map('divMapa' , opcionesMapa);

let objCapa = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
objMapa.addLayer(objCapa);

/*
let objMarca = new L.Marker([10.228,-67.3237])
objMarca.addTo(objMapa);

var objMapa = L.map('divMapa').setView([10.230,-67.324], 15);
*/

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(objMapa);
var marker = L.marker([10.228,-67.3237]).addTo(objMapa);

}

/*
objMarca. 

setInterval(function () {AlternarMarca()}, 1000);	// Actualizar el mapa cada pocos segundos

*/

/*
variable opacidad
cada 500mS
  asignar opacidad = abs(opacidad - 1)
  objMarca.setOpacity(opacidad)
  Leer coordenadas nuevas de dweet.io
  objMarca.setLatLng([lat,lon])
*/