
import React, { useState } from "react";
import { MapPin, Star, Info, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface GymDetailsDialogProps {
  name: string;
  location: string;
  rating: number;
  image: string;
  disciplines: string[];
}

const GymDetailsDialog = ({
  name,
  location,
  rating,
  image,
  disciplines,
}: GymDetailsDialogProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();

  const toggleFavorite = () => {
    const newFavoriteState = !isFavorite;
    setIsFavorite(newFavoriteState);
    
    toast({
      title: newFavoriteState ? "Added to favorites" : "Removed from favorites",
      description: newFavoriteState ? `${name} has been added to your favorites` : `${name} has been removed from your favorites`,
      duration: 3000,
    });
  };

  return (
    <DialogContent className="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle>{name}</DialogTitle>
        <DialogDescription>
          <div className="flex items-center gap-2 mt-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
            <div className="ml-auto flex items-center gap-1 text-amber-500">
              <Star className="fill-amber-500 stroke-amber-500 h-4 w-4" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
      <div className="mt-2">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-56 object-cover rounded-md mb-4"
        />
        <h3 className="text-sm font-medium mb-2">Disciplines</h3>
        <div className="flex flex-wrap gap-1 mb-4">
          {disciplines.map((discipline) => (
            <Badge key={discipline} variant="secondary" className="font-normal">
              {discipline}
            </Badge>
          ))}
        </div>
        <div className="bg-muted/50 rounded-md p-3 mb-4">
          <div className="flex items-center gap-2 text-sm mb-1">
            <Info className="h-4 w-4 text-primary" />
            <span className="font-medium">About this gym</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Contact {name} for detailed information about membership options, class schedules, and trial availability.
          </p>
        </div>
        <div className="flex gap-2 mt-4">
          <Button className="w-full">Contact Gym</Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={toggleFavorite}
            className="relative"
          >
            <Heart 
              className={`h-5 w-5 transition-colors ${isFavorite ? 'fill-red-500 stroke-red-500' : ''}`} 
            />
          </Button>
        </div>
      </div>
    </DialogContent>
  );
};

export default GymDetailsDialog;
