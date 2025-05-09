// import React, { useState, useEffect } from 'react';
// import ColorPalette from './ColorPalette';
// import Skeleton from './Skeleton';
// import { IoMdPhonePortrait } from "react-icons/io";
// import Loader from '../loader/Loader';

// const WebTheme = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, []);


//   useEffect(() => {
//     setTimeout(() => setLoading(false), 300);
//   }, []);

//   if (loading) {
//     return <Loader />;
//   }
//   return (
//     <div className="min-h-screen bg-white p-4">
//       <div className="flex flex-col items-center justify-between mb-8">
//         <div className="flex justify-start items-center w-full">
//           <img
//             src='https://sonivo.oneoftheprojects.com/assets/faq.svg'
//             alt=''
//             className='h-24 w-24'
//           />
//         </div>
//         <div className='w-full justify-between items-center flex'>

//           <div className='space-y-2 flex flex-col'>
//             <h1 className="text-2xl font-medium text-primary"> Call Force</h1>
//             <div className="flex items-center gap-2 text-xs text-gray-400">
//               <span>Dashboard</span>
//               <span>•</span>
//               <span> Call Force</span>
//             </div>
//           </div>
//           <button
//             onClick={() => setIsCreateModalOpen(true)}
//             className="text-sm bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
//           >
//             <IoMdPhonePortrait className='text-background' size={20} />
//             Save
//           </button>
//         </div>
//       </div>

//       <main className=" py-8 px-4 sm:px-6 lg:px-8">
//         <div className="bg-white rounded-xl shadow-sm border border-gray-200">
//           <div className="border-b border-gray-200 px-6 py-4">
//             <h2 className="text-xl font-semibold text-gray-800">Text</h2>
//           </div>
//           {loading ? <Skeleton /> : <ColorPalette />}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default WebTheme;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ColorPalette from './ColorPalette';
import { IoMdPhonePortrait } from "react-icons/io";
import { XIcon } from 'lucide-react';

const API_BASE_URL = 'https://vokal-api.oyelabs.com/web';

const WebTheme = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    fetchTheme();
  }, []);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const fetchTheme = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/get-theme`);
      if (response.data.success) {
        setTheme(response.data.data);
        setError(null);
      } else {
        throw new Error(response.data.message || 'Failed to fetch theme');
      }
    } catch (error) {
      console.error('Error fetching theme:', error);
      setError('Failed to fetch theme. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_BASE_URL}/save-theme`, {
        data: theme
      });
      
      if (response.data.success) {
        setSuccessMessage('Theme saved successfully!');
        setError(null);
      } else {
        throw new Error(response.data.message || 'Failed to save theme');
      }
    } catch (error) {
      console.error('Error saving theme:', error);
      setError('Failed to save theme. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleColorChange = (newTheme) => {
    setTheme(newTheme);
  };

  if (loading && !theme) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="flex flex-col items-center justify-between mb-8">
        <div className="flex justify-start items-center w-full">
          <img
            src='https://sonivo.oneoftheprojects.com/assets/faq.svg'
            alt=''
            className='h-24 w-24'
          />
        </div>
        <div className='w-full justify-between items-center flex'>
          <div className='space-y-2 flex flex-col'>
            <h1 className="text-2xl font-medium text-primary">Call Force</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span>Call Force</span>
            </div>
          </div>
          <button
            onClick={handleSave}
            disabled={loading}
            className="text-sm bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <IoMdPhonePortrait className='text-background' size={20} />
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
          <div className="flex justify-between items-center">
            <span>{error}</span>
            <button 
              onClick={() => setError(null)}
              className="text-red-700 hover:text-red-900"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {successMessage && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6">
          <div className="flex justify-between items-center">
            <span>{successMessage}</span>
            <button 
              onClick={() => setSuccessMessage(null)}
              className="text-green-700 hover:text-green-900"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200 px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">Text</h2>
          </div>
          {loading ? (
            <div className="p-6 flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <ColorPalette theme={theme} onThemeChange={handleColorChange} />
          )}
        </div>
      </main>
    </div>
  );
};

export default WebTheme;