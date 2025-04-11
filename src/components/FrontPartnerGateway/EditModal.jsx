

import React, { useState } from "react";
import { X } from "lucide-react";
const EditModal = ({
  isOpen,
  onClose,
  partner,
  onSave
}) => {
  const [editedPartner, setEditedPartner] = useState(partner || {});
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setEditedPartner(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSave(editedPartner);
    onClose();
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[6500]">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Partner</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="relative group mb-4">
            <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
              Partner Name
            </div>
            <input
              type="text"
              name="name"
              value={editedPartner.name || ""}
              onChange={handleChange}
              className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="relative group mb-4">
            <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
              Logo URL
            </div>
            <input
              type="text"
              name="logoUrl"
              value={editedPartner.logoUrl || ""}
              onChange={handleChange}
              className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-primary-400 text-white rounded-md hover:bg-primary-500">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>;
};
export default EditModal;