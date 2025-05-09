
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Trash2, Plus, Search } from 'lucide-react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function BrandManagement() {
//   const [brands, setBrands] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState(null);

//   const BASE_URL = 'https://vokal-api.oyelabs.com';

//   useEffect(() => {
//     fetchBrands();
//   }, []);

//   const fetchBrands = async () => {
//     try {
//       const token = localStorage.getItem('authToken');
//       const response = await axios.get(`${BASE_URL}/admin/get_brands`, {
//         headers: {
//           'Content-Type': 'application/json',
//           'access-token': token
//         }
//       });

//       if (response.data.success) {
//         setBrands(response.data.data || []);
//       } else {
//         setError('Failed to fetch brands');
//         toast.error('Failed to fetch brands');
//       }
//     } catch (error) {
//       setError(error.message || 'Error connecting to the server');
//       toast.error(error.message || 'Error connecting to the server');
//       console.error('Error fetching brands:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       if (!file.type.match('image.*')) {
//         toast.error('Please select an image file (JPEG, PNG)');
//         return;
//       }
//       if (file.size > 2 * 1024 * 1024) {
//         toast.error('File size should be less than 2MB');
//         return;
//       }
//       setSelectedFile(file);
//     }
//   };

//   const handleAddBrand = async (e) => {
//     e.preventDefault();
//     if (!selectedFile) {
//       toast.warning('Please select an image file');
//       return;
//     }

//     setUploading(true);
//     const formData = new FormData();
//     formData.append('file', selectedFile);

//     try {
//       const token = localStorage.getItem('authToken');
//       const response = await axios.post(`${BASE_URL}/admin/add_brand_image`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           'access-token': token
//         },
//       });

//       if (response.data.success) {
//         toast.success('Brand added successfully');
//         setShowModal(false);
//         setSelectedFile(null);
//         await fetchBrands();
//       } else {
//         toast.error(response.data.message || 'Failed to add brand');
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Error adding brand');
//       console.error('Error adding brand:', error);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleDeleteBrand = async (id) => {
//     try {
//       const token = localStorage.getItem('authToken');
//       const response = await axios.delete(`${BASE_URL}/admin/delete_brand_image/${id}`, {
//         headers: {
//           'access-token': token
//         }
//       });

//       if (response.data.success) {
//         toast.success('Brand deleted successfully');
//         await fetchBrands();
//       } else {
//         toast.error(response.data.message || 'Failed to delete brand');
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Error deleting brand');
//       console.error('Error deleting brand:', error);
//     }
//   };

//   const filteredBrands = brands.filter(brand => 
//     brand.filename.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="min-h-[50vh] bg-primary-200 p-4 w-full">
//       <ToastContainer position="top-right" autoClose={3000} />
//       <div className="flex flex-col items-center justify-between mb-8">
//         <div className="flex justify-start items-center w-full">
//         <img
//             src='https://sonivo.oneoftheprojects.com/assets/partners.svg'
//             alt=''
//             className='h-24 w-24'
//           />
//         </div>
//         <div className="w-full justify-between items-center flex">
//           <div className="space-y-2 flex flex-col">
//             <h1 className="text-2xl font-medium text-primary">Brand Management</h1>
//             <div className="flex items-center gap-2 text-xs text-gray-400">
//               <span>Dashboard</span>
//               <span>•</span>
//               <span>Brands</span>
//             </div>
//           </div>
//           <button
//             onClick={() => setShowModal(true)}
//             className="text-sm bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
//           >
//             <Plus size={18} className="text-background" />
//             Add Brand
//           </button>
//         </div>
//       </div>

//       {error && (
//         <div className="text-red-500 text-center py-4 mb-4">
//           {error}
//         </div>
//       )}

