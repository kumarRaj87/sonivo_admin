import React from "react";
import { MoreVertical } from "lucide-react";
const PartnerCard = ({
  partner,
  onEdit
}) => {
  return <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 relative flex flex-col items-center justify-center h-40">
      <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={() => onEdit(partner)}>
        <MoreVertical size={16} />
      </button>
      <div className="w-20 h-20 mb-2">
        <img src={partner.logoUrl || "/image.png"} alt={partner.name || "Partner Logo"} className="w-full h-full object-contain" />
      </div>
      <p className="text-sm text-center text-gray-600 mt-2">{partner.name || "Partner"}</p>
    </div>;
};
export default PartnerCard;