// import React from "react";
// import PartnerCard from "./PartnerCard";
// const PartnerGrid = ({
//   partners,
//   onEdit
// }) => {
//   return <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-4">
//       {partners.map((partner, index) => <PartnerCard key={index} partner={partner} onEdit={onEdit} />)}
//     </div>;
// };
// export default PartnerGrid;


// import React from 'react';
// import PartnerCard from './PartnerCard';

// const partners = [
//   {
//     id: 1,
//     name: 'Tech Solutions Inc',
//     description: 'Leading provider of innovative technology solutions',
//     image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60'
//   },
//   {
//     id: 2,
//     name: 'Global Innovations',
//     description: 'International consulting and development services',
//     image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60'
//   },
//   {
//     id: 3,
//     name: 'Digital Dynamics',
//     description: 'Digital transformation and software solutions',
//     image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=60'
//   },
//   {
//     id: 4,
//     name: 'Future Systems',
//     description: 'Next-generation technology infrastructure',
//     image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60'
//   },
//   {
//     id: 5,
//     name: 'Smart Solutions',
//     description: 'Intelligent business solutions provider',
//     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60'
//   },
//   {
//     id: 6,
//     name: 'Cloud Experts',
//     description: 'Cloud computing and infrastructure services',
//     image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&auto=format&fit=crop&q=60'
//   },
//   {
//     id: 7,
//     name: 'Data Analytics Pro',
//     description: 'Advanced data analytics and insights',
//     image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60'
//   },
//   {
//     id: 8,
//     name: 'Security Masters',
//     description: 'Cybersecurity and threat protection',
//     image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop&q=60'
//   },
//   {
//     id: 9,
//     name: 'AI Solutions',
//     description: 'Artificial Intelligence and Machine Learning',
//     image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60'
//   },
//   {
//     id: 10,
//     name: 'Network Plus',
//     description: 'Enterprise networking solutions',
//     image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60'
//   },
//   {
//     id: 11,
//     name: 'Mobile Innovators',
//     description: 'Mobile app development and strategy',
//     image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60'
//   },
//   {
//     id: 12,
//     name: 'Web Wizards',
//     description: 'Web development and design services',
//     image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60'
//   },
//   {
//     id: 13,
//     name: 'DevOps Elite',
//     description: 'DevOps and continuous integration',
//     image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&auto=format&fit=crop&q=60'
//   },
//   {
//     id: 14,
//     name: 'Quantum Computing',
//     description: 'Next-gen quantum solutions',
//     image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format&fit=crop&q=60'
//   },
//   {
//     id: 15,
//     name: 'IoT Specialists',
//     description: 'Internet of Things solutions',
//     image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60'
//   },
//   {
//     id: 16,
//     name: 'Blockchain Tech',
//     description: 'Blockchain development and consulting',
//     image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&auto=format&fit=crop&q=60'
//   },
//   {
//     id: 17,
//     name: 'UX Masters',
//     description: 'User experience design and research',
//     image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60'
//   },
//   {
//     id: 18,
//     name: 'Cloud Native',
//     description: 'Cloud-native application development',
//     image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60'
//   },
//   {
//     id: 19,
//     name: 'API Experts',
//     description: 'API development and integration',
//     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60'
//   },
//   {
//     id: 20,
//     name: 'Data Science Pro',
//     description: 'Data science and predictive analytics',
//     image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&auto=format&fit=crop&q=60'
//   }
// ];

// function PartnerGrid() {
//   const handleEdit = (partner) => {
//     console.log('Editing partner:', partner);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold mb-6">Our Partners</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {partners.map((partner) => (
//           <PartnerCard
//             key={partner.id}
//             partner={partner}
//             onEdit={handleEdit}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PartnerGrid;



import React, { useState } from 'react';
import PartnerCard from './PartnerCard';
import EditModal from './EditModal';

const partners = [
  {
    id: 1,
    name: 'Tech Solutions Inc',
    description: 'Leading provider of innovative technology solutions',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 2,
    name: 'Global Innovations',
    description: 'International consulting and development services',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 3,
    name: 'Digital Dynamics',
    description: 'Digital transformation and software solutions',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 4,
    name: 'Future Systems',
    description: 'Next-generation technology infrastructure',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 5,
    name: 'Smart Solutions',
    description: 'Intelligent business solutions provider',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 6,
    name: 'Cloud Experts',
    description: 'Cloud computing and infrastructure services',
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 7,
    name: 'Data Analytics Pro',
    description: 'Advanced data analytics and insights',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 8,
    name: 'Security Masters',
    description: 'Cybersecurity and threat protection',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 9,
    name: 'AI Solutions',
    description: 'Artificial Intelligence and Machine Learning',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 10,
    name: 'Network Plus',
    description: 'Enterprise networking solutions',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 11,
    name: 'Mobile Innovators',
    description: 'Mobile app development and strategy',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 12,
    name: 'Web Wizards',
    description: 'Web development and design services',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 13,
    name: 'DevOps Elite',
    description: 'DevOps and continuous integration',
    image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 14,
    name: 'Quantum Computing',
    description: 'Next-gen quantum solutions',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 15,
    name: 'IoT Specialists',
    description: 'Internet of Things solutions',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 16,
    name: 'Blockchain Tech',
    description: 'Blockchain development and consulting',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 17,
    name: 'UX Masters',
    description: 'User experience design and research',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 18,
    name: 'Cloud Native',
    description: 'Cloud-native application development',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 19,
    name: 'API Experts',
    description: 'API development and integration',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 20,
    name: 'Data Science Pro',
    description: 'Data science and predictive analytics',
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&auto=format&fit=crop&q=60'
  }
];

function PartnerGrid() {
  const [partnersList, setPartnersList] = useState(partners);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (partner) => {
    setSelectedPartner(partner);
    setIsModalOpen(true);
  };

  const handleSave = (editedPartner) => {
    setPartnersList(prevPartners =>
      prevPartners.map(partner =>
        partner.id === editedPartner.id ? editedPartner : partner
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {partnersList.map((partner) => (
          <PartnerCard
            key={partner.id}
            partner={partner}
            onEdit={handleEdit}
          />
        ))}
      </div>
      <EditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        partner={selectedPartner}
        onSave={handleSave}
      />
    </div>
  );
}

export default PartnerGrid;