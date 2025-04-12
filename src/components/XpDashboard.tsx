
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Award, Star, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import BeltLevelBar, { BeltLevel } from "@/components/BeltLevelBar";

interface XpDashboardProps {
  currentXp: number;
  nextLevelXp: number;
  level: number;
  beltLevel: BeltLevel;
  achievements: {
    id: string;
    name: string;
    description: string;
    icon: "trophy" | "award" | "star";
    unlocked: boolean;
  }[];
}

const XpDashboard = ({ currentXp, nextLevelXp, level, beltLevel, achievements }: XpDashboardProps) => {
  const progress = (currentXp / nextLevelXp) * 100;
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "trophy":
        return <Trophy className="h-5 w-5" />;
      case "award":
        return <Award className="h-5 w-5" />;
      case "star":
        return <Star className="h-5 w-5" />;
      default:
        return <Award className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex justify-between items-center">
            <span>Experience Points</span>
            <Badge className="bg-primary text-primary-foreground">Level {level}</Badge>
          </CardTitle>
          <CardDescription>Track your progress in the MMA community</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{currentXp} XP</span>
                    <span className="text-muted-foreground">{nextLevelXp} XP</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-sm text-muted-foreground mt-1">
                    {nextLevelXp - currentXp} XP until next level
                  </p>
                </div>
              </div>
              
              <div className="pt-2 border-t">
                <h4 className="font-medium mb-3">Recent XP Gains</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Victory at Mumbai Open</span>
                    <span className="font-medium text-primary">+100 XP</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>5 Training Sessions Completed</span>
                    <span className="font-medium text-primary">+50 XP</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>New Gym Review</span>
                    <span className="font-medium text-primary">+10 XP</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <BeltLevelBar 
                currentXp={currentXp} 
                nextLevelXp={nextLevelXp} 
                beltLevel={beltLevel}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Achievements</CardTitle>
          <CardDescription>Badges earned on your journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id} 
                className={`flex items-center gap-3 p-3 rounded-lg border ${
                  achievement.unlocked ? 'bg-secondary' : 'bg-muted/50 opacity-60'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  achievement.unlocked ? 'bg-primary/10 text-primary' : 'bg-muted-foreground/10 text-muted-foreground'
                }`}>
                  {getIcon(achievement.icon)}
                </div>
                <div>
                  <h4 className="font-medium text-sm">{achievement.name}</h4>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default XpDashboard;
