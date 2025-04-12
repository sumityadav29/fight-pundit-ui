
import { Calendar, Clock, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import CompetitionCountdown from "@/components/CompetitionCountdown";

// Mock data for upcoming sessions
const upcomingSessions = [
  {
    id: "1",
    title: "MMA Group Training",
    date: new Date("2025-04-10T18:30:00"),
    location: "Tiger MMA Academy, Mumbai",
    image: "https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?q=80&w=1920",
    type: "session" as const,
    participants: 12,
    maxParticipants: 20,
  },
  {
    id: "2",
    title: "BJJ Private Lesson",
    date: new Date("2025-04-12T10:00:00"),
    location: "Warriors Fight Club, Bangalore",
    image: "https://images.unsplash.com/photo-1613324158-1c6f6878e2f3?q=80&w=1920",
    type: "session" as const,
    participants: 1,
    maxParticipants: 1,
  },
];

// Mock data for upcoming competitions
const upcomingCompetitions = [
  {
    id: "1",
    title: "Delhi Fight Championship 2025",
    date: new Date("2025-05-10T18:00:00"),
    location: "Sports Complex, Delhi",
    image: "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?q=80&w=1920",
    type: "competition" as const,
    participants: 48,
    xpPoints: 250,
  },
  {
    id: "2",
    title: "Mumbai MMA Open 2025",
    date: new Date("2025-06-15T14:00:00"),
    location: "National Sports Club, Mumbai",
    image: "https://images.unsplash.com/photo-1589456506629-b2ea1a8576fb?q=80&w=1920",
    type: "competition" as const,
    participants: 36,
    xpPoints: 200,
  },
];

const UpcomingActivitiesSection = () => {
  return (
    <section className="py-12 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">Your Upcoming Activities</h2>
            <p className="text-muted-foreground">Sessions and competitions you've registered for</p>
          </div>
          <Tabs defaultValue="sessions" className="hidden sm:block">
            <TabsList>
              <TabsTrigger value="sessions">Sessions</TabsTrigger>
              <TabsTrigger value="competitions">Competitions</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upcoming Sessions */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Training Sessions</h3>
            </div>
            
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="bg-card rounded-lg border shadow-sm overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/3 h-32 sm:h-auto">
                      <img 
                        src={session.image} 
                        alt={session.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 sm:w-2/3">
                      <h4 className="font-semibold mb-1">{session.title}</h4>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>
                          {session.date.toLocaleDateString("en-US", { 
                            weekday: "short",
                            month: "short", 
                            day: "numeric" 
                          })}
                        </span>
                        <Clock className="h-4 w-4 ml-3 mr-1" />
                        <span>
                          {session.date.toLocaleTimeString("en-US", { 
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true
                          })}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-3">
                        {session.location}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs bg-primary/10 text-primary rounded-full px-2 py-1">
                          {session.maxParticipants > 1 
                            ? `${session.participants}/${session.maxParticipants} participants` 
                            : "Private Session"}
                        </div>
                        <Link to="/sessions">
                          <Button size="sm">View Details</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <Link to="/sessions" className="block">
                <Button variant="outline" className="w-full">
                  View All Sessions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Upcoming Competitions */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="h-5 w-5 text-amber-500" />
              <h3 className="text-lg font-semibold">Competitions</h3>
            </div>
            
            <div className="space-y-4">
              {upcomingCompetitions.map((competition) => (
                <div key={competition.id} className="bg-card rounded-lg border shadow-sm overflow-hidden">
                  <div className="relative">
                    <img 
                      src={competition.image} 
                      alt={competition.title} 
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0">
                      <CompetitionCountdown targetDate={competition.date} />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1">{competition.title}</h4>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>
                        {competition.date.toLocaleDateString("en-US", { 
                          month: "short", 
                          day: "numeric",
                          year: "numeric"
                        })}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">
                      {competition.location}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-xs text-amber-500 font-medium">
                        <Trophy className="h-3.5 w-3.5 mr-1" />
                        {competition.xpPoints} XP Points
                      </div>
                      <Link to="/competitions">
                        <Button size="sm">View Details</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              
              <Link to="/competitions" className="block">
                <Button variant="outline" className="w-full">
                  View All Competitions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingActivitiesSection;
