
import { cn } from "@/lib/utils";

export type BeltLevel = "white" | "blue" | "purple" | "brown" | "black";

interface BeltLevelBarProps {
  currentXp: number;
  nextLevelXp: number;
  beltLevel: BeltLevel;
  className?: string;
}

const getBeltColor = (belt: BeltLevel): string => {
  switch (belt) {
    case "white":
      return "bg-white";
    case "blue":
      return "bg-blue-500";
    case "purple":
      return "bg-purple-600";
    case "brown":
      return "bg-amber-800";
    case "black":
      return "bg-gray-900";
    default:
      return "bg-primary";
  }
};

const getBeltLevelName = (belt: BeltLevel): string => {
  return belt.charAt(0).toUpperCase() + belt.slice(1) + " Belt";
};

const BeltLevelBar = ({ currentXp, nextLevelXp, beltLevel, className }: BeltLevelBarProps) => {
  const progress = (currentXp / nextLevelXp) * 100;
  const beltColor = getBeltColor(beltLevel);
  
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="w-full text-sm font-medium flex justify-between mb-1">
        <span>{getBeltLevelName(beltLevel)}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="relative h-48 w-6 bg-secondary rounded-full overflow-hidden">
        <div 
          className={`absolute bottom-0 left-0 right-0 ${beltColor} transition-all duration-500 ease-out rounded-b-full`} 
          style={{ height: `${progress}%` }}
        />
        <div className="absolute inset-0 flex flex-col justify-end">
          {[20, 40, 60, 80].map((mark) => (
            <div 
              key={mark} 
              className="w-full h-px bg-white/20"
              style={{ marginBottom: `${mark}%` }}
            />
          ))}
        </div>
      </div>
      <div className="w-full text-xs text-muted-foreground mt-2 text-center">
        {currentXp} / {nextLevelXp} XP
      </div>
    </div>
  );
};

export default BeltLevelBar;
