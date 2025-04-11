
import React from 'react';
import { X } from 'lucide-react';

const EditModal = ({ isOpen, onClose, gateway, onSave }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[5500]">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Edit {gateway} Settings</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="relative group">
            <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
              ID
            </div>
            <input
              type="text"
              className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
              placeholder=""
            />
          </div>
          <div className="relative group">
            <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
              Keys
            </div>
            <input
              type="text"
              className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
              placeholder=""
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 text-sm font-medium text-white bg-primary-400 rounded-md hover:bg-primary-500"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;