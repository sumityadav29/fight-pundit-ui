
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import GymMap from "@/components/GymMap";
import GymsHeader from "@/components/gyms/GymsHeader";
import GymsList from "@/components/gyms/GymsList";
import GymsLoadingState from "@/components/gyms/GymsLoadingState";
import GymsErrorState from "@/components/gyms/GymsErrorState";
import { useGymData } from "@/hooks/useGymData";

const Gyms = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState<"list" | "map">("list");
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const { gyms, loading, error, disciplines } = useGymData();
  
  // Get user's location for "near me" functionality
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          // Default to center of Bangalore if location is not available
          setUserLocation({ lat: 12.9716, lng: 77.5946 });
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header with search and filters */}
        <GymsHeader 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          view={view}
          setView={setView}
          disciplines={disciplines}
        />

        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          {loading ? (
            <GymsLoadingState />
          ) : error ? (
            <GymsErrorState error={error} />
          ) : view === "list" ? (
            <GymsList gyms={gyms} searchQuery={searchQuery} />
          ) : (
            <div className="h-[600px] rounded-lg overflow-hidden border">
              {userLocation && (
                <GymMap 
                  userLocation={userLocation} 
                  gyms={gyms.map(gym => ({
                    id: gym.id || gym.name,
                    name: gym.name,
                    location: gym.location || gym.address.split(",")[0],
                    coordinates: gym.coordinates || { lat: 12.9716, lng: 77.5946 },
                    rating: gym.rating || 4.5,
                    image: gym.image || "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920"
                  }))} 
                />
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Gyms;
