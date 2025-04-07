import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

const PartnerCard = ({ partner, onEdit }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <img 
        src={partner.logo} 
        alt={partner.name}
        className="w-full h-24 object-contain mb-4"
      />
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-gray-800">{partner.name}</h3>
        <div className="flex gap-2">
          <button 
            onClick={() => onEdit(partner)}
            className="text-blue-600 hover:text-blue-800"
          >
            <Edit size={18} />
          </button>
          <button className="text-red-600 hover:text-red-800">
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;