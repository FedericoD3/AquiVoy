let opcionesMapa = {
  center:[10.230,-67.324],
  zoom:16
}

let map = new L.map('mapa' , opcionesMapa);
let capa = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(capa);

let marca = new L.Marker([10.2305,-67.3237]);
marca.addTo(mapa);
