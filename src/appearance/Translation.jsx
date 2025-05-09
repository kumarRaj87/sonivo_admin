import { useEffect, useState } from 'react';
import { MonitorIcon, PencilIcon, Trash2Icon, XIcon } from 'lucide-react';
import { IoMdPhonePortrait } from "react-icons/io";
import axios from 'axios';

const API_BASE_URL = 'https://vokal-api.oyelabs.com/web';

function Translation() {
  const [languages, setLanguages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newLanguage, setNewLanguage] = useState('');
  const [editingLanguage, setEditingLanguage] = useState({ code: '', newCode: '', updatedJson: {} });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const fetchLanguages = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/get-all-translation-name`);
      if (response.data.success) {
        const languageFiles = response.data.data;
        const languageNames = languageFiles.map(file => file.replace('.json', ''));
        setLanguages(languageNames);
        setError(null);
      }
    } catch (error) {
      console.error('Error fetching languages:', error);
      setError('Failed to fetch languages. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddLanguage = async (e) => {
    const token = localStorage.getItem('authToken');
    e.preventDefault();
    if (!newLanguage.trim()) return;

    try {
      setLoading(true);
      setError(null);
      
      if (newLanguage.trim().length < 2) {
        throw new Error('Language code must be at least 2 characters');
      }

      const response = await axios.post(
        `${API_BASE_URL}/add-new-translation`,
        { newcode: newLanguage.trim().toLowerCase() },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'access-token': token
          }
        }
      );
      
      if (response.data.success) {
        setSuccessMessage(`Language "${newLanguage}" added successfully!`);
        setNewLanguage('');
        setIsModalOpen(false);
        await fetchLanguages();
      } else {
        throw new Error(response.data.message || 'Server responded with failure');
      }
    } catch (error) {
      console.error('Error adding language:', error);
      
      let errorMessage = 'Failed to add language. Please try again.';
      if (error.response) {
        if (error.response.status === 500) {
          errorMessage = 'Server error: Unable to process your request. Please try again later.';
        } else if (error.response.data?.message) {
          errorMessage = error.response.data.message;
        }
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteLanguage = async (code) => {
    const token = localStorage.getItem('authToken');
    if (!window.confirm(`Are you sure you want to delete "${code}" language?`)) return;

    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.delete(`${API_BASE_URL}/del-one-translation`, {
        data: { code },
        headers: {
          'Content-Type': 'application/json',
          'access-token': token
        }
      });
      
      if (response.data.success) {
        setSuccessMessage(`Language "${code}" deleted successfully!`);
        await fetchLanguages();
      } else {
        throw new Error(response.data.message || 'Failed to delete language');
      }
    } catch (error) {
      console.error('Error deleting language:', error);
      setError(error.response?.data?.message || 'Failed to delete language. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (code) => {
    setEditingLanguage({ code, newCode: code, updatedJson: {} });
    setIsEditModalOpen(true);
  };

  const handleEditLanguage = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    
    try {
      setLoading(true);
      setError(null);

      if (editingLanguage.newCode.trim().length < 2) {
        throw new Error('Language code must be at least 2 characters');
      }

      const response = await axios.put(
        `${API_BASE_URL}/update-one-translation`,
        {
          code: editingLanguage.code,
          newcode: editingLanguage.newCode.trim().toLowerCase(),
          updatedJson: editingLanguage.updatedJson
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'access-token': token
          }
        }
      );

      if (response.data.success) {
        setSuccessMessage(`Language "${editingLanguage.code}" updated successfully!`);
        setIsEditModalOpen(false);
        setEditingLanguage({ code: '', newCode: '', updatedJson: {} });
        await fetchLanguages();
      } else {
        throw new Error(response.data.message || 'Failed to update language');
      }
    } catch (error) {
      console.error('Error updating language:', error);
      setError(error.response?.data?.message || 'Failed to update language. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLanguages();
  }, []);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  if (loading && languages.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="p-6">
        <div className="flex flex-col items-center justify-between mb-8">
          <div className="flex justify-start items-center w-full">
            <img
              src="https://sonivo.oneoftheprojects.com/assets/page.svg"
              alt="Page Logo"
              className="h-24 w-24"
            />
          </div>
          <div className="w-full justify-between items-center flex mt-6">
            <div className="space-y-2 flex flex-col">
              <h1 className="text-2xl font-medium text-gray-900">Manage Translations</h1>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>Dashboard</span>
                <span>•</span>
                <span>Manage Translations</span>
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-sm bg-primary-400 text-white mt-4 py-2 px-4 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors flex items-center justify-center gap-2"
              disabled={loading}
            >
              <IoMdPhonePortrait size={20} />
              {loading ? 'Loading...' : 'Add New Language'}
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

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex justify-center items-center gap-3">
            <MonitorIcon className="w-6 h-6 text-gray-500" />
            <h2 className="text-lg font-medium text-gray-900">Available Languages</h2>
          </div>

          {languages.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No languages available. Add your first language!
            </div>
          ) : (
            languages.map((language, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border-b last:border-b-0 hover:bg-gray-50"
              >
                <span className="text-gray-700 font-medium">{language}</span>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => handleEditClick(language)}
                    className="text-gray-600 hover:text-gray-900 p-1 rounded-md hover:bg-gray-100 transition-colors"
                    title="Edit language"
                    disabled={loading}
                  >
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteLanguage(language)}
                    className="text-red-600 hover:text-red-700 p-1 rounded-md hover:bg-red-50 transition-colors"
                    title="Delete language"
                    disabled={loading}
                  >
                    <Trash2Icon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[6000] p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Add New Language</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-md"
                disabled={loading}
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddLanguage} className="space-y-4">
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                  Language Code (Minimum 2 characters)
                </label>
                <input
                  id="language"
                  type="text"
                  value={newLanguage}
                  onChange={(e) => setNewLanguage(e.target.value)}
                  placeholder="Enter language code (e.g., 'es', 'fr', 'de')"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  disabled={loading}
                  minLength={2}
                  title="Minimum 2 characters"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Use at least 2 characters for language codes (e.g., "es" for Spanish, "fr" for French)
                </p>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary-400 text-white rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading || !newLanguage.trim()}
                >
                  {loading ? 'Adding...' : 'Add Language'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[6000] p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Edit Language</h3>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-md"
                disabled={loading}
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleEditLanguage} className="space-y-4">
              <div>
                <label htmlFor="newCode" className="block text-sm font-medium text-gray-700 mb-1">
                  Language Code (Minimum 2 characters)
                </label>
                <input
                  id="newCode"
                  type="text"
                  value={editingLanguage.newCode}
                  onChange={(e) => setEditingLanguage(prev => ({ ...prev, newCode: e.target.value }))}
                  placeholder="Enter language code (e.g., 'es', 'fr', 'de')"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  disabled={loading}
                  minLength={2}
                  title="Minimum 2 characters"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Use at least 2 characters for language codes (e.g., "es" for Spanish, "fr" for French)
                </p>
              </div>
              <div>
                <label htmlFor="updatedJson" className="block text-sm font-medium text-gray-700 mb-1">
                  Translation JSON (Optional)
                </label>
                <textarea
                  id="updatedJson"
                  value={JSON.stringify(editingLanguage.updatedJson, null, 2)}
                  onChange={(e) => {
                    try {
                      const parsed = JSON.parse(e.target.value);
                      setEditingLanguage(prev => ({ ...prev, updatedJson: parsed }));
                      setError(null);
                    } catch (err) {
                      setError('Invalid JSON format');
                    }
                  }}
                  placeholder="Enter translation JSON (optional)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary font-mono"
                  rows={10}
                  disabled={loading}
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary-400 text-white rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading || !editingLanguage.newCode.trim()}
                >
                  {loading ? 'Updating...' : 'Update Language'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Translation;