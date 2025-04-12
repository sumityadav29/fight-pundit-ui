
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Clock, 
  User, 
  Edit, 
  ClipboardList, 
  Plus, 
  Check, 
  Dumbbell, 
  Flame 
} from "lucide-react";
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

interface DayViewProps {
  selectedDate: Date;
  sessions: Session[];
}

const DayView = ({ selectedDate, sessions }: DayViewProps) => {
  const [showNotes, setShowNotes] = useState(false);
  const [showTrainingPlan, setShowTrainingPlan] = useState(false);
  const [notes, setNotes] = useState("");
  
  // Get sessions for the selected date
  const daySessionsData = sessions.filter(session => {
    const sessionDate = new Date(session.date);
    return (
      sessionDate.getDate() === selectedDate.getDate() &&
      sessionDate.getMonth() === selectedDate.getMonth() &&
      sessionDate.getFullYear() === selectedDate.getFullYear()
    );
  });
  
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

  // Mock workout data
  const workoutData = {
    sections: [
      {
        title: "Warm-up",
        duration: "15 mins",
        exercises: [
          { name: "Dynamic Stretching", duration: "5 mins" },
          { name: "Shadow Boxing", duration: "5 mins" },
          { name: "Light Jump Rope", duration: "5 mins" }
        ]
      },
      {
        title: "Technical Work",
        duration: "30 mins",
        exercises: [
          { name: "Jab-Cross Combinations", duration: "10 mins" },
          { name: "Sprawl Practice", duration: "10 mins" },
          { name: "Guard Passing Drills", duration: "10 mins" }
        ]
      },
      {
        title: "Conditioning",
        duration: "15 mins",
        exercises: [
          { name: "Circuit Training", reps: "3 rounds", details: "Burpees, Push-ups, Sprawls" },
          { name: "Core Work", reps: "3 sets", details: "Planks, Russian Twists" }
        ]
      }
    ],
    notes: "Focus on technique over speed. Remember to keep your guard up during combinations."
  };

  return (
    <div className="h-full flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 h-full">
        {/* Sessions column */}
        <div className="border-r">
          <div className="p-4 border-b bg-secondary/20">
            <h3 className="font-semibold">Training Sessions</h3>
            <p className="text-xs text-muted-foreground">
              {selectedDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          <ScrollArea className="h-[calc(100%-61px)]">
            <div className="p-4 space-y-4">
              {daySessionsData.length > 0 ? (
                daySessionsData.map(session => (
                  <Card key={session.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="font-semibold mb-2">{session.title}</div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{formatTime(session.date)} - {formatTime(session.endTime)}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{session.location}</span>
                        </div>
                        {session.coach && (
                          <div className="flex items-center text-muted-foreground">
                            <User className="h-4 w-4 mr-2" />
                            <span>Coach: {session.coach}</span>
                          </div>
                        )}
                        {session.notes && (
                          <div className="text-muted-foreground pt-2">
                            <div className="font-medium mb-1">Notes:</div>
                            <div className="text-sm">{session.notes}</div>
                          </div>
                        )}
                        <Badge className={cn("mt-1", getSessionTypeColor(session.type))}>
                          {session.type.charAt(0).toUpperCase() + session.type.slice(1)} Session
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8">
                  <div className="bg-muted inline-flex rounded-full p-3 mb-4">
                    <Dumbbell className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="font-medium mb-2">No Sessions Today</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    You don't have any training sessions scheduled for today.
                  </p>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Session
                  </Button>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
        
        {/* Training plan column */}
        <div className="border-r">
          <div className="p-4 border-b bg-secondary/20 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Training Plan</h3>
              <p className="text-xs text-muted-foreground">Track your workout details</p>
            </div>
            <Button variant="outline" size="sm" onClick={() => setShowTrainingPlan(!showTrainingPlan)}>
              <Edit className="h-4 w-4 mr-2" />
              {showTrainingPlan ? "View" : "Edit"}
            </Button>
          </div>
          <ScrollArea className="h-[calc(100%-61px)]">
            <div className="p-4">
              {showTrainingPlan ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Workout Title</label>
                    <input 
                      type="text" 
                      className="w-full p-2 rounded-md border" 
                      defaultValue="MMA Complete Workout"
                    />
                  </div>
                  
                  {workoutData.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="border rounded-md p-3">
                      <div className="flex justify-between items-center mb-2">
                        <input 
                          type="text" 
                          className="font-medium bg-transparent border-0 border-b border-dashed focus-visible:outline-none w-[150px]" 
                          defaultValue={section.title}
                        />
                        <div className="text-sm text-muted-foreground">
                          <input 
                            type="text" 
                            className="w-16 bg-transparent border-0 border-b border-dashed focus-visible:outline-none text-center" 
                            defaultValue={section.duration}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        {section.exercises.map((exercise, exerciseIndex) => (
                          <div key={exerciseIndex} className="flex items-center ml-2 text-sm">
                            <input 
                              type="checkbox" 
                              className="mr-2" 
                              id={`exercise-${sectionIndex}-${exerciseIndex}`} 
                            />
                            <input 
                              type="text" 
                              className="flex-1 bg-transparent border-0 border-b border-dashed focus-visible:outline-none" 
                              defaultValue={exercise.name}
                            />
                            <div className="text-muted-foreground">
                              <input 
                                type="text" 
                                className="w-16 bg-transparent border-0 border-b border-dashed focus-visible:outline-none text-center" 
                                defaultValue={exercise.duration || exercise.reps}
                              />
                            </div>
                          </div>
                        ))}
                        <Button variant="ghost" size="sm" className="w-full mt-1 text-xs">
                          <Plus className="h-3 w-3 mr-1" />
                          Add Exercise
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" size="sm" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Section
                  </Button>
                  
                  <div className="pt-2">
                    <label className="text-sm font-medium mb-1 block">Additional Notes</label>
                    <Textarea 
                      defaultValue={workoutData.notes}
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setShowTrainingPlan(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setShowTrainingPlan(false)}>
                      <Check className="h-4 w-4 mr-2" />
                      Save Plan
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-start gap-3 mb-6">
                    <div className="bg-primary/10 text-primary rounded-full p-2">
                      <ClipboardList className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">MMA Complete Workout</h3>
                      <p className="text-sm text-muted-foreground">60 mins total • 3 sections</p>
                    </div>
                  </div>
                  
                  {workoutData.sections.map((section, index) => (
                    <div key={index} className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{section.title}</h4>
                        <span className="text-sm text-muted-foreground">{section.duration}</span>
                      </div>
                      <div className="space-y-2">
                        {section.exercises.map((exercise, eIndex) => (
                          <div key={eIndex} className="flex items-start ml-2">
                            <div className="mt-0.5 mr-2">
                              <div className="h-4 w-4 rounded border-2 border-muted flex items-center justify-center">
                                <Check className="h-3 w-3 text-muted-foreground" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="text-sm">{exercise.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {exercise.duration || exercise.reps}
                                {exercise.details && ` • ${exercise.details}`}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <div className="bg-muted/30 rounded-md p-3 text-sm italic text-muted-foreground">
                    {workoutData.notes}
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
        
        {/* Notes column */}
        <div>
          <div className="p-4 border-b bg-secondary/20 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Session Notes</h3>
              <p className="text-xs text-muted-foreground">Track your progress and thoughts</p>
            </div>
            <Button variant="outline" size="sm" onClick={() => setShowNotes(!showNotes)}>
              <Edit className="h-4 w-4 mr-2" />
              {showNotes ? "Save" : "Edit"}
            </Button>
          </div>
          <div className="p-4">
            {showNotes ? (
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add your notes about today's training sessions..."
                className="min-h-[400px]"
              />
            ) : notes ? (
              <div className="prose prose-sm max-w-none">
                {notes.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="bg-muted inline-flex rounded-full p-3 mb-4">
                  <ClipboardList className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="font-medium mb-2">No Notes Yet</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Click the edit button to add notes about your training sessions.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">Some ideas of what to track:</p>
                  <ul className="list-disc text-left pl-10 space-y-1">
                    <li>Techniques you learned</li>
                    <li>Areas for improvement</li>
                    <li>Sparring partners and insights</li>
                    <li>How you felt physically and mentally</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayView;
