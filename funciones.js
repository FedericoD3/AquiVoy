function mostrarMapa()
{

/*  let opcionesMapa = 
    {
    center:[10.23,-67.250],
    zoom:13
    }
  let objMapa = new L.map('divMapa' , opcionesMapa);  */
  var objMapa = new L.map('divMapa').setView([10.230,-67.25], 13);

  let objCapa = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
  objMapa.addLayer(objCapa);

  let objMarca = new L.Marker([10.228,-67.3237])
  objMarca.addTo(objMapa);

}