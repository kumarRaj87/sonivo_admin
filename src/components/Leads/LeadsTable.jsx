
import React, { useState } from 'react';
import { FaEnvelope, FaTrash, FaUser, FaPhone, FaEnvelopeOpen } from 'react-icons/fa';
import EmailModal from './EmailModal';
import DeleteModal from './DeleteModal';

const LeadsTable = () => {
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

  const handleDelete = () => {
    setLeads(leads.filter(lead => lead !== selectedLead));
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      {/* Desktop Table View (shown on screens >= 1024px) */}
      <div className="hidden lg:block overflow-x-auto rounded-lg shadow-sm border border-gray-200">
        <table className="w-full min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leads.map((lead, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.mobile}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    className="text-primary-400 hover:text-primary-500 p-1 rounded-full hover:bg-blue-50 transition-colors"
                    onClick={() => {
                      setSelectedLead(lead);
                      setIsEmailModalOpen(true);
                    }}
                    aria-label="Send message"
                  >
                    <FaEnvelope className="w-5 h-5" />
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-50 transition-colors"
                    onClick={() => {
                      setSelectedLead(lead);
                      setIsDeleteModalOpen(true);
                    }}
                    aria-label="Delete lead"
                  >
                    <FaTrash className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View (shown on screens < 1024px) */}
      <div className="lg:hidden space-y-4">
        {leads.map((lead, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                <FaUser className="w-5 h-5 text-primary-500" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-medium text-gray-900 truncate">{lead.name}</h3>
                <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <FaEnvelopeOpen className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    <span className="truncate">{lead.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <FaPhone className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    <span>{lead.mobile}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-3">
              <button
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                onClick={() => {
                  setSelectedLead(lead);
                  setIsEmailModalOpen(true);
                }}
              >
                <FaEnvelope className="mr-2 h-4 w-4" />
                Message
              </button>
              <button
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={() => {
                  setSelectedLead(lead);
                  setIsDeleteModalOpen(true);
                }}
              >
                <FaTrash className="mr-2 h-4 w-4" />
                Delete
              </button>
            </div>
          </div>
        ))}
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