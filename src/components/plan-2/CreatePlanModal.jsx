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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[5005]">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-semibold">Create plan</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter plan title"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Is trial?</span>
            <button
              type="button"
              onClick={() => handleToggle('isTrial')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                formData.isTrial ? 'bg-blue-600' : 'bg-gray-200'
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
              <input
                type="text"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter price"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price strike</label>
              <input
                type="text"
                value={formData.priceStrike}
                onChange={(e) => setFormData({...formData, priceStrike: e.target.value})}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter strike price"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Short description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full p-2 border rounded-lg"
              rows="3"
              placeholder="Enter plan description"
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
                    formData[field] ? 'bg-blue-600' : 'bg-gray-200'
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phonebook limit</label>
            <input
              type="number"
              value={formData.phonebookLimit}
              onChange={(e) => setFormData({...formData, phonebookLimit: parseInt(e.target.value)})}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter phonebook limit"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Device limit</label>
            <input
              type="number"
              value={formData.deviceLimit}
              onChange={(e) => setFormData({...formData, deviceLimit: parseInt(e.target.value)})}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter device limit"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Plan duration in days</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={formData.planDuration}
                onChange={(e) => setFormData({...formData, planDuration: parseInt(e.target.value)})}
                className="flex-1 p-2 border rounded-lg"
                placeholder="Enter duration"
              />
              <span className="text-blue-600">1 month(s)</span>
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
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
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