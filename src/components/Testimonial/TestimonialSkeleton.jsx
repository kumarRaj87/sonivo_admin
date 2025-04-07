import React from 'react';

const TestimonialSkeleton = () => {
  return (
    <div className="animate-pulse bg-white p-6 rounded-lg shadow-md">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-20 bg-gray-200 rounded w-full mb-4"></div>
      <div className="flex items-center">
        <div className="h-12 w-12 bg-gray-200 rounded-full mr-4"></div>
        <div>
          <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSkeleton;