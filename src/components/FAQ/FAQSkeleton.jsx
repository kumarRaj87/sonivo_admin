import React from 'react';

const FAQSkeleton = () => {
  return (
    <div className="animate-pulse space-y-6">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="border-b border-gray-200 pb-6">
          <div className="flex items-center justify-between">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
          </div>
          <div className="mt-4 h-16 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default FAQSkeleton;