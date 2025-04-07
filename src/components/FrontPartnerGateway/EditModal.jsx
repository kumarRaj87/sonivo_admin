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
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[5005]">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Partner</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Partner Name
            </label>
            <input type="text" name="name" value={editedPartner.name || ""} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Logo URL
            </label>
            <input type="text" name="logoUrl" value={editedPartner.logoUrl || ""} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>;
};
export default EditModal;