//       <div className="mb-8">
//         <div className="relative flex-grow max-w-md">
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <Search size={18} className="text-gray-400" />
//           </div>
//           <input
//             type="text"
//             className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//             placeholder="Search brands..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       {filteredBrands.length === 0 ? (
//         <div className="bg-white rounded-lg shadow p-8 text-center">
//           <p className="text-gray-500">No brands found. Click "Add Brand" to create one.</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredBrands.map((brand) => (
//             <div key={brand.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="flex items-center">
//                     <div className="w-16 h-16 rounded-lg mr-4 flex items-center justify-center bg-gray-100">
//                       <img 
//                         src={brand.filename} 
//                         alt="Brand logo" 
//                         className="w-full h-full object-contain rounded-lg"
//                         onError={(e) => {
//                           e.target.onerror = null;
//                           e.target.src = 'https://via.placeholder.com/80';
//                         }}
//                       />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">
//                         Added: {new Date(brand.createdAt).toLocaleDateString()}
//                       </p>
//                     </div>
//                   </div>
//                   <button 
//                     onClick={() => handleDeleteBrand(brand.id)}
//                     className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
//                     disabled={uploading}
//                   >
//                     <Trash2 size={18} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[5500]">
//           <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold">Add New Brand</h2>
//               <button 
//                 onClick={() => {
//                   setShowModal(false);
//                   setSelectedFile(null);
//                 }}
//                 className="text-gray-500 hover:text-gray-700"
//                 disabled={uploading}
//               >
//                 ×
//               </button>
//             </div>
            
//             <form onSubmit={handleAddBrand}>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Brand Logo
//                   </label>
//                   <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-primary-500 transition-colors">
//                     <div className="text-center">
//                       {selectedFile ? (
//                         <div className="flex flex-col items-center gap-4">
//                           <div className="relative">
//                             <img 
//                               src={URL.createObjectURL(selectedFile)} 
//                               alt="Preview" 
//                               className="h-32 w-32 object-contain rounded-lg border border-gray-200"
//                             />
//                           </div>
//                           <div className="flex flex-col items-center">
//                             <span className="text-sm text-gray-600">{selectedFile.name}</span>
//                             <span className="text-xs text-gray-500">
//                               {(selectedFile.size / 1024).toFixed(1)} KB
//                             </span>
//                           </div>
//                           <button
//                             type="button"
//                             className="text-sm text-primary-600 font-medium mt-2 hover:text-primary-700"
//                             onClick={() => setSelectedFile(null)}
//                           >
//                             Change Image
//                           </button>
//                         </div>
//                       ) : (
//                         <div className="flex flex-col items-center">
//                           <input
//                             type="file"
//                             accept="image/*"
//                             onChange={handleFileChange}
//                             className="hidden"
//                             id="brand-logo"
//                           />
//                           <label
//                             htmlFor="brand-logo"
//                             className="cursor-pointer text-primary-600 hover:text-primary-700 font-medium"
//                           >
//                             Click to upload brand
//                           </label>
//                           <p className="text-xs text-gray-500 mt-2">PNG, JPG (Max 2MB)</p>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="mt-6 flex justify-end gap-3">
//                 <button 
//                   type="button" 
//                   className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
//                   onClick={() => {
//                     setShowModal(false);
//                     setSelectedFile(null);
//                   }}
//                   disabled={uploading}
//                 >
//                   Cancel
//                 </button>
//                 <button 
//                   type="submit" 
//                   className="px-4 py-2 bg-primary-600 text-black rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                   disabled={uploading || !selectedFile}
//                 >
//                   {uploading ? 'Uploading...' : 'Save Brand'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, Plus, Search } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/loader/Loader';

