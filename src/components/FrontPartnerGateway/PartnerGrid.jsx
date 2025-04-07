import React from "react";
import PartnerCard from "./PartnerCard";
const PartnerGrid = ({
  partners,
  onEdit
}) => {
  return <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-4">
      {partners.map((partner, index) => <PartnerCard key={index} partner={partner} onEdit={onEdit} />)}
    </div>;
};
export default PartnerGrid;