
import React, { useState } from 'react';
import { Trash2, Edit } from 'lucide-react';

const Modal = ({ isOpen, onClose, row }) => {
  if (!isOpen || !row) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[5500] p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Edit Transaction</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 rounded-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
                Name
              </div>
              <input
                type="text"
                defaultValue={row.name}
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                placeholder=""
              />
            </div>
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
                Email
              </div>
              <input
                type="email"
                defaultValue={row.email}
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                placeholder=""
              />
            </div>
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
                Amount
              </div>
              <input
                type="number"
                defaultValue={row.amount}
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                placeholder=""
              />
            </div>
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
                Status
              </div>
              <select
                defaultValue={row.status}
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
              >
                <option value="Pending">Pending</option>
                <option value="Success">Success</option>
                <option value="Failed">Failed</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary-500 border border-transparent rounded-md text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Table = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleEdit = (row) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const data = [
    {
      payment_mode: 'ONLINE',
      amount: 1500,
      status: 'Pending',
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      createdAt: '25/03/25 | 05:10PM'
    },
    {
      payment_mode: 'OFFLINE',
      amount: 500,
      status: 'Failed',
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      createdAt: '25/03/25 | 05:15PM'
    },
    {
      payment_mode: 'ONLINE',
      amount: 2000,
      status: 'Success',
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      createdAt: '25/03/25 | 05:20PM'
    },
    {
      payment_mode: 'OFFLINE',
      amount: 750,
      status: 'Pending',
      name: 'David Lee',
      email: 'david.lee@example.com',
      createdAt: '25/03/25 | 05:25PM'
    },
    {
      payment_mode: 'ONLINE',
      amount: 1000,
      status: 'Success',
      name: 'Emma Wilson',
      email: 'emma.wilson@example.com',
      createdAt: '25/03/25 | 05:30PM'
    },
    {
      payment_mode: 'OFFLINE',
      amount: 1200,
      status: 'Failed',
      name: 'Frank Adams',
      email: 'frank.adams@example.com',
      createdAt: '25/03/25 | 05:35PM'
    },
    {
      payment_mode: 'ONLINE',
      amount: 800,
      status: 'Success',
      name: 'Grace Miller',
      email: 'grace.miller@example.com',
      createdAt: '25/03/25 | 05:40PM'
    },
    {
      payment_mode: 'OFFLINE',
      amount: 300,
      status: 'Pending',
      name: 'Henry Clark',
      email: 'henry.clark@example.com',
      createdAt: '25/03/25 | 05:45PM'
    },
    {
      payment_mode: 'ONLINE',
      amount: 2200,
      status: 'Success',
      name: 'Isabella Moore',
      email: 'isabella.moore@example.com',
      createdAt: '25/03/25 | 05:50PM'
    },
    {
      payment_mode: 'OFFLINE',
      amount: 950,
      status: 'Failed',
      name: 'Jack Thompson',
      email: 'jack.thompson@example.com',
      createdAt: '25/03/25 | 05:55PM'
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Desktop Table View (1024px and above) */}
      <div className="hidden lg:block">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-sm rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Mode</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.payment_mode}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${row.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      row.status === 'Success' ? 'bg-green-100 text-green-800' :
                      row.status === 'Failed' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.createdAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleEdit(row)}
                        className="text-primary-500 hover:text-primary-700 focus:outline-none"
                        aria-label="Edit"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700 focus:outline-none"
                        aria-label="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile/Tablet Card View (below 1024px) */}
      <div className="lg:hidden space-y-4">
        {data.map((row, index) => (
          <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{row.name}</h3>
                  <p className="text-sm text-gray-500">{row.email}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  row.status === 'Success' ? 'bg-green-100 text-green-800' :
                  row.status === 'Failed' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {row.status}
                </span>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Payment Mode</p>
                  <p className="text-sm font-medium">{row.payment_mode}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Amount</p>
                  <p className="text-sm font-medium">${row.amount}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Created At</p>
                  <p className="text-sm font-medium">{row.createdAt}</p>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => handleEdit(row)}
                  className="p-2 text-primary-500 hover:text-primary-700 focus:outline-none"
                  aria-label="Edit"
                >
                  <Edit size={18} />
                </button>
                <button
                  className="p-2 text-red-500 hover:text-red-700 focus:outline-none"
                  aria-label="Delete"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} row={selectedRow} />
    </div>
  );
};

export default Table;