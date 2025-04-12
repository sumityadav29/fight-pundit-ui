
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { format } from "date-fns";

interface EventCardProps {
  id: string;
  title: string;
  date: Date;
  location: string;
  image: string;
  type: "session" | "competition";
  participants: number;
  maxParticipants?: number;
  xpPoints?: number;
}

const EventCard = ({
  id,
  title,
  date,
  location,
  image,
  type,
  participants,
  maxParticipants,
  xpPoints,
}: EventCardProps) => {
  const isCompetition = type === "competition";
  
  return (
    <Card className={`fight-card ${isCompetition ? 'border-accent/50' : ''}`}>
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="h-40 w-full object-cover"
        />
        <Badge 
          className={`absolute top-3 right-3 ${
            isCompetition ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'
          }`}
        >
          {isCompetition ? 'Competition' : 'Training Session'}
        </Badge>
      </div>
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-lg line-clamp-1">{title}</CardTitle>
        <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
          <Calendar className="h-4 w-4" />
          <span>{format(date, 'MMM d, yyyy')}</span>
          <Clock className="h-4 w-4 ml-2" />
          <span>{format(date, 'h:mm a')}</span>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center gap-1 text-muted-foreground text-sm">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-1 text-sm">
            <Users className="h-4 w-4" />
            <span>{participants}{maxParticipants ? `/${maxParticipants}` : ''}</span>
          </div>
          {isCompetition && xpPoints && (
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
              +{xpPoints} XP
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className={`w-full btn-punch ${isCompetition ? 'bg-accent hover:bg-accent/90' : ''}`}
        >
          {isCompetition ? 'Register Now' : 'Book Session'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
