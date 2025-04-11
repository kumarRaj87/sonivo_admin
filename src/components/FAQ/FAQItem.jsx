

// import React, { useState } from 'react';

// const FAQItem = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border rounded-lg shadow-sm">
//       <button
//         className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="font-medium text-gray-900">{question}</span>
//         <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
//           ▼
//         </span>
//       </button>
//       {isOpen && (
//         <div className="px-6 pb-4">
//           <p className="text-gray-600">{answer}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FAQItem;


import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Trash2 } from 'lucide-react';

const FAQItem = ({ id, question, answer, onDelete, isDeleting }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-6">
      <div className="flex items-center justify-between">
        <button
          className="flex-1 text-left flex items-center justify-between pr-4"
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
        <button
          onClick={() => onDelete(id)}
          disabled={isDeleting}
          className={`text-red-500 hover:text-red-700 transition-colors p-2 rounded-full hover:bg-red-50 ${
            isDeleting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
      {isOpen && (
        <div className="mt-4">
          <p className="text-base text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;