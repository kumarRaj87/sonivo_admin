import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaTrash } from 'react-icons/fa';
import EmailModal from './EmailModal';
import DeleteModal from './DeleteModal';

const LeadsTable = () => {
  const [loading, setLoading] = useState(true);
  const [leads, setLeads] = useState([
    {
      email: 'alice@example.com',
      name: 'Alice Johnson',
      mobile: '+919876543210',
    },
    {
      email: 'bob@example.com',
      name: 'Bob Smith',
      mobile: '+918765432109',
    },
    {
      email: 'charlie@example.com',
      name: 'Charlie Brown',
      mobile: '+917654321098',
    },
    {
      email: 'david@example.com',
      name: 'David Williams',
      mobile: '+916543210987',
    },
    {
      email: 'emma@example.com',
      name: 'Emma Wilson',
      mobile: '+915432109876',
    }
  ]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleDelete = () => {
    setLeads(leads.filter(lead => lead !== selectedLead));
  };

  const LoadingSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-12 bg-gray-200 rounded mb-4"></div>
      <div className="h-12 bg-gray-200 rounded"></div>
    </div>
  );

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full min-w-full">
          <thead>
            <tr className="text-left bg-gray-50">
              <th className="p-4">Email</th>
              <th className="p-4">Name</th>
              <th className="p-4">Mobile</th>
              <th className="p-4">Message</th>
              <th className="p-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={index} className="border-t">
                <td className="p-4">{lead.email}</td>
                <td className="p-4">{lead.name}</td>
                <td className="p-4">{lead.mobile}</td>
                <td className="p-4">
                  <button 
                    className="text-gray-600 hover:text-gray-800"
                    onClick={() => {
                      setSelectedLead(lead);
                      setIsEmailModalOpen(true);
                    }}
                  >
                    <FaEnvelope />
                  </button>
                </td>
                <td className="p-4">
                  <button 
                    className="text-red-600 hover:text-red-800"
                    onClick={() => {
                      setSelectedLead(lead);
                      setIsDeleteModalOpen(true);
                    }}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        lead={selectedLead}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        lead={selectedLead}
      />
    </>
  );
};

export default LeadsTable;