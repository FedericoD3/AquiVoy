let opcionesMapa = {
  center:[10.228,-67.324],
  zoom:16
}

let objMapa = new L.map('divMapa' , opcionesMapa);

let objCapa = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
objMapa.addLayer(objCapa);

/*
let objMarca = new L.Marker([10.228,-67.3237])
*/

/*  https://9to5answer.com/how-to-make-markers-in-leaflet-blinking  */
let objMarca = new L.Marker([10.228,-67.3237], {
  icon: L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png',
    className: 'blinking'
  })
})

objMarca.addTo(objMapa);
/*
L.marker([10.232,-67.3237], {
  icon: L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png',
    className: 'destello'
  })
}).addTo(map);
*/
