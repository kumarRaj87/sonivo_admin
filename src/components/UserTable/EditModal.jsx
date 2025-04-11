
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
    <div className="fixed inset-0 h-[100vh] overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center z-[6500]">
      <div className="bg-background rounded-2xl overflow-y-auto hide-scrollbar w-full max-h-[80vh] max-w-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Update user</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="rounded-b-2xl p-6 gap-4 w-full flex flex-col">
          <div className="relative group">
            <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
              Name
            </div>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
              placeholder=""
            />
          </div>

          <div className="relative group">
            <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
              Mobile
            </div>
            <input
              type="text"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
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
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
              placeholder=""
            />
          </div>

          <div className="relative group">
            <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
              Password
            </div>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
              placeholder=""
            />
          </div>

          <div className="flex justify-center w-full">
            <button
              type="submit"
              className="px-4 py-2 w-full text-sm bg-primary-400 text-white rounded-md hover:bg-primary"
            >
              Update
            </button>
          </div>
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
              <div key={plan} className="text-center p-4 rounded-lg border hover:border-primary-500 cursor-pointer">
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