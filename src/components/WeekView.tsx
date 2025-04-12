
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";

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

interface WeekViewProps {
  selectedDate: Date;
  sessions: Session[];
}

const WeekView = ({ selectedDate, sessions }: WeekViewProps) => {
  // Get the starting day of the week (Sunday)
  const startOfWeek = new Date(selectedDate);
  const day = selectedDate.getDay();
  startOfWeek.setDate(selectedDate.getDate() - day);
  
  // Generate dates for the week
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    return date;
  });
  
  // Get sessions for the week
  const getSessionsForDate = (date: Date) => {
    return sessions.filter(session => {
      const sessionDate = new Date(session.date);
      return (
        sessionDate.getDate() === date.getDate() &&
        sessionDate.getMonth() === date.getMonth() &&
        sessionDate.getFullYear() === date.getFullYear()
      );
    });
  };
  
  // Check if a date is today
  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };
  
  // Format time from Date
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true
    });
  };
  
  // Get session type badge color
  const getSessionTypeColor = (type: Session['type']) => {
    switch (type) {
      case 'private':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
      case 'group':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'open':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Week header */}
      <div className="grid grid-cols-7 border-b text-center py-2 bg-secondary/30">
        {weekDates.map((date, index) => (
          <div key={index} className="px-1">
            <div className="text-xs text-muted-foreground">
              {date.toLocaleDateString('en-US', { weekday: 'short' })}
            </div>
            <div className={cn(
              "text-xl font-semibold mx-auto flex items-center justify-center w-10 h-10 rounded-full",
              isToday(date) ? "bg-primary text-primary-foreground" : ""
            )}>
              {date.getDate()}
            </div>
          </div>
        ))}
      </div>
      
      {/* Week grid */}
      <ScrollArea className="flex-1">
        <div className="grid grid-cols-7 min-h-[600px]">
          {weekDates.map((date, dateIndex) => {
            const dateKey = date.toISOString().split('T')[0];
            const daySessionsData = getSessionsForDate(date);
            
            return (
              <div 
                key={dateKey} 
                className={cn(
                  "border-r last:border-r-0 border-b p-1 min-h-[120px]",
                  isToday(date) ? "bg-primary/5" : "",
                  dateIndex === 0 || dateIndex === 6 ? "bg-secondary/20" : ""
                )}
              >
                {daySessionsData.length > 0 ? (
                  <div className="space-y-2">
                    {daySessionsData.map(session => (
                      <div 
                        key={session.id}
                        className="rounded p-2 bg-card border shadow-sm hover:shadow-md transition-shadow cursor-pointer text-xs"
                      >
                        <div className="font-medium truncate">{session.title}</div>
                        <div className="flex items-center text-muted-foreground mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{formatTime(session.date)} - {formatTime(session.endTime)}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground mt-1 truncate">
                          <MapPin className="h-3 w-3 mr-1 shrink-0" />
                          <span className="truncate">{session.location.split(',')[0]}</span>
                        </div>
                        {session.coach && (
                          <div className="flex items-center text-muted-foreground mt-1">
                            <User className="h-3 w-3 mr-1" />
                            <span>{session.coach}</span>
                          </div>
                        )}
                        <Badge className={cn("mt-2", getSessionTypeColor(session.type))}>
                          {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                        </Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full h-full justify-center items-center text-muted-foreground border-dashed border-2 border-muted/60 opacity-70 hover:opacity-100"
                  >
                    <span className="sr-only">Add session</span>
                    +
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default WeekView;
