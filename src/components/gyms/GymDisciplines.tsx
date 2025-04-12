
import React from "react";
import { Badge } from "@/components/ui/badge";

interface GymDisciplinesProps {
  disciplines: string[];
  limit?: number;
}

const GymDisciplines = ({ disciplines, limit = 3 }: GymDisciplinesProps) => {
  return (
    <div className="flex flex-wrap gap-1 mt-2">
      {disciplines.slice(0, limit).map((discipline) => (
        <Badge key={discipline} variant="secondary" className="font-normal">
          {discipline}
        </Badge>
      ))}
      {disciplines.length > limit && (
        <Badge variant="outline" className="font-normal text-xs">
          +{disciplines.length - limit} more
        </Badge>
      )}
    </div>
  );
};

export default GymDisciplines;
