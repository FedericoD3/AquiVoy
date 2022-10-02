function mostrarMapa()
{
let opcionesMapa = {
  center:[10.23,-67.250],
  zoom:13
}
let objMapa = new L.map('divMapa' , opcionesMapa);

let objCapa = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
objMapa.addLayer(objCapa);

let objMarca = new L.Marker([10.228,-67.3237])
objMarca.addTo(objMapa);

/*
Solo La Victoria:
let opcionesMapa = {
  center:[10.230,-67.324],
  zoom:15

La Victoria hasta Tejerias
let opcionesMapa = {
  center:[10.23,-67.250],
  zoom:13

setInterval(function () {ActualizarMarca()}, 1000);	// Actualizar el mapa cada pocos segundos

variable opacidad
cada 500mS
  asignar opacidad = abs(opacidad - 1)
  objMarca.setOpacity(opacidad)
  Leer coordenadas nuevas de dweet.io
  objMarca.setLatLng([lat,lon])
*/
}