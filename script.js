// Array mit den Orten und Beschreibungen
const places = [
  {
    name: 'Sintra',
    image: 'images/sintra.jpg',
    description: 'Sintra ist eine kleine Stadt in der Nähe von Lissabon und bekannt für ihre prächtigen Paläste und Gärten.'
  },
  {
    name: 'Porto',
    image: 'images/porto.jpg',
    description: 'Porto ist die zweitgrößte Stadt Portugals und berühmt für ihren Wein und ihre historische Altstadt, die zum UNESCO-Weltkulturerbe gehört.'
  },
  {
    name: 'Lagos',
    image: 'images/lagos.jpg',
    description: 'Lagos ist eine Küstenstadt an der Algarve und bekannt für ihre Strände und Klippen sowie ihr historisches Zentrum.'
  },
  {
    name: 'Coimbra',
    image: 'images/coimbra.jpg',
    description: 'Coimbra ist eine Universitätsstadt im Zentrum Portugals und bekannt für ihre historische Universität und Bibliothek.'
  },
  {
    name: 'Lissabon',
    image: 'images/lisbon.jpg',
    description: 'Lissabon ist die Hauptstadt Portugals und bekannt für ihre historische Altstadt, ihre Brücken und ihre Aussichtspunkte.'
  },
  {
    name: 'Funchal',
    image: 'images/funchal.jpg',
    description: 'Funchal ist die Hauptstadt der portugiesischen Insel Madeira und bekannt für ihre Gärten, Parks und die Altstadt.'
  },
  {
    name: 'Evora',
    image: 'images/evora.jpg',
    description: 'Évora ist eine Stadt im Süden Portugals und bekannt für ihre römischen Ruinen, mittelalterlichen Gebäude und die Universität.'
  },
  {
    name: 'Aveiro',
    image: 'images/aveiro.jpg',
    description: 'Aveiro ist eine Küstenstadt im Norden Portugals und bekannt für ihre Kanäle, Brücken und das traditionelle Boot "Moliceiro".'
  },
  {
    name: 'Tomar',
    image: 'images/tomar.jpg',
    description: 'Tomar ist eine Stadt im Zentrum Portugals und bekannt für ihre römische Brücke, ihre mittelalterliche Burg und das Kloster von Christus.'
  },
  {
    name: 'Guimaraes',
    image: 'images/guimaraes.jpg',
    description: 'Guimarães ist eine Stadt im Norden Portugals und bekannt für ihre mittelalterliche Architektur und ihr Schloss.'
  }
];

// Variablen für die Anzeige des aktuellen Ortes
const placeImg = document.querySelector('#place-img');
const placeName = document.querySelector('#place-name');
const placeDesc = document.querySelector('#place-desc');

// Variablen für die Button-Elemente
const coolBtn = document.querySelector('#cool-btn');
const boringBtn = document.querySelector('#boring-btn');

// Funktion zum Anzeigen des aktuellen Ortes
function showPlace(placeIndex) {
  const place = places[placeIndex];
  placeImg.src = place.image;
  placeImg.alt = place.name;
  placeName.textContent = place.name;
  placeDesc.textContent = place.description;
}

// Initialisierung der App mit dem ersten Ort
let currentPlace = 0;
showPlace(currentPlace
