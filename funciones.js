function mostrarMapa()
{
  var objMapa = L.map('divMapa').setView([10.235,-67.24], 13);

  var objCapa = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
  objMapa.addLayer(objCapa);  

  let objMarca = new L.Marker([10.228,-67.3237])
  objMarca.addTo(objMapa);
}