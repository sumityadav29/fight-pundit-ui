
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CompetitionCountdownProps {
  targetDate: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CompetitionCountdown = ({ targetDate, className }: CompetitionCountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };
    
    // Calculate initially
    setTimeLeft(calculateTimeLeft());
    
    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    // Cleanup on unmount
    return () => clearInterval(timer);
  }, [targetDate]);
  
  return (
    <div className={cn("bg-black/70 backdrop-blur-sm rounded-md p-2 text-white", className)}>
      <div className="text-xs uppercase mb-1 opacity-80">Competition starts in:</div>
      <div className="flex justify-between">
        <div className="text-center px-1">
          <div className="text-lg font-bold">{timeLeft.days}</div>
          <div className="text-xs uppercase opacity-80">days</div>
        </div>
        <div className="text-center px-1">
          <div className="text-lg font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className="text-xs uppercase opacity-80">hrs</div>
        </div>
        <div className="text-center px-1">
          <div className="text-lg font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <div className="text-xs uppercase opacity-80">min</div>
        </div>
        <div className="text-center px-1">
          <div className="text-lg font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <div className="text-xs uppercase opacity-80">sec</div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionCountdown;
