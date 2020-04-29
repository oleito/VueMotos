// Initialize and add the map
function initMap() {
  // The location of Uluru
  var concesionario = { lat: -33.2954723, lng: -66.3380631 };
  var center = { lat: -33.2954723, lng: -66.3380631 };
  //var icono = "./img/icon_maps.png";
  // var icono = "https://imgplaceholder.com/200x320";
  // The map, centered at concesionario
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: center
  });
  var contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Paris Postventa</h1>' +
    '<div id="bodyContent">' +
    "<p>Somos parte de la familia <b>Paris Autos</b>, unico " +
    "concesionario oficial en la ciudad de San Luis, siendo " +
    "representantes oficiales de las marcas Peugeot, Citroën " +
    "</p>" +
    "<p>Encontranos en Av. Santos Ortiz 1228, ciudad de <b>San Luis</b></p>" +
    "</div>" +
    "</div>";

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  // The marker, positioned at concesionario
  var marker = new google.maps.Marker({
    position: concesionario,
    map: map,
    //icon: './gmap/flag_mpeugeot.png',
    title: "Paris Postventa"
  });

  marker.addListener("click", function() {
    infowindow.open(map, marker);
  });
}
