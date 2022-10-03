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
  ])

  var lugar_LiceoRibas = L.polygon([
    [10.2263, -67.3300],
    [10.2254, -67.3298],
    [10.2253, -67.3309],
    [10.2262, -67.3310]
  ])

  var lugar_Cilento = L.polygon([
    [10.230,-67.322],
    [10.228,-67.322],
    [10.226,-67.325],
    [10.224,-67.327]
  ]).addTo(objMapa);
}

