import React from "react";

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="w-full h-60 bg-gray-300 animate-pulse rounded-md" />
      <div className="w-3/4 h-6 bg-gray-300 animate-pulse rounded-md" />
      <div className="w-1/2 h-6 bg-gray-300 animate-pulse rounded-md" />
    </div>
  );
};

export default LoadingSkeleton;
