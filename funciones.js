function mostrarMapa()
{
/*  var objMapa = L.map('divMapa').setView([10.235,-67.24], 13);  */
  var objMapa = L.map('divMapa').setView([10.230,-67.324], 15);

  var objCapa = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
      objMapa.addLayer(objCapa); 
      
  var objMarca = L.marker([10.230,-67.320]).addTo(objMapa);


  var lugar_Unicentro =L.polygon([
    [10.2264, -67.3323],
    [10.2263, -67.3334],
    [10.2266, -67.3334],
    [10.2267, -67.3323]
  ]).addTo(objMapa);

  var lugar_LiceoRibas = L.polygon([
    [10.2263, -67.3300],
    [10.2254, -67.3298],
    [10.2253, -67.3309],
    [10.2262, -67.3310]
  ]).addTo(objMapa);

  var lugar_Cilento = L.polygon([
    [10.2272, -67.3244],
    [10.2277, -67.3235],
    [10.2272, -67.3232],
    [10.2266, -67.3241]
  ]).addTo(objMapa);
}

