
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Search, Trophy, Calendar, Clock, MapPin, Users, Medal, ArrowRight, Filter } from "lucide-react";
import CompetitionCountdown from "@/components/CompetitionCountdown";

const Competitions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("upcoming");
  
  // Mock data for competitions
  const upcomingCompetitions = [
    {
      id: "1",
      title: "Delhi Fight Championship 2025",
      date: new Date("2025-05-10T18:00:00"),
      location: "Sports Complex, Delhi",
      image: "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?q=80&w=1920",
      participants: 48,
      registrationOpen: true,
      xpPoints: 250,
      weightClasses: ["Flyweight", "Bantamweight", "Featherweight", "Lightweight", "Welterweight"],
      organizer: "Delhi MMA Association"
    },
    {
      id: "2",
      title: "Mumbai MMA Open 2025",
      date: new Date("2025-06-15T14:00:00"),
      location: "National Sports Club, Mumbai",
      image: "https://images.unsplash.com/photo-1589456506629-b2ea1a8576fb?q=80&w=1920",
      participants: 72,
      registrationOpen: true,
      xpPoints: 350,
      weightClasses: ["Bantamweight", "Featherweight", "Lightweight", "Welterweight", "Middleweight"],
      organizer: "MMA India Federation"
    },
    {
      id: "3",
      title: "Bangalore Grappling Championship",
      date: new Date("2025-04-28T10:00:00"),
      location: "Koramangala Indoor Stadium, Bangalore",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1920",
      participants: 36,
      registrationOpen: true,
      xpPoints: 200,
      weightClasses: ["Lightweight", "Welterweight", "Middleweight", "Light Heavyweight", "Heavyweight"],
      organizer: "Bangalore BJJ Association"
    },
    {
      id: "4",
      title: "All India Kickboxing Tournament",
      date: new Date("2025-07-05T16:30:00"),
      location: "Indira Gandhi Arena, New Delhi",
      image: "https://images.unsplash.com/photo-1614102073832-030967418971?q=80&w=1920",
      participants: 95,
      registrationOpen: false,
      xpPoints: 400,
      weightClasses: ["Strawweight", "Flyweight", "Bantamweight", "Featherweight", "Lightweight"],
      organizer: "Indian Kickboxing Federation"
    },
  ];
  
  const pastCompetitions = [
    {
      id: "5",
      title: "Chennai Open MMA 2024",
      date: new Date("2024-12-10T14:00:00"),
      location: "Jawaharlal Nehru Stadium, Chennai",
      image: "https://images.unsplash.com/photo-1516283182395-4b90237bff2e?q=80&w=1920",
      participants: 42,
      xpPoints: 250,
      weightClasses: ["Flyweight", "Bantamweight", "Featherweight", "Lightweight"],
      organizer: "Tamil Nadu Combat Sports Association",
      results: [
        { category: "Flyweight", winner: "Rahul Sharma", runnerUp: "Arjun Kumar" },
        { category: "Bantamweight", winner: "Vikram Singh", runnerUp: "Ajay Yadav" },
        { category: "Featherweight", winner: "Aditya Patel", runnerUp: "Rohit Verma" },
        { category: "Lightweight", winner: "Kunal Desai", runnerUp: "Suresh Menon" }
      ]
    },
    {
      id: "6",
      title: "Hyderabad MMA Classic 2024",
      date: new Date("2024-11-18T18:30:00"),
      location: "GMC Balayogi Stadium, Hyderabad",
      image: "https://images.unsplash.com/photo-1549719386-5b5a6a83d958?q=80&w=1920",
      participants: 56,
      xpPoints: 300,
      weightClasses: ["Bantamweight", "Featherweight", "Lightweight", "Welterweight", "Middleweight"],
      organizer: "Telangana MMA Association",
      results: [
        { category: "Bantamweight", winner: "Vishal Reddy", runnerUp: "Aarav Chowdhury" },
        { category: "Featherweight", winner: "Dhruv Kapoor", runnerUp: "Farhan Khan" },
        { category: "Lightweight", winner: "Nikhil Roy", runnerUp: "Vijay Malhotra" },
        { category: "Welterweight", winner: "Raj Singh", runnerUp: "Ankit Saxena" },
        { category: "Middleweight", winner: "Sanjay Rathod", runnerUp: "Omar Siddiqui" }
      ]
    },
  ];

  // Filter competitions based on search query
  const filteredUpcoming = upcomingCompetitions.filter(comp => 
    comp.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    comp.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.organizer.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredPast = pastCompetitions.filter(comp => 
    comp.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    comp.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.organizer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <div className="bg-primary/10 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">MMA Competitions</h1>
            <p className="text-muted-foreground mb-6">
              Find and register for upcoming competitions or view past results
            </p>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search competitions by title, location, or organizer..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              <Button variant="outline" size="sm" className="rounded-full">
                <Filter className="mr-1 h-4 w-4" />
                Filters
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">Near Me</Button>
              <Button variant="outline" size="sm" className="rounded-full">MMA</Button>
              <Button variant="outline" size="sm" className="rounded-full">BJJ</Button>
              <Button variant="outline" size="sm" className="rounded-full">Kickboxing</Button>
              <Button variant="outline" size="sm" className="rounded-full">Wrestling</Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="upcoming" className="flex-1">Upcoming</TabsTrigger>
              <TabsTrigger value="past" className="flex-1">Past Results</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUpcoming.length > 0 ? (
                  filteredUpcoming.map((competition) => (
                    <Card key={competition.id} className="overflow-hidden hover-scale card-shadow">
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          src={competition.image} 
                          alt={competition.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <CompetitionCountdown targetDate={competition.date} />
                        </div>
                      </div>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-lg">{competition.title}</CardTitle>
                        <CardDescription className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{competition.location}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="flex items-center gap-2 mb-3 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {competition.date.toLocaleDateString("en-US", { 
                              day: "numeric",
                              month: "short",
                              year: "numeric"
                            })}
                          </span>
                          <Clock className="h-4 w-4 text-muted-foreground ml-2" />
                          <span>
                            {competition.date.toLocaleTimeString("en-US", { 
                              hour: "numeric",
                              minute: "2-digit",
                              hour12: true
                            })}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3 text-sm">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{competition.participants} participants</span>
                          <Trophy className="h-4 w-4 text-amber-500 ml-2" />
                          <span className="text-amber-500 font-medium">{competition.xpPoints} XP</span>
                        </div>

                        <div className="flex flex-wrap gap-1 mt-3">
                          {competition.weightClasses.slice(0, 3).map((weightClass) => (
                            <div key={weightClass} className="text-xs py-1 px-2 bg-secondary rounded-full">
                              {weightClass}
                            </div>
                          ))}
                          {competition.weightClasses.length > 3 && (
                            <div className="text-xs py-1 px-2 bg-secondary rounded-full">
                              +{competition.weightClasses.length - 3} more
                            </div>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex gap-2">
                        <Button className="flex-1" variant={competition.registrationOpen ? "default" : "outline"}>
                          {competition.registrationOpen ? "Register Now" : "View Details"}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No competitions found</h3>
                    <p className="text-muted-foreground">
                      Try changing your search query or filters
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="past">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPast.length > 0 ? (
                  filteredPast.map((competition) => (
                    <Card key={competition.id} className="overflow-hidden hover-scale card-shadow">
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          src={competition.image} 
                          alt={competition.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-accent text-accent-foreground font-semibold text-sm py-1 px-3 rounded-full">
                          Completed
                        </div>
                      </div>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-lg">{competition.title}</CardTitle>
                        <CardDescription className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{competition.location}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="flex items-center gap-2 mb-3 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {competition.date.toLocaleDateString("en-US", { 
                              day: "numeric",
                              month: "short",
                              year: "numeric"
                            })}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3 text-sm">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{competition.participants} participants</span>
                          <Trophy className="h-4 w-4 text-amber-500 ml-2" />
                          <span className="text-amber-500 font-medium">{competition.xpPoints} XP</span>
                        </div>

                        <Separator className="my-3" />
                        
                        <div className="text-sm font-medium mb-2">Top Results:</div>
                        {competition.results.slice(0, 2).map((result) => (
                          <div key={result.category} className="mb-2">
                            <div className="text-sm font-medium">{result.category}</div>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Medal className="h-3 w-3 text-amber-500" />
                              <span className="font-medium">{result.winner}</span>
                              <span className="mx-1">|</span>
                              <span>Runner-up: {result.runnerUp}</span>
                            </div>
                          </div>
                        ))}
                        {competition.results.length > 2 && (
                          <div className="text-xs text-muted-foreground mt-1">
                            +{competition.results.length - 2} more weight classes
                          </div>
                        )}
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button variant="outline" className="w-full">
                          View Full Results
                        </Button>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No past competitions found</h3>
                    <p className="text-muted-foreground">
                      Try changing your search query or filters
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Competitions;
