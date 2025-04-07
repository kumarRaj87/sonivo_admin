import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Edit, Trash2, Link as LinkIcon } from 'lucide-react';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsModal from './TermsModal';
import RichTextEditor from './RichTextEditor';
import { IoMdPhonePortrait } from "react-icons/io";

const ManagePage = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  
  const cards = [
    {
      title: "Welcome to Sonivo",
      description: "Welcome to Sonivo, the AI-powered call center solution design...",
      image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=400&h=300&fit=crop"
    },
    {
      title: "SIP & Call Dialer Integration",
      description: "Connect effortlessly with global SIP providers and manage cal...",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=400&h=300&fit=crop"
    },
    {
      title: "Choose Your Plan",
      description: "Try Sonivo free for 7 days!...",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop"
    },
    {
      title: "We're Here to Help",
      description: "Whether you're setting up Sonivo for the first time or troubl...",
      image: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=400&h=300&fit=crop"
    },
  ];

  return (
    <div className="p-6">
     

<div className="flex flex-col items-center justify-between mb-8">
        <div className="flex justify-start items-center w-full">
          <img
            src='https://sonivo.oneoftheprojects.com/assets/page.svg'
            alt=''
            className='h-24 w-24'
          />
        </div>
        <div className='w-full justify-between items-center flex'>

          <div className='space-y-2 flex flex-col'>
            <h1 className="text-2xl font-medium text-primary"> Manage Page</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span> Manage Page</span>
            </div>
          </div>
          {/* <button
            onClick={() => setIsCreateModalOpen(true)}
            className="text-sm bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
          >
            <IoMdPhonePortrait className='text-background' size={20} />
            Create Plan
          </button> */}
        </div>
      </div>

      <div className="flex gap-4 mb-8 mt-8">
        <button
          onClick={() => setShowPrivacyModal(true)}
          className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50"
        >
          <Edit size={16} />
          Privacy policy
        </button>
        <button
          onClick={() => setShowTermsModal(true)}
          className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50"
        >
          <Edit size={16} />
          Terms & Conditions
        </button>
      </div>

      <div className="mb-8">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Page title</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter page title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Slug</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter slug"
          />
        </div>
        <RichTextEditor />
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select image</label>
          <div className="border-2 border-dashed rounded-lg p-8 text-center">
            <p className="text-gray-500">Click or drag files to upload</p>
          </div>
        </div>
        <button className="w-full mt-4 bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800">
          Add
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-4">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{card.description}</p>
            <div className="flex justify-end gap-2">
              <button className="text-blue-500 hover:text-blue-600">
                <LinkIcon size={16} />
              </button>
              <button className="text-red-500 hover:text-red-600">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showPrivacyModal && (
        <PrivacyPolicyModal onClose={() => setShowPrivacyModal(false)} />
      )}
      {showTermsModal && (
        <TermsModal onClose={() => setShowTermsModal(false)} />
      )}
    </div>
  );
};

export default ManagePage;