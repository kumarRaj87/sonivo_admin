import React, { useState, useEffect } from 'react';
import { Trash2, Edit } from 'lucide-react';
import Modal from './Modal';
import TableSkeleton from './TableSkeleton';

const Table = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

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
    // Add more data rows as needed
  ];

  if (loading) {
    return <TableSkeleton />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Payment Mode</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Amount</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Email</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Created At</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index}>
              <td className="px-6 py-4 text-sm text-gray-900">{row.payment_mode}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{row.amount}</td>
              <td className="px-6 py-4 text-sm">
                <span className={`px-2 py-1 rounded-full ${
                  row.status === 'Success' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {row.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">{row.name}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{row.email}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{row.createdAt}</td>
              <td className="px-6 py-4 text-sm">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(row)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Edit size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} row={selectedRow} />
    </div>
  );
};

export default Table;