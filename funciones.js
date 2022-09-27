let opcionesMapa = (
  center:[10.2300,-67.3240]
  zoom:16
)

let mapa = new L.map('mapa' , opcionesMapa);
let capa = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
map.addLayer(capa);
