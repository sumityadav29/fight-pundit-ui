
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  List,
  LayoutGrid,
  Plus,
  Search,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import DayView from "@/components/DayView";
import WeekView from "@/components/WeekView";

interface Session {
  id: string;
  title: string;
  date: Date;
  endTime: Date;
  location: string;
  type: "private" | "group" | "open";
  notes?: string;
  coach?: string;
}

const Sessions = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [view, setView] = useState<"day" | "week">("week");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  
  // Sample data for sessions
  const sessions: Session[] = [
    {
      id: "1",
      title: "MMA Fundamentals",
      date: new Date(2025, 3, 8, 9, 0), // April 8, 2025, 9:00 AM
      endTime: new Date(2025, 3, 8, 10, 30), // April 8, 2025, 10:30 AM
      location: "Tiger MMA Academy, Mumbai",
      type: "group",
      notes: "Focus on takedown defense and ground transitions",
      coach: "Rajiv Mehta"
    },
    {
      id: "2",
      title: "Private BJJ Session",
      date: new Date(2025, 3, 8, 15, 0), // April 8, 2025, 3:00 PM
      endTime: new Date(2025, 3, 8, 16, 0), // April 8, 2025, 4:00 PM
      location: "Combat Kings Gym, Delhi",
      type: "private",
      notes: "Working on guard passing techniques",
      coach: "Amit Singh"
    },
    {
      id: "3",
      title: "Wrestling Fundamentals",
      date: new Date(2025, 3, 9, 10, 0), // April 9, 2025, 10:00 AM
      endTime: new Date(2025, 3, 9, 11, 30), // April 9, 2025, 11:30 AM
      location: "Warriors Fight Club, Bangalore",
      type: "group",
      notes: "Focus on clinch work and takedowns"
    },
    {
      id: "4",
      title: "Striking Workshop",
      date: new Date(2025, 3, 10, 18, 0), // April 10, 2025, 6:00 PM
      endTime: new Date(2025, 3, 10, 19, 30), // April 10, 2025, 7:30 PM
      location: "Elite Fight Systems, Hyderabad",
      type: "open",
      notes: "Boxing combinations and footwork drills"
    },
    {
      id: "5",
      title: "MMA Sparring",
      date: new Date(2025, 3, 11, 17, 0), // April 11, 2025, 5:00 PM
      endTime: new Date(2025, 3, 11, 18, 30), // April 11, 2025, 6:30 PM
      location: "Tiger MMA Academy, Mumbai",
      type: "group",
      notes: "Light technical sparring, focus on implementing techniques learned this week",
      coach: "Rajiv Mehta"
    },
    {
      id: "6", 
      title: "Strength & Conditioning",
      date: new Date(2025, 3, 12, 8, 0), // April 12, 2025, 8:00 AM
      endTime: new Date(2025, 3, 12, 9, 0), // April 12, 2025, 9:00 AM
      location: "Knockout Zone, Chennai",
      type: "open",
      notes: "Circuit training focused on explosive power"
    },
    {
      id: "7",
      title: "Muay Thai Basics",
      date: new Date(2025, 3, 13, 19, 0), // April 13, 2025, 7:00 PM
      endTime: new Date(2025, 3, 13, 20, 30), // April 13, 2025, 8:30 PM
      location: "Fight Ready Academy, Pune",
      type: "group",
      notes: "Clinch work and elbow techniques",
      coach: "Priya Kumar"
    }
  ];
  
  // Navigate to previous day/week
  const navigatePrevious = () => {
    const newDate = new Date(selectedDate);
    if (view === "day") {
      newDate.setDate(selectedDate.getDate() - 1);
    } else {
      newDate.setDate(selectedDate.getDate() - 7);
    }
    setSelectedDate(newDate);
  };
  
  // Navigate to next day/week
  const navigateNext = () => {
    const newDate = new Date(selectedDate);
    if (view === "day") {
      newDate.setDate(selectedDate.getDate() + 1);
    } else {
      newDate.setDate(selectedDate.getDate() + 7);
    }
    setSelectedDate(newDate);
  };
  
  // Format date for display
  const formatDateDisplay = () => {
    if (view === "day") {
      return format(selectedDate, "EEEE, MMMM d, yyyy");
    } else {
      const startOfWeek = new Date(selectedDate);
      const dayOfWeek = selectedDate.getDay();
      startOfWeek.setDate(selectedDate.getDate() - dayOfWeek);
      
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      
      if (startOfWeek.getMonth() === endOfWeek.getMonth()) {
        return `${format(startOfWeek, "MMMM d")} - ${format(
          endOfWeek,
          "d, yyyy"
        )}`;
      } else if (startOfWeek.getFullYear() === endOfWeek.getFullYear()) {
        return `${format(startOfWeek, "MMMM d")} - ${format(
          endOfWeek,
          "MMMM d, yyyy"
        )}`;
      } else {
        return `${format(startOfWeek, "MMMM d, yyyy")} - ${format(
          endOfWeek,
          "MMMM d, yyyy"
        )}`;
      }
    }
  };

  // Go to today
  const goToToday = () => {
    setSelectedDate(new Date());
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-primary/5 p-4 sm:p-6">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold">Training Sessions</h1>
                <p className="text-muted-foreground">
                  Manage your training schedule and track your progress
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Session
                </Button>
              </div>
            </div>
            
            {/* Toolbar */}
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={navigatePrevious}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="min-w-[240px] justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formatDateDisplay()}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        if (date) {
                          setSelectedDate(date);
                          setIsCalendarOpen(false);
                        }
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <Button variant="outline" size="sm" onClick={navigateNext}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={goToToday}>
                  Today
                </Button>
              </div>
              
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search sessions..."
                    className="pl-9 w-full sm:w-[200px]"
                  />
                </div>
                <Tabs defaultValue="week" value={view} onValueChange={(v) => setView(v as "day" | "week")} className="hidden sm:block">
                  <TabsList>
                    <TabsTrigger value="day">
                      <LayoutGrid className="h-4 w-4 mr-2" />
                      Day
                    </TabsTrigger>
                    <TabsTrigger value="week">
                      <List className="h-4 w-4 mr-2" />
                      Week
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
                <div className="sm:hidden flex-1 text-right">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setView(view === "day" ? "week" : "day")}
                  >
                    {view === "day" ? (
                      <>
                        <List className="h-4 w-4 mr-2" />
                        Week
                      </>
                    ) : (
                      <>
                        <LayoutGrid className="h-4 w-4 mr-2" />
                        Day
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Calendar content */}
        <div className="flex-1 container mx-auto p-4 pb-8">
          <div className="border rounded-lg overflow-hidden h-full min-h-[600px]">
            {view === "day" ? (
              <DayView selectedDate={selectedDate} sessions={sessions} />
            ) : (
              <WeekView selectedDate={selectedDate} sessions={sessions} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sessions;
