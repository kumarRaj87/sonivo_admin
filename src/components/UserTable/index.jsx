import React from 'react';
import UserTable from './UserTable';

const UsersPage = () => {
  return (
    <div className="min-h-screen bg-primary-200 w-full">
      <div className="w-full">
        <div className='space-y-2 mb-6'>
          <h1 className="text-2xl font-medium text-primary">Users</h1>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Dashboard</span>
            <span>•</span>
            <span>Users</span>
          </div>
        </div>
        <UserTable />
      </div>
    </div>
  );
};

export default UsersPage;