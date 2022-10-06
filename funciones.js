function initMapa()
{
  let Lat=LeerCoords()
}

function mostrarMapa()
{
//  var objMapa = L.map('divMapa').setView([10.235,-67.24], 13);  
  var objMapa = L.map('divMapa').setView([10.230,-67.324], 16);  
  
  var objCapa = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
      objMapa.addLayer(objCapa); 
      
  var objMarca = L.marker([10.230,-67.320]).addTo(objMapa);

/* 
  Perimetro terrestre = 40.030.173m 
  1° = 111.196m
  1m = 9µ° ≈ 0,00001°
*/
  var lugar_Unicentro =L.polygon([
    [10.22683, -67.33231],
    [10.22638, -67.33228],
    [10.22634, -67.33343],
    [10.22678, -67.33347]
  ], {fillOpacity: 1, weight: 1, color: '#ff0000'}).addTo(objMapa);

  var lugar_LiceoRibas = L.polygon([
    [10.22623, -67.32995],
    [10.22544, -67.32986],
    [10.22542, -67.33098],
    [10.22620, -67.33100]
  ], {fillOpacity: 1, weight: 1, color: '#ff0000'}).addTo(objMapa);

  var lugar_Cilento = L.polygon([
    [10.22775, -67.32355],
    [10.22694, -67.32307],
    [10.22633, -67.32418],
    [10.22710, -67.32465]
  ], {fillOpacity: 1, weight: 1, color: '#ff0000'}).addTo(objMapa);

  var lugar_Solidario = L.polygon([
    [10.22910, -67.32100],
    [10.22820, -67.32063],
    [10.22795, -67.32123],
    [10.22885, -67.32160]
  ], {fillOpacity: 1, weight: 1, color: '#ff0000'}).addTo(objMapa);

  var lugar_GranCampo = L.polygon([
    [10.23006, -67.31832],
    [10.22951, -67.31814],
    [10.22940, -67.31848],
    [10.22991, -67.31868]
  ], {fillOpacity: 1, weight: 1, color: '#ff0000'}).addTo(objMapa);

  var lugar_Vivero = L.polygon([
    [10.231140, -67.31738],
    [10.230800, -67.31723],
    [10.230570, -67.31780],
    [10.230915, -67.31795]
  ], {fillOpacity: 1, weight: 1, color: '#ff0000'}).addTo(objMapa);

  var lugar_Piccolo = L.polygon([
    [10.232300, -67.31364],
    [10.231870, -67.31364],
    [10.231930, -67.31400],
    [10.232300, -67.31400]
  ], {fillOpacity: 1, weight: 1, color: '#ff0000'}).addTo(objMapa);  
}

function LeerCoords()
{
  dweetio.get_latest_dweet_for("Monitor_CoordFik", function(err, dweet) {
    var ubicacion = dweet[0];           // El contenido es siempre un array de un solo elemento
    return ubicacion.Lon;
/*  console.log(ubicacion.content);     // String contenido del dweet
    console.log(ubicacion.content.Lon);     // Elemento del contenido del dweet
    console.log(ubicacion.content.Lat);     // Elemento del contenido del dweet
    console.log(ubicacion.content.Vel);     // Elemento del contenido del dweet
    console.log(ubicacion.content.Com);     // Elemento del contenido del dweet
*/    });
}

function DestellarMarca()
{
  /*
  Si la latitud previa es cero,
    
  Salvar la latitud previa
  Leer la ubicación
  Si la longitud es < -67.3067 ya está cerca de La Victoria: 
      generar el mapa de sólo La Victoria

    en caso contrario voy por la vía:
      generar el mapa desde La Victoria hasta Tejerías

  */
  // Leer la ubicacion:
  var Latitud = LeerCoords(); 
  console.log(Latitud.Lon);
//  document.getElementById("debug").innerHTML = x;
//  console.log x;
}