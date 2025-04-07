import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddButton from "./AddButton";
import PartnerGrid from "./PartnerGrid";
import EditModal from "./EditModal";
import SkeletonLoader from "./SkeletonLoader";
const FrontPartnerGateway = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [partners, setPartners] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPartner, setCurrentPartner] = useState(null);
  // Sample partner data
  const samplePartners = Array(8).fill().map((_, i) => ({
    id: i,
    name: `Partner ${i + 1}`,
    logoUrl: "/image.png"
  }));
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setPartners(samplePartners);
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
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
  return <div className="container mx-auto px-4 py-6 bg-gray-50 min-h-screen">
      {isLoading ? <SkeletonLoader /> : <>
          <Header />
       
          <hr className="border-gray-200 my-4" />
          <PartnerGrid partners={partners} onEdit={handleEdit} />
          <EditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} partner={currentPartner} onSave={handleSave} />
        </>}
    </div>;
};
export default FrontPartnerGateway;