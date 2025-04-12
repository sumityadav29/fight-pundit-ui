
import { useState, useEffect } from "react";
import { Heart, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GymCard from "@/components/GymCard";
import { fetchFeaturedGyms, Gym } from "@/api/gyms";

const FavoriteGymsSection = () => {
  const [featuredGyms, setFeaturedGyms] = useState<Gym[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGyms = async () => {
      try {
        setLoading(true);
        const gyms = await fetchFeaturedGyms();
        setFeaturedGyms(gyms);
        setError(null);
      } catch (err) {
        console.error("Error fetching gyms:", err);
        setError("Failed to load featured gyms. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadGyms();
  }, []);

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500 fill-red-500" />
            <h2 className="text-2xl font-bold">Your Favorite Gyms</h2>
          </div>
          <Link to="/gyms">
            <Button variant="outline" className="hidden sm:flex items-center">
              View All Gyms
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border rounded-lg p-4 h-80 animate-pulse">
                <div className="bg-gray-200 h-48 rounded-md mb-4"></div>
                <div className="bg-gray-200 h-4 rounded-md w-3/4 mb-2"></div>
                <div className="bg-gray-200 h-4 rounded-md w-1/2"></div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">
            <p>{error}</p>
            <Button onClick={() => window.location.reload()} className="mt-4">
              Retry
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGyms.map((gym) => (
              <GymCard 
                key={gym.id}
                id={gym.id || gym.name}
                name={gym.name}
                location={gym.location || gym.address.split(",")[0]}
                rating={gym.rating || 4.5}
                image={gym.image || "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920"}
                disciplines={gym.disciplines || gym.classes_offered.slice(0, 3)}
                memberCount={gym.memberCount || 150}
                featured={gym.featured || false}
              />
            ))}
            
            <div className="border border-dashed rounded-lg flex flex-col items-center justify-center p-6 text-center hover:bg-secondary/20 transition-colors">
              <div className="bg-primary/10 rounded-full p-3 mb-4">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Discover More Gyms</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Find and favorite more MMA gyms across India
              </p>
              <Link to="/gyms">
                <Button>Browse Gyms</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FavoriteGymsSection;
