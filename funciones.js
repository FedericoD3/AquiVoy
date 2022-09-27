let opcionesMapa = {
  center:[10.228,-67.324],
  zoom:16
}

let objMapa = new L.map('divMapa' , opcionesMapa);

let objCapa = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
objMapa.addLayer(objCapa);

let objMarca = new L.Marker([10.232,-67.3237]);
objMarca.addTo(objMapa);
