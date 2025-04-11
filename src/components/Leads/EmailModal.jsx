

import React from 'react';

const EmailModal = ({ isOpen, onClose, lead }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[5500]">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Send Email</h2>
        <div className="mb-4">
          <p><span className="font-semibold">To:</span> {lead.email}</p>
          <p><span className="font-semibold">Name:</span> {lead.name}</p>
        </div>
        <div className="relative group mb-4">
          <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
            Message
          </div>
          <textarea
            className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary h-32"
            placeholder=""
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-primary-400 text-white rounded hover:bg-primary-500"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;