export default function BrandManagement() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const BASE_URL = 'https://vokal-api.oyelabs.com';

  useEffect(() => {
    setTimeout(() => {
      fetchBrands();
      setLoading(false);
    }, 300);
  }, []);

  const fetchBrands = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get(`${BASE_URL}/admin/get_brands`, {
        headers: {
          'Content-Type': 'application/json',
          'access-token': token
        }
      });

      if (response.data.success) {
        setBrands(response.data.data || []);
      } else {
        setError('Failed to fetch brands');
        toast.error('Failed to fetch brands');
      }
    } catch (error) {
      setError(error.message || 'Error connecting to the server');
      toast.error(error.message || 'Error connecting to the server');
      console.error('Error fetching brands:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.match('image.*')) {
        toast.error('Please select an image file (JPEG, PNG)');
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        toast.error('File size should be less than 2MB');
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleAddBrand = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      toast.warning('Please select an image file');
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.post(`${BASE_URL}/admin/add_brand_image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'access-token': token
        },
      });

      if (response.data.success) {
        toast.success('Brand added successfully');
        setShowModal(false);
        setSelectedFile(null);
        await fetchBrands();
      } else {
        toast.error(response.data.message || 'Failed to add brand');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error adding brand');
      console.error('Error adding brand:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteBrand = async (id) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.delete(`${BASE_URL}/admin/delete_brand_image/${id}`, {
        headers: {
          'access-token': token
        }
      });

      if (response.data.success) {
        toast.success('Brand deleted successfully');
        await fetchBrands();
      } else {
        toast.error(response.data.message || 'Failed to delete brand');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error deleting brand');
      console.error('Error deleting brand:', error);
    }
  };

  const filteredBrands = brands.filter(brand => 
    brand.filename.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-[50vh] bg-primary-200 p-4 w-full">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex flex-col items-center justify-between mb-8">
        <div className="flex justify-start items-center w-full">
        <img
            src='https://sonivo.oneoftheprojects.com/assets/partners.svg'
            alt=''
            className='h-24 w-24'
          />
        </div>
        <div className="w-full justify-between items-center flex">
          <div className="space-y-2 flex flex-col">
            <h1 className="text-2xl font-medium text-primary">Brand Management</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span>Brands</span>
            </div>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="text-sm bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
          >
            <Plus size={18} className="text-background" />
            Add Brand
          </button>
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-center py-4 mb-4">
          {error}
        </div>
      )}

      <div className="mb-8">
        <div className="relative flex-grow max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Search brands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredBrands.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-500">No brands found. Click "Add Brand" to create one.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBrands.map((brand) => (
            <div key={brand.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-lg mr-4 flex items-center justify-center bg-gray-100">
                      <img 
                        src={brand.filename} 
                        alt="Brand logo" 
                        className="w-full h-full object-contain rounded-lg"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/80';
                        }}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Added: {new Date(brand.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDeleteBrand(brand.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                    disabled={uploading}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[5500]">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add New Brand</h2>
              <button 
                onClick={() => {
                  setShowModal(false);
                  setSelectedFile(null);
                }}
                className="text-gray-500 hover:text-gray-700"
                disabled={uploading}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleAddBrand}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brand Logo
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-primary-500 transition-colors">
                    <div className="text-center">
                      {selectedFile ? (
                        <div className="flex flex-col items-center gap-4">
                          <div className="relative">
                            <img 
                              src={URL.createObjectURL(selectedFile)} 
                              alt="Preview" 
                              className="h-32 w-32 object-contain rounded-lg border border-gray-200"
                            />
                          </div>
                          <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-600">{selectedFile.name}</span>
                            <span className="text-xs text-gray-500">
                              {(selectedFile.size / 1024).toFixed(1)} KB
                            </span>
                          </div>
                          <button
                            type="button"
                            className="text-sm text-primary-600 font-medium mt-2 hover:text-primary-700"
                            onClick={() => setSelectedFile(null)}
                          >
                            Change Image
                          </button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                            id="brand-logo"
                          />
                          <label
                            htmlFor="brand-logo"
                            className="cursor-pointer text-primary-600 hover:text-primary-700 font-medium"
                          >
                            Click to upload brand
                          </label>
                          <p className="text-xs text-gray-500 mt-2">PNG, JPG (Max 2MB)</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end gap-3">
                <button 
                  type="button" 
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    setShowModal(false);
                    setSelectedFile(null);
                  }}
                  disabled={uploading}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-primary-600 text-black rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={uploading || !selectedFile}
                >
                  {uploading ? 'Uploading...' : 'Save Brand'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}