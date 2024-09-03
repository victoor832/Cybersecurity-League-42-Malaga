document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
let score = 0; // No es necesario mantener esta variable ya que solo hay una validación

const place = [
  [{ lat: 40.51799575005233, lng: -3.659179305163815 }, "Madrid"] // Simplificado a una sola entrada
];

let currentPlaceIndex = 0;

function initialize() {
  panorama = new google.maps.StreetViewPanorama(document.getElementById("street-view"), {
    position: place[0][0], // Usamos directamente la primera entrada del array simplificado
    pov: { heading: 165, pitch: 0 },
    zoom: 1,
    disableDefaultUI: true, // Opciones de personalización del mapa
    clickToGo: false,
    scrollwheel: false,
    linksControl: false,
    panControl: false,
    zoomControl: false,
    addressControl: false,
    showRoadLabels: false
  });
}

function nextLocation() {
  currentPlaceIndex++; // Este método no será utilizado
}

function guess() {
  var userGuess = window.prompt("¿Dónde estamos?").trim().toLowerCase(); // Aseguramos que la entrada del usuario sea en minúsculas
  var targetPlace = place[0][1].toLowerCase(); // Convertimos la cadena objetivo a minúsculas para la comparación
  if (userGuess === targetPlace) { // Ahora la comparación es insensible a mayúsculas
    alert("Correcto, tu flag es: flag{Madrid}");
  } else {
    alert("Incorrecto.");
  }
  // nextLocation(); // Esta línea no es necesaria y se ha comentado
}

initialize();
