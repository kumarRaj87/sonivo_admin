import React, { useState, useEffect } from "react";
import Header from "./Header";
import PartnerGrid from "./PartnerGrid";
import EditModal from "./EditModal";
import Loader from "../loader/Loader";
const FrontPartnerGateway = () => {
  const [partners, setPartners] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPartner, setCurrentPartner] = useState(null);
  // Sample partner data
  const samplePartners = Array(8).fill().map((_, i) => ({
    id: i,
    name: `Partner ${i + 1}`,
    logoUrl: "/image.png"
  }));

  const handleEdit = partner => {
    setCurrentPartner(partner);
    setIsModalOpen(true);
  };
  const handleSave = editedPartner => {
    setPartners(partners.map(p => p.id === editedPartner.id ? editedPartner : p));
  };
  const handleFileSelect = files => {
    // Handle file selection - in a real app, you would process the files here
    console.log("Files selected:", files);
    // Example: Add a new partner for each file
    const newPartners = Array.from(files).map((file, index) => ({
      id: partners.length + index,
      name: file.name.split('.')[0],
      logoUrl: URL.createObjectURL(file)
    }));
    setPartners([...partners, ...newPartners]);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => 
   { 
    setPartners(samplePartners);
    setLoading(false);
   }
    , 300);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="min-h-[50vh] bg-primary-200 p-2 w-full">
      <Header />
      <hr className="border-gray-200 my-4" />
      <PartnerGrid partners={partners} onEdit={handleEdit} />
      <EditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} partner={currentPartner} onSave={handleSave} />
    </div>
  )
};
export default FrontPartnerGateway;