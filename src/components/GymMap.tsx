
import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface GymMapProps {
  userLocation: { lat: number; lng: number };
  gyms: Array<{
    id: string;
    name: string;
    location: string;
    coordinates: { lat: number; lng: number };
    rating: number;
    image: string;
  }>;
}

const GymMap = ({ userLocation, gyms }: GymMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapboxToken, setMapboxToken] = useState<string>("");
  const [selectedGym, setSelectedGym] = useState<string | null>(null);

  // This is a placeholder for actual map implementation
  // In a real implementation, you would use a map library like Mapbox, Google Maps, or Leaflet
  useEffect(() => {
    // Display a message to get the actual map integration
    if (mapRef.current) {
      mapRef.current.innerHTML = `
        <div class="absolute inset-0 flex flex-col items-center justify-center bg-secondary/30 p-6 text-center">
          <div class="mb-4 text-accent"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
          <h3 class="text-xl font-bold mb-2">Map Integration Required</h3>
          <p class="mb-4 text-muted-foreground">To enable the interactive map functionality, you need to add a Mapbox API key.</p>
          <p class="mb-4 text-sm">For a full implementation, consider connecting to Supabase and storing the Mapbox API key securely.</p>
        </div>
      `;
    }
  }, [userLocation, gyms]);

  return (
    <div className="relative h-full">
      {/* Map container */}
      <div ref={mapRef} className="h-full w-full relative">
        {/* This div will be replaced by the actual map in a real implementation */}
      </div>

      {/* Gym list sidebar */}
      <div className="absolute top-4 left-4 w-64 max-h-[calc(100%-32px)] bg-background/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-border">
        <div className="p-3 bg-primary text-primary-foreground font-semibold">
          Gyms Near You
        </div>
        <ScrollArea className="h-[500px] p-3">
          {gyms.map((gym) => (
            <div
              key={gym.id}
              className={cn(
                "p-3 mb-2 rounded-md cursor-pointer transition-colors",
                selectedGym === gym.id
                  ? "bg-primary/10 border border-primary/30"
                  : "hover:bg-secondary"
              )}
              onClick={() => setSelectedGym(gym.id)}
            >
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">{gym.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {gym.location}
                  </div>
                  <div className="text-sm mt-1 flex items-center">
                    <span className="text-amber-500 font-medium">
                      {gym.rating.toFixed(1)}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      {(
                        Math.random() * 5 + 0.5
                      ).toFixed(1)} km away
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Map controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <Button
          variant="secondary"
          size="icon"
          className="h-10 w-10 bg-background/90 backdrop-blur-sm shadow-lg"
        >
          <span className="text-lg">+</span>
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="h-10 w-10 bg-background/90 backdrop-blur-sm shadow-lg"
        >
          <span className="text-lg">-</span>
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="h-10 w-10 bg-background/90 backdrop-blur-sm shadow-lg"
        >
          <MapPin className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default GymMap;
