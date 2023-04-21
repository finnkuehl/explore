import java.util.ArrayList;

public class Location {
    private String name;
    private String description;
    private String imageUrl;
    
    public Location(String name, String description, String imageUrl) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
    }
    
    // Getters and setters for name, description, and imageUrl
    
    public static ArrayList<Location> getSampleLocations() {
        ArrayList<Location> locations = new ArrayList<Location>();
        locations.add(new Location("Lissabon", "Hauptstadt Portugals", "https://cdn0.scrvt.com/airportdtm/e10ef632ae4e92ec/a5f44d272b1f/v/487a0abf5522/skyline-lissabon-reisefuehrer-dortmund-airport.jpg));
        locations.add(new Location("Porto", "Bekannt für seinen Portwein", "https://example.com/porto.jpg"));
        locations.add(new Location("Funchal", "Hauptstadt der Insel Madeira", "https://example.com/funchal.jpg"));
        // Add more locations here
        return locations;
    }
}

