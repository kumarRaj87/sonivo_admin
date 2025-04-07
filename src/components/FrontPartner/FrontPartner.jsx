import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import Skeleton from './Skeleton';
import Modal from './Modal';
import PartnerCard from './PartnerCard';

const FrontPartner = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [partners] = useState([
    { id: 1, name: 'Partner 1', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200' },
    { id: 2, name: 'Partner 2', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200' },
    // Add more partners as needed
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleEdit = (partner) => {
    setSelectedPartner(partner);
    setIsModalOpen(true);
  };

  const handleFileUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      // Handle file upload logic here
      console.log('Selected file:', file);
    };
    input.click();
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Front Partner</h1>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <span>Dashboard</span>
              <span className="mx-2">•</span>
              <span>Front Partner</span>
            </div>
          </div>
          <button
            onClick={handleFileUpload}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Plus size={20} />
            <span>Add</span>
          </button>
        </div>
      </div>

      {loading ? (
        <Skeleton />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {partners.map(partner => (
            <PartnerCard
              key={partner.id}
              partner={partner}
              onEdit={handleEdit}
            />
          ))}
        </div>
      )}

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setSelectedPartner(null);
        }}
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Partner Name</label>
            <input
              type="text"
              value={selectedPartner?.name || ''}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Logo</label>
            <div className="mt-1 flex items-center">
              <button
                type="button"
                onClick={handleFileUpload}
                className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Change Logo
              </button>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default FrontPartner;