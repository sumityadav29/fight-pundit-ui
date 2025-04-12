
import React from "react";

const GymsLoadingState = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="border rounded-lg p-4 h-80 animate-pulse">
          <div className="bg-gray-200 h-48 rounded-md mb-4"></div>
          <div className="bg-gray-200 h-4 rounded-md w-3/4 mb-2"></div>
          <div className="bg-gray-200 h-4 rounded-md w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export default GymsLoadingState;
