
import React, { useState } from "react";
import { Users } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import GymImage from "@/components/gyms/GymImage";
import GymCardHeader from "@/components/gyms/GymCardHeader";
import GymDisciplines from "@/components/gyms/GymDisciplines";
import GymDetailsDialog from "@/components/gyms/GymDetailsDialog";

interface GymCardProps {
  id: string;
  name: string;
  location: string;
  rating: number;
  image: string;
  disciplines: string[];
  memberCount: number;
  featured?: boolean;
}

const GymCard = ({
  id,
  name,
  location,
  rating,
  image,
  disciplines,
  memberCount,
  featured = false,
}: GymCardProps) => {
  const [openDialog, setOpenDialog] = useState(false);
  
  return (
    <Card className={`fight-card ${featured ? 'border-accent' : ''}`}>
      <GymImage image={image} name={name} featured={featured} />
      
      <GymCardHeader name={name} location={location} rating={rating} />
      
      <CardContent className="p-4 pt-0">
        <GymDisciplines disciplines={disciplines} />
        
        <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>{memberCount} members</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger asChild>
            <Button className="w-full btn-punch">View Gym</Button>
          </DialogTrigger>
          
          <GymDetailsDialog
            name={name}
            location={location}
            rating={rating}
            image={image}
            disciplines={disciplines}
          />
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default GymCard;
