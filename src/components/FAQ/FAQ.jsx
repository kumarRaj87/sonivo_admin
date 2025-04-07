import React, { useState, useEffect } from 'react';
import FAQItem from './FAQItem';
import FAQSkeleton from './FAQSkeleton';
import { HelpCircle } from 'lucide-react';
import { IoMdPhonePortrait } from "react-icons/io";

const FAQ = () => {
  const [loading, setLoading] = useState(true);
  const [faqItems, setFaqItems] = useState([
    {
      id: 1,
      question: "What features does Sonivo offer for call center management?",
      answer: "Sonivo includes a range of powerful features, including SIP integration, a call dialer, an AI-powered call assistant, a drag-and-drop call flow builder, and real-time analytics to help you manage and optimize your call center operations."
    },
    {
      id: 2,
      question: "How does the AI call assistant work?",
      answer: "The AI call assistant uses natural language processing to understand and respond to customer inquiries in real time. It handles routine questions, freeing up agents for complex interactions and improving response times."
    },
    {
      id: 3,
      question: "Can I customize call flows for different scenarios?",
      answer: "Yes! Sonivo's call flow builder allows you to create and customize call paths based on specific needs. It's designed as a drag-and-drop tool, making it easy to build, test, and adjust call flows for optimal customer journeys."
    },
    {
      id: 4,
      question: "Is Sonivo compatible with my current SIP provider?",
      answer: "Sonivo is designed to integrate seamlessly with most SIP providers, making it easy to connect with your existing telephony infrastructure. Our support team can assist with setup to ensure a smooth integration."
    },
    {
      id: 5,
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a 7-day free trial with access to all premium features. This allows you to explore the full functionality of Sonivo before committing to a plan."
    },
    {
      id: 6,
      question: "How secure is my data on Sonivo?",
      answer: "We prioritize security and implement robust measures to protect your data. Sonivo uses encryption for data in transit and at rest, and we adhere to industry standards to ensure your information remains secure."
    }
  ]);

  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleDelete = (id) => {
    setFaqItems(faqItems.filter(item => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim() && newAnswer.trim()) {
      setFaqItems([
        ...faqItems,
        {
          id: Date.now(),
          question: newQuestion,
          answer: newAnswer
        }
      ]);
      setNewQuestion('');
      setNewAnswer('');
    }
  };

  if (loading) {
    return (
      <div className="">
        <div className="flex items-center space-x-2 mb-8">
          <HelpCircle className="h-8 w-8 text-blue-500" />
          <h2 className="text-3xl font-bold text-gray-900">FAQ</h2>
        </div>
        <FAQSkeleton />
      </div>
    );
  }

  return (
    <div className="pt-4">
     


        
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
            <h1 className="text-2xl font-medium text-primary"> FAQ</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span>FAQ</span>
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
     
      <div className="mb-12 pt-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="Enter your question"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <textarea
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              placeholder="Enter the answer"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Add FAQ Item
          </button>
        </form>
      </div>

      <div className="space-y-6">
        {faqItems.map((item) => (
          <FAQItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;