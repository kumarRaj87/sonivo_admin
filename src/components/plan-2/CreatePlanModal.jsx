

import React, { useState } from 'react';
import { X } from 'lucide-react';

const CreatePlanModal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    isTrial: false,
    price: '',
    priceStrike: '',
    description: '',
    callDialer: false,
    callBroadcast: false,
    messaging: false,
    agentAccess: false,
    phonebookLimit: 100,
    deviceLimit: 1,
    planDuration: 30
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: Date.now() // Simple way to generate unique id
    });
    onClose();
  };

  const handleToggle = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[6500]">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto hide-scrollbar">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-semibold">Create plan</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="rounded-b-2xl p-6 gap-4 w-full flex flex-col">
          <div className="relative group">
            <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
              Title
            </div>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
              placeholder=""
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Is trial?</span>
            <button
              type="button"
              onClick={() => handleToggle('isTrial')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                formData.isTrial ? 'bg-primary-400' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  formData.isTrial ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
                Price
              </div>
              <input
                type="text"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                placeholder=""
              />
            </div>
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
                Price strike
              </div>
              <input
                type="text"
                value={formData.priceStrike}
                onChange={(e) => setFormData({...formData, priceStrike: e.target.value})}
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                placeholder=""
              />
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
              Short description
            </div>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
              rows="3"
              placeholder=""
            />
          </div>

          <div className="space-y-4">
            {[
              { label: 'Call dialer', field: 'callDialer' },
              { label: 'Call Broadcast', field: 'callBroadcast' },
              { label: 'Messaging', field: 'messaging' },
              { label: 'Agent access', field: 'agentAccess' }
            ].map(({ label, field }) => (
              <div key={field} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{label}</span>
                <button
                  type="button"
                  onClick={() => handleToggle(field)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    formData[field] ? 'bg-primary-400' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      formData[field] ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>

          <div className="relative group">
            <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
              Phonebook limit
            </div>
            <input
              type="number"
              value={formData.phonebookLimit}
              onChange={(e) => setFormData({...formData, phonebookLimit: parseInt(e.target.value)})}
              className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
              placeholder=""
            />
          </div>

          <div className="relative group">
            <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
              Device limit
            </div>
            <input
              type="number"
              value={formData.deviceLimit}
              onChange={(e) => setFormData({...formData, deviceLimit: parseInt(e.target.value)})}
              className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
              placeholder=""
            />
          </div>

          <div className="relative group">
            <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
              Plan duration in days
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={formData.planDuration}
                onChange={(e) => setFormData({...formData, planDuration: parseInt(e.target.value)})}
                className="flex-1 pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                placeholder=""
              />
              <span className="text-primary-400">1 month(s)</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">30 days for 1 month and so on...</p>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 border rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary-400 text-white rounded-lg hover:bg-primary-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePlanModal;