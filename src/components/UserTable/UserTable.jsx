import React, { useState, useEffect } from 'react';
import { LogIn, Pencil, Trash2, ChevronDown, ChevronUp} from 'lucide-react';
import axios from 'axios';
import EditModal from './EditModal';
import Loader from '../loader/Loader';

const UserTable = () => {
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileView, setIsMobileView] = useState(false);
  const [expandedRows, setExpandedRows] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          throw new Error('No authentication token found');
        }
        const response = await axios.get('https://vokal-api.oyelabs.com/admin/get_users', {
          headers: {
            'accept': 'application/json',
            'access-token': token
          }
        });
        
        if (response.data.success) {
          setUsers(response.data.data.map(user => ({
            id: user.id,
            name: user.name,
            mobile: user.mobile,
            email: user.email,
            planExpire: user.plan_expire || "NA",
            role: user.role,
            uid: user.uid
          })));
        } else {
          setError(response.data.message || 'Failed to fetch users');
        }
      } catch (err) {
        setError(err.message || 'An error occurred while fetching users');
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchUsers();
  }, []);

const disableBodyScroll = () => {
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = '15px';
};

const enableBodyScroll = () => {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
};

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleEdit = (user) => {
    disableBodyScroll();
    setEditingUser(user);
  };

  const handleCloseModal = () => {
    enableBodyScroll();
    setEditingUser(null);
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
    return (
      <Loader/>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-4 w-full rounded-xl overflow-hidden text-center text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 w-full rounded-xl overflow-hidden">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name, email or mobile"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {isMobileView ? (
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
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-primary-400">Role:</span>
                    <span className="text-sm text-primary">{user.role}</span>
                  </div>
                  <div className="flex justify-end space-x-3 pt-2">
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-primary-400 hover:text-primary-500 p-1"
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
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-primary-200">
              <tr>
                <th className="px-4 py-4 text-left text-sm font-medium text-primary-400 tracking-wider">Auto login</th>
                <th className="px-4 py-4 text-left text-sm font-medium text-primary-400 tracking-wider">Name</th>
                <th className="px-4 py-4 text-left text-sm font-medium text-primary-400 tracking-wider">Mobile</th>
                <th className="px-4 py-4 text-left text-sm font-medium text-primary-400 tracking-wider">Email</th>
                <th className="px-4 py-4 text-left text-sm font-medium text-primary-400 tracking-wider">Role</th>
                <th className="px-4 py-4 text-left text-sm font-medium text-primary-400 tracking-wider">Plan expire</th>
                <th className="px-4 py-4 text-left text-sm font-medium text-primary-400 tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-primary-200">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <button
                      className="text-primary-400 hover:text-primary-500"
                      title="Auto Login"
                    >
                      <LogIn size={20} />
                    </button>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-primary">{user.name}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-primary-400">{user.mobile}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-primary-400">{user.email}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-primary-400">{user.role}</td>
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
          onClose={handleCloseModal}
          onUpdate={handleUpdate}
        />
      )}

      {filteredUsers.length === 0 && !loading && (
        <div className="p-8 text-center flex justify-center items-center text-primary-400 py-3 w-full">
          No users found matching your search criteria.
        </div>
      )}
    </div>
  );
};

export default UserTable;