import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FAQItem from './FAQItem';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../loader/Loader';

const FAQ = () => {
  const [loading, setLoading] = useState(true);
  const [faqItems, setFaqItems] = useState([]);
  const [error, setError] = useState(null);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [addingFaq, setAddingFaq] = useState(false);
  const [sortOrder, setSortOrder] = useState('newest');
  const [deletingId, setDeletingId] = useState(null);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const fetchFAQs = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get(`${BASE_URL}/admin/get_faq`, {
        headers: {
          'access-token': token
        }
      });

      if (response.data.success) {
        const sortedItems = sortFAQs(response.data.data);
        setFaqItems(sortedItems);
      } else {
        setError('Failed to fetch FAQ items');
        toast.error('Failed to fetch FAQ items');
      }
    } catch (err) {
      setError(err.message || 'Error connecting to the server');
      toast.error(err.message || 'Error connecting to the server');
      console.error('Error fetching FAQs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setDeletingId(id);
      const token = localStorage.getItem('authToken');
      const response = await axios.delete(`${BASE_URL}/admin/delete_faq/${id}`, {
        headers: {
          'access-token': token
        }
      });

      if (response.data.success) {
        toast.success('FAQ deleted successfully');
        await fetchFAQs();
      } else {
        toast.error('Failed to delete FAQ');
      }
    } catch (err) {
      toast.error(err.message || 'Error deleting FAQ');
      console.error('Error deleting FAQ:', err);
    } finally {
      setDeletingId(null);
    }
  };

  const sortFAQs = (items) => {
    return [...items].sort((a, b) => {
      return sortOrder === 'newest' ? b.id - a.id : a.id - b.id;
    });
  };

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === 'newest' ? 'oldest' : 'newest';
    setSortOrder(newSortOrder);
    setFaqItems(sortFAQs(faqItems));
    toast.info(`Sorted by ${newSortOrder} first`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newQuestion.trim() || !newAnswer.trim()) {
      toast.warning('Please fill both question and answer fields');
      return;
    }

    setAddingFaq(true);
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.post(
        'https://vokal-api.oyelabs.com/admin/add_faq',
        {
          question: newQuestion,
          answer: newAnswer
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'access-token': token
          }
        }
      );

      if (response.data.success) {
        toast.success('FAQ added successfully!');
        await fetchFAQs();
        setNewQuestion('');
        setNewAnswer('');
      } else {
        setError('Failed to add FAQ item');
        toast.error('Failed to add FAQ item');
      }
    } catch (err) {
      setError(err.message || 'Error adding FAQ item');
      toast.error(err.message || 'Error adding FAQ item');
      console.error('Error adding FAQ:', err);
    } finally {
      setAddingFaq(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchFAQs()
      setLoading(false)
    }
      , 300);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="pt-4">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

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
            <h1 className="text-2xl font-medium text-primary">FAQ</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span>FAQ</span>
            </div>
          </div>
          <button
            onClick={toggleSortOrder}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium transition-colors"
          >
            Sort: {sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
          </button>
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-center py-4 mb-4">
          {error}
        </div>
      )}
     
      <div className="mb-12 pt-5">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="Enter your question"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              disabled={addingFaq}
            />
          </div>
          <div>
            <textarea
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              placeholder="Enter the answer"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 h-24"
              disabled={addingFaq}
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-primary-400 text-white py-2 px-4 rounded-md hover:bg-primary-500 transition-colors ${addingFaq ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            disabled={addingFaq}
          >
            {addingFaq ? 'Adding FAQ Item...' : 'Add FAQ Item'}
          </button>
        </form>
      </div>

      <div className="space-y-6">
        {faqItems.map((item) => (
          <FAQItem
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            onDelete={handleDelete}
            isDeleting={deletingId === item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;