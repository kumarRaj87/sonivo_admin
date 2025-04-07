import React, { useState, useEffect } from 'react';
import { LogIn, Pencil, Trash2, ChevronDown, ChevronUp, Search } from 'lucide-react';
import UserSkeleton from './UserSkeleton';
import EditModal from './EditModal';

const UserTable = () => {
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileView, setIsMobileView] = useState(false);
  const [expandedRows, setExpandedRows] = useState([]);

  const users = [
    {
      id: 1,
      name: "Rana",
      mobile: "09161603736",
      email: "xaxehay961@eligou.com",
      planExpire: "NA",
    },
    {
      id: 2,
      name: "Sagar",
      mobile: "9449675050",
      email: "sagar.ronde@gmail.com",
      planExpire: "NA",
    },
    {
      id: 3,
      name: "Amit",
      mobile: "9876543210",
      email: "amit.kumar@example.com",
      planExpire: "2025-05-10",
    },
    {
      id: 4,
      name: "Priya",
      mobile: "9123456789",
      email: "priya.sharma@example.com",
      planExpire: "NA",
    },
    {
      id: 5,
      name: "Vikram",
      mobile: "9001122334",
      email: "vikram.rai@example.com",
      planExpire: "2024-12-15",
    },
    {
      id: 6,
      name: "Neha",
      mobile: "9988776655",
      email: "neha.verma@example.com",
      planExpire: "NA",
    },
    {
      id: 7,
      name: "Rahul",
      mobile: "9090909090",
      email: "rahul.singh@example.com",
      planExpire: "2025-01-20",
    },
    {
      id: 8,
      name: "Simran",
      mobile: "9191919191",
      email: "simran.kaur@example.com",
      planExpire: "NA",
    },
    {
      id: 9,
      name: "Arjun",
      mobile: "9303030303",
      email: "arjun.mehta@example.com",
      planExpire: "2025-03-30",
    },
    {
      id: 10,
      name: "Sneha",
      mobile: "9404040404",
      email: "sneha.das@example.com",
      planExpire: "NA",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleUpdate = (updatedData) => {
    console.log('Updated user data:', updatedData);
    setEditingUser(null);
  };

  const toggleRowExpand = (id) => {
    setExpandedRows(prev =>
      prev.includes(id)
        ? prev.filter(rowId => rowId !== id)
        : [...prev, id]
    );
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.mobile.includes(searchTerm)
  );

  if (loading) {
    return <UserSkeleton />;
  }

  return (
    <div className="bg-white p-4 w-full rounded-xl overflow-hidden">
      {isMobileView ? (
        // Mobile View
        <div className="divide-y divide-gray-200">
          {filteredUsers.map((user) => (
            <div key={user.id} className="p-4 hover:bg-primary-200">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-primary">{user.name}</h3>
                  <p className="text-sm text-primary-200">{user.email}</p>
                </div>
                <button
                  onClick={() => toggleRowExpand(user.id)}
                  className="text-primary-400 hover:text-gray-700"
                >
                  {expandedRows.includes(user.id) ? <ChevronUp /> : <ChevronDown />}
                </button>
              </div>

              {expandedRows.includes(user.id) && (
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-primary-200">Mobile:</span>
                    <span className="text-sm text-primary">{user.mobile}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-primary-400">Plan Expire:</span>
                    <span className="text-sm text-primary">{user.planExpire}</span>
                  </div>
                  <div className="flex justify-end space-x-3 pt-2">
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-blue-600 hover:text-blue-800 p-1"
                      title="Edit"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800 p-1"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                    <button
                      className="text-green-600 hover:text-green-800 p-1"
                      title="Auto Login"
                    >
                      <LogIn size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        // Desktop View
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-primary-200">
              <tr>
                <th className="px-4 py-4 text-left text-sm font-medium text-primary-400  tracking-wider">Auto login</th>
                <th className="px-4 py-4 text-left text-sm font-medium text-primary-400 tracking-wider">Name</th>
                <th className="px-4 py-4 text-left text-sm font-medium text-primary-400 tracking-wider">Mobile</th>
                <th className="px-4 py-4 text-left text-sm font-medium text-primary-400  tracking-wider">Email</th>
                <th className="px-4 py-4 text-left text-sm font-medium text-primary-400  tracking-wider">Plan expire</th>
                <th className="px-4 py-4 text-left text-sm font-medium text-primary-400  tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-primary-200">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      title="Auto Login"
                    >
                      <LogIn size={20} />
                    </button>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-primary">{user.name}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-primary-400">{user.mobile}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-primary-400">{user.email}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-primary-400">{user.planExpire}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-primary-400 space-x-2">
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-gray-600 hover:text-primary p-1"
                      title="Edit"
                    >
                      <Pencil size={20} />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700 p-1"
                      title="Delete"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editingUser && (
        <EditModal
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onUpdate={handleUpdate}
        />
      )}

      {filteredUsers.length === 0 && (
        <div className="p-8 text-center text-primary-400">
          No users found matching your search criteria.
        </div>
      )}
    </div>
  );
};

export default UserTable;