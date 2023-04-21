const locations = [
	{
		name: "Lissabon",
		description: "Hauptstadt Portugals",
		imageUrl: "https://cdn0.scrvt.com/airportdtm/e10ef632ae4e92ec/a5f44d272b1f/v/487a0abf5522/skyline-lissabon-reisefuehrer-dortmund-airport.jpg"
	},
	{
		name: "Porto",
		description: "Bekannt für seinen Portwein",
		imageUrl: "https://example.com/porto.jpg"
	},
	{
		name: "Funchal",
		description: "Hauptstadt der Insel Madeira",
		imageUrl: "https://example.com/funchal.jpg"
	},
	// Add more locations here
];

let currentLocationIndex = 0;

function swipe(action) {
	if (action === "cool") {
		// Code to mark location as cool
	}
	else {
		// Code to mark location as not cool
	}

	currentLocationIndex++;
	if (currentLocationIndex >= locations.length) {
		currentLocationIndex = 0;
	}

