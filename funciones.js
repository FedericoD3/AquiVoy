function mostrarMapa()
{
  var objMapa = L.map('divMapa').setView([10.235,-67.24], 13);

  var objCapa = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
      objMapa.addLayer(objCapa); 
      
  var objMarca = L.marker([10.230,-67.322]).addTo(objMapa);
}

