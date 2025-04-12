
import React from "react";
import { Star, MapPin } from "lucide-react";
import { 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";

interface GymCardHeaderProps {
  name: string;
  location: string;
  rating: number;
}

const GymCardHeader = ({ name, location, rating }: GymCardHeaderProps) => {
  return (
    <CardHeader className="p-4 pb-2">
      <div className="flex justify-between items-start">
        <CardTitle className="text-lg">{name}</CardTitle>
        <div className="flex items-center gap-1 text-amber-500">
          <Star className="fill-amber-500 stroke-amber-500 h-4 w-4" />
          <span className="text-sm font-medium">{rating.toFixed(1)}</span>
        </div>
      </div>
      <CardDescription className="flex items-center gap-1 text-muted-foreground">
        <MapPin className="h-3.5 w-3.5" />
        <span>{location}</span>
      </CardDescription>
    </CardHeader>
  );
};

export default GymCardHeader;
