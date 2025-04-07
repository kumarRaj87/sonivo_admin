import React, { useState } from 'react';
import { X, DollarSign } from 'lucide-react';

const EditModal = ({ user, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    mobile: user.mobile,
    email: user.email,
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Update user</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="space-y-2">
            <label className="block text-sm text-gray-600">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-600">Mobile</label>
            <input
              type="text"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-600">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-600">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new password"
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded flex items-center justify-center space-x-2 hover:bg-blue-700">
            <span>Update</span>
          </button>
        </form>

        <div className="p-4 border-t">
          <h3 className="text-center text-gray-600 mb-4 flex items-center justify-center">
            <DollarSign className="inline-block mr-2" size={20} />
            Update plan
          </h3>
          <p className="text-sm text-center text-gray-500 mb-4">
            You can update user's plan by clicking on the plan
          </p>
          
          <div className="grid grid-cols-3 gap-4">
            {['Trial', 'Gold', 'Platinum'].map((plan) => (
              <div key={plan} className="text-center p-4 rounded-lg border hover:border-blue-500 cursor-pointer">
                <DollarSign className="mx-auto mb-2" size={24} />
                <h4 className="font-semibold">{plan}</h4>
                <p className="text-sm text-gray-500">
                  {plan === 'Trial' ? '7' : '30'} for days(s)
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;