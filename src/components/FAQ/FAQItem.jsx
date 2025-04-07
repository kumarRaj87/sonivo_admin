import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Trash2 } from 'lucide-react';

const FAQItem = ({ question, answer, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-6">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900 sm:text-xl">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-6 w-6 text-gray-500" />
          ) : (
            <ChevronDown className="h-6 w-6 text-gray-500" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 relative">
          <p className="text-base text-gray-700 pr-8">{answer}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="absolute right-0 top-0 text-red-500 hover:text-red-700 transition-colors"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQItem;