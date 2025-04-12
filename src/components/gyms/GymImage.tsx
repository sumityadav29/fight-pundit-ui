
import React from "react";
import { Badge } from "@/components/ui/badge";

interface GymImageProps {
  image: string;
  name: string;
  featured?: boolean;
}

const GymImage = ({ image, name, featured = false }: GymImageProps) => {
  return (
    <div className="relative">
      <img 
        src={image} 
        alt={name} 
        className="h-48 w-full object-cover"
      />
      {featured && (
        <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
          Featured
        </Badge>
      )}
    </div>
  );
};

export default GymImage;
