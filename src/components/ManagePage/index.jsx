import { useEffect, useState } from 'react';
import { Trash2, Link as LinkIcon } from 'lucide-react';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import { RiPencilFill } from "react-icons/ri";
import TermsModal from './TermsModal';
import RichTextEditor from './RichTextEditor';
import Loader from '../loader/Loader';

const ManagePage = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [pageTitle, setPageTitle] = useState("");

  const cards = [
    {
      title: "Welcome to sonivo",
      description: "Welcome to sonivo, the AI-powered call center solution design...",
      image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=400&h=300&fit=crop"
    },
    {
      title: "SIP & Call Dialer Integration",
      description: "Connect effortlessly with global SIP providers and manage cal...",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=400&h=300&fit=crop"
    },
    {
      title: "Choose Your Plan",
      description: "Try sonivo free for 7 days!...",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop"
    },
    {
      title: "We're Here to Help",
      description: "Whether you're setting up sonivo for the first time or troubl...",
      image: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=400&h=300&fit=crop"
    },
  ];

  const disableBodyScroll = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-[50vh] bg-primary-200 p-2 w-full">
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
        </div>
      </div>

      <div className="flex gap-4 mb-8 mt-8">
        <button
          onClick={() => {
            setShowPrivacyModal(true)
            disableBodyScroll()
          }
          }
          className="flex items-center border-primary-300 gap-3 px-4 py-2 border rounded-2xl text-xs"
        >
          <RiPencilFill size={14} />
          Privacy policy
        </button>
        <button
          onClick={() => {
            disableBodyScroll()
            setShowTermsModal(true)
          }
          }
          className="flex items-center border-primary-300 gap-3 px-4 py-2 border rounded-2xl text-xs"
        >
          <RiPencilFill size={14} />
          Terms & Conditions
        </button>
      </div>

      <div className="mb-8">
        <div className="relative group mb-4">
          <div className="absolute -top-2.5 left-3 bg-primary-200 px-1 text-primary text-[11px]">
            Page Title
          </div>
          <input
            type="text"
            value={pageTitle}
            onChange={(e) => setPageTitle(e.target.value)}
            className="w-full pl-3 text-sm bg-primary-200 rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
            placeholder=""
          />
        </div>
        <div className="bg-primary-200 mb-4 px-1 text-primary text-xs pl-4">
          Slug :
        </div>

        <RichTextEditor />
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select image</label>
          <div className="border-2 border-dashed rounded-lg p-8 text-center">
            <p className="text-gray-500">Click or drag files to upload</p>
          </div>
        </div>
        <button className="w-full mt-4 bg-primary-400 text-white py-3 rounded-md hover:bg-primary-500">
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
              <button className="text-primary-400 hover:text-primary-500">
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
        <PrivacyPolicyModal
          onClose={() => {
            enableBodyScroll()
            setShowPrivacyModal(false)
          }
          } />
      )}
      {showTermsModal && (
        <TermsModal
          onClose={() => {
            enableBodyScroll()
            setShowTermsModal(false)
          }
          } />
      )}
    </div>
  );
};

export default ManagePage;