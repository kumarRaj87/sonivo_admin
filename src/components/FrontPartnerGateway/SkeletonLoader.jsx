import React from "react";
const SkeletonCard = () => {
  return <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 relative flex flex-col items-center justify-center h-40">
      <div className="w-20 h-20 mb-2 bg-gray-200 rounded-full animate-pulse"></div>
      <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mt-2"></div>
    </div>;
};
const SkeletonLoader = () => {
  return <div>
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 mr-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
      </div>
      <div className="flex justify-end my-6">
        <div className="h-10 w-20 bg-gray-200 rounded animate-pulse"></div>
      </div>
      <div className="h-px w-full bg-gray-200 my-4"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-4">
        {Array(8).fill().map((_, index) => <SkeletonCard key={index} />)}
      </div>
    </div>;
};
export default SkeletonLoader;