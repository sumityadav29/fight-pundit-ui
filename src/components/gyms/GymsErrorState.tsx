
import React from "react";
import { Button } from "@/components/ui/button";

interface GymsErrorStateProps {
  error: string;
}

const GymsErrorState = ({ error }: GymsErrorStateProps) => {
  return (
    <div className="text-center py-12 text-red-500">
      <p>{error}</p>
      <Button onClick={() => window.location.reload()} className="mt-4">
        Retry
      </Button>
    </div>
  );
};

export default GymsErrorState;
