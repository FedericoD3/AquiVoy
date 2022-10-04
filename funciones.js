function mostrarMapa()
{
/*  var objMapa = L.map('divMapa').setView([10.235,-67.24], 13);  
  var objMapa = L.map('divMapa').setView([10.230,-67.324], 15);  */
  var objMapa = L.map('divMapa').setView([10.228,-67.322], 20);
  var objCapa = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
      objMapa.addLayer(objCapa); 
      
  var objMarca = L.marker([10.230,-67.320]).addTo(objMapa);

/* 
  Perimetro terrestre = 40.030.173m 
  1° = 111.196m
  1m = 9µ° 
*/

  var lugar_Unicentro =L.polygon([
    [10.22683, -67.33231],
    [10.22638, -67.33228],
    [10.22634, -67.33343],
    [10.22673, -67.33346]
  ]).addTo(objMapa);

  var lugar_LiceoRibas = L.polygon([
    [10.22623, -67.32995],
    [10.22544, -67.32986],
    [10.22542, -67.33098],
    [10.22620, -67.33100]
  ]).addTo(objMapa);

  var lugar_Cilento = L.polygon([
    [10.22775, -67.32355],
    [10.22694, -67.32307],
    [10.22633, -67.32418],
    [10.22710, -67.32465]
  ]).addTo(objMapa);

  var lugar_Solidario = L.polygon([
    [10.22910, -67.32100],
    [10.22820, -67.32063],
    [10.22795, -67.32123],
    [10.22885, -67.32160]
  ]).addTo(objMapa);
}

