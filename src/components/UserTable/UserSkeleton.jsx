import React from 'react';

const UserSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-6 md:grid-cols-7 gap-4 p-4 border-b border-gray-100 bg-gray-50">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded"></div>
        ))}
      </div>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="grid grid-cols-6 md:grid-cols-7 gap-4 p-4 border-b border-gray-100">
          {[...Array(7)].map((_, j) => (
            <div key={j} className="h-4 bg-gray-100 rounded"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default UserSkeleton;