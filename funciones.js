function mostrarMapa()
{

/*
let opcionesMapa = {
  center:[10.230,-67.324],
  zoom:15 
}
*/

let opcionesMapa = {
  center:[10.235,-67.25],
  zoom:13
}
let objMapa = new L.map('divMapa' , opcionesMapa);

let objCapa = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
objMapa.addLayer(objCapa);

let objMarca = new L.Marker([10.228,-67.323])
objMarca.addTo(objMapa);

}

/*

setInterval(function () {AlternarMarca()}, 1000);	// Actualizar el mapa cada pocos segundos

variable opacidad
cada 500mS
  asignar opacidad = abs(opacidad - 1)
  objMarca.setOpacity(opacidad)
  Leer coordenadas nuevas de dweet.io
  objMarca.setLatLng([lat,lon])
*/