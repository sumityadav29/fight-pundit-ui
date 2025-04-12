
import Navbar from "@/components/Navbar";
import XpDashboard from "@/components/XpDashboard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Edit, MapPin, Settings, Shield, Trophy, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BeltLevel } from "@/components/BeltLevelBar";

const Profile = () => {
  // Mock user data
  const user = {
    id: "1",
    name: "Rahul Sharma",
    username: "rahul_mma",
    location: "Mumbai, Maharashtra",
    bio: "MMA enthusiast and competitor. Brown belt in BJJ. Training for 7+ years.",
    level: 12,
    currentXp: 850,
    nextLevelXp: 1000,
    beltLevel: "blue" as BeltLevel,
    joinedDate: "January 2023",
    profileImage: "",
  };
  
  // Mock achievements data
  const achievements = [
    {
      id: "1",
      name: "First Victory",
      description: "Win your first competition",
      icon: "trophy" as const,
      unlocked: true,
    },
    {
      id: "2",
      name: "Regular Trainee",
      description: "Attend 10 training sessions",
      icon: "award" as const,
      unlocked: true,
    },
    {
      id: "3",
      name: "Community Reviewer",
      description: "Review 5 different gyms",
      icon: "star" as const,
      unlocked: false,
    },
    {
      id: "4",
      name: "Rising Star",
      description: "Reach level 10",
      icon: "trophy" as const,
      unlocked: true,
    },
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-primary to-primary/70 text-white rounded-xl p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <Avatar className="w-24 h-24 border-4 border-white">
                <AvatarImage src={user.profileImage} alt={user.name} />
                <AvatarFallback className="text-2xl bg-primary-foreground text-primary">
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 md:ml-2 self-center">
                    Level {user.level}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-center md:justify-start gap-2 text-white/80 text-sm mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>{user.location}</span>
                </div>
                
                <p className="text-white/90 mb-4">{user.bio}</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Trophy className="h-4 w-4" />
                    <span>3 Competitions</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>25 Sessions</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>Joined {user.joinedDate}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4 md:mt-0">
                <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <Tabs defaultValue="dashboard" className="mb-8">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="history">Activity History</TabsTrigger>
              <TabsTrigger value="reviews">Gym Reviews</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <div className="mt-6">
              <TabsContent value="dashboard" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <XpDashboard 
                      currentXp={user.currentXp}
                      nextLevelXp={user.nextLevelXp}
                      level={user.level}
                      beltLevel={user.beltLevel}
                      achievements={achievements}
                    />
                    
                    {/* Featured Fight Image */}
                    <Card className="mt-6 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img 
                            src="/lovable-uploads/ffb7e966-808b-474c-b407-3afd1ed321f8.png" 
                            alt="MMA Fight" 
                            className="w-full object-cover h-auto"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <h3 className="text-white font-bold">Latest Competition</h3>
                            <p className="text-white/90 text-sm">Delhi Fight Championship - Quarterfinals</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-3 flex items-center">
                          <Shield className="h-4 w-4 mr-1 text-primary" />
                          Your Skill Levels
                        </h3>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Brazilian Jiu-Jitsu</span>
                              <span className="text-blue-500 font-medium">Blue Belt</span>
                            </div>
                            <div className="h-1.5 bg-secondary rounded-full">
                              <div className="h-full bg-blue-500 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Muay Thai</span>
                              <span className="text-primary font-medium">Intermediate</span>
                            </div>
                            <div className="h-1.5 bg-secondary rounded-full">
                              <div className="h-full bg-primary rounded-full" style={{ width: '60%' }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Wrestling</span>
                              <span className="text-primary font-medium">Beginner</span>
                            </div>
                            <div className="h-1.5 bg-secondary rounded-full">
                              <div className="h-full bg-primary rounded-full" style={{ width: '30%' }}></div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-3">Upcoming Events</h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex gap-3 p-2 rounded-md hover:bg-secondary">
                            <div className="w-10 h-10 rounded-md bg-accent/10 text-accent flex items-center justify-center shrink-0">
                              <Calendar className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-medium">Advanced MMA Techniques</p>
                              <p className="text-muted-foreground">Apr 25, 2:30PM • Mumbai</p>
                            </div>
                          </div>
                          <div className="flex gap-3 p-2 rounded-md hover:bg-secondary">
                            <div className="w-10 h-10 rounded-md bg-destructive/10 text-destructive flex items-center justify-center shrink-0">
                              <Trophy className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-medium">Delhi Fight Championship</p>
                              <p className="text-muted-foreground">May 10, 6:00PM • Delhi</p>
                            </div>
                          </div>
                        </div>
                        <Separator className="my-3" />
                        <Button variant="ghost" size="sm" className="w-full text-muted-foreground">
                          View All Events
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="history" className="mt-0">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Activity History</h3>
                    <p className="text-muted-foreground">View your past training sessions and competitions.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-0">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Your Gym Reviews</h3>
                    <p className="text-muted-foreground">Reviews you've left for gyms and training sessions.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings" className="mt-0">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
                    <p className="text-muted-foreground">Manage your profile settings and preferences.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Profile;
