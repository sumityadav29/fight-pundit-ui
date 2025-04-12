
import React from "react";
import { Dumbbell } from "lucide-react";
import GymCard from "@/components/GymCard";
import { Gym } from "@/api/gyms";

interface GymsListProps {
  gyms: Gym[];
  searchQuery: string;
}

const GymsList = ({ gyms, searchQuery }: GymsListProps) => {
  // Filter gyms based on search query
  const filteredGyms = gyms.filter(gym => 
    gym.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    gym.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (gym.disciplines && gym.disciplines.some(discipline => 
      discipline.toLowerCase().includes(searchQuery.toLowerCase())
    )) ||
    gym.classes_offered.some(className => 
      className.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredGyms.length > 0 ? (
        filteredGyms.map((gym) => (
          <GymCard 
            key={gym.id || gym.name}
            id={gym.id || gym.name}
            name={gym.name}
            location={gym.location || gym.address.split(",")[0]}
            rating={gym.rating || 4.5}
            image={gym.image || "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920"}
            disciplines={gym.disciplines || gym.classes_offered.slice(0, 3)}
            memberCount={gym.memberCount || 150}
            featured={gym.featured || false}
          />
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <Dumbbell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No gyms found</h3>
          <p className="text-muted-foreground">
            Try changing your search query or filters
          </p>
        </div>
      )}
    </div>
  );
};

export default GymsList;
