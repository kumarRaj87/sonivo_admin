import React from 'react';

function PartnerCard({ partner, onEdit }) {
  return (
    <div className="bg-background rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <img 
        src={partner.image} 
        alt={partner.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
      <p className="text-gray-600 mb-4">{partner.description}</p>
      <button
        onClick={() => onEdit(partner)}
        className="bg-primary-400 text-background px-4 py-2 rounded hover:bg-primary transition-colors"
      >
        Edit Partner
      </button>
    </div>
  );
}

export default PartnerCard;