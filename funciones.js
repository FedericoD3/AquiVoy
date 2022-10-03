function mostrarMapa()
{
/*  var objMapa = L.map('divMapa').setView([10.235,-67.24], 13);  */
  var objMapa = L.map('divMapa').setView([10.230,-67.324], 15);

  var objCapa = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
      objMapa.addLayer(objCapa); 
      
  var objMarca = L.marker([10.230,-67.320]).addTo(objMapa);

/* 
  Perimetro terrestre = 40.030.173m 
  1° = 111.196m
  1m = 9µ° 
*/

  var lugar_Unicentro =L.polygon([
    [10.2263510, -67.3322838],
    [10.2263062, -67.3334009],
    [10.2267114, -67.3334599],
    [10.2268302, -67.3322918]
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

  var lugar_Solidario = L.polygon([
    [10.2290, -67.3211],
    [10.2282, -67.3207],
    [10.2280, -67.3212],
    [10.2289, -67.3216]
  ]).addTo(objMapa);
}

