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
        locations.add(new Location("Lissabon", "Hauptstadt Portugals", "https://example.com/lisbon.jpg"));
        locations.add(new Location("Porto", "Bekannt für seinen Portwein", "https://example.com/porto.jpg"));
        locations.add(new Location("Funchal", "Hauptstadt der Insel Madeira", "https://example.com/funchal.jpg"));
        // Add more locations here
        return locations;
    }
}

