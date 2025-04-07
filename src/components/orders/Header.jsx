import React from 'react';
import { ChevronRight } from 'lucide-react';

const Header = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
        <span>Dashboard</span>
        <ChevronRight size={16} />
        <span>Orders</span>
      </div>
      <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
    </div>
  );
};

export default Header;