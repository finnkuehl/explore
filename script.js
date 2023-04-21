// Objekt mit den 10 Orten in Portugal
const locations = [
  {
    name: "Lissabon",
    description: "Hauptstadt Portugals und ein wunderschöner Ort zum Besuchen.",
    image: "lissabon.jpg"
  },
  {
    name: "Porto",
    description: "Eine charmante Stadt im Norden Portugals bekannt für ihren Portwein.",
    image: "porto.jpg"
  },
  {
    name: "Funchal",
    description: "Die Hauptstadt von Madeira, einer portugiesischen Insel im Atlantik.",
    image: "funchal.jpg"
  },
  {
    name: "Sintra",
    description: "Eine Stadt westlich von Lissabon, bekannt für ihre prächtigen Schlösser und Paläste.",
    image: "sintra.jpg"
  },
  {
    name: "Algarve",
    description: "Eine Küstenregion im Süden Portugals mit schönen Stränden und einem milden Klima.",
    image: "algarve.jpg"
  },
  {
    name: "Coimbra",
    description: "Eine alte Universitätsstadt im Zentrum Portugals mit einer reichen Geschichte.",
    image: "coimbra.jpg"
  },
  {
    name: "Guimaraes",
    description: "Eine historische Stadt im Norden Portugals, die als Geburtsort der Nation gilt.",
    image: "guimaraes.jpg"
  },
  {
    name: "Evora",
    description: "Eine wunderschöne Stadt im Alentejo-Region im Süden Portugals.",
    image: "evora.jpg"
  },
  {
    name: "Aveiro",
    description: "Eine Küstenstadt südlich von Porto, bekannt für ihre Kanäle und bunten Boote.",
    image: "aveiro.jpg"
  },
  {
    name: "Braga",
    description: "Eine historische Stadt im Norden Portugals mit vielen Kirchen und einem beeindruckenden Platz.",
    image: "braga.jpg"
  }
];

let currentLocationIndex = 0; // Der Index des aktuellen Orts
let coolLocations = []; // Array für die mit "Cool" bewerteten Orte
let langweiligLocations = []; // Array für die mit "Langweilig" bewerteten Orte

// Funktion, um den aktuellen Ort zu ändern
function changeLocation() {
  const location = locations[currentLocationIndex]; // Der aktuelle Ort
  document.getElementById("location-name").textContent = location.name; // Name des Ortes
  document.getElementById("location-description").textContent = location.description; // Beschreibung des Ortes
  document.getElementById("location-image").src = "images/" + location.image; // Bild des Ortes
}

// Funktion, um einen Ort zu bewerten
function rateLocation(rating) {
  if (rating === "cool") {
    coolLocations.push(currentLocationIndex); // Aktuellen Ort in das "Cool" Array hinzufügen
  } else if (rating === "langweilig") {
    langweiligLocations.push(currentLocationIndex); // Aktuellen Ort in das "Langweilig" Array hinzufügen
  }
  currentLocationIndex++; // Nächsten Ort anzeigen
  if (currentLocationIndex >= locations.length) {
    // Wenn alle Orte bewertet wurden, zur Karte springen
    showMap();
 
