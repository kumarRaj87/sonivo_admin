import React from 'react';
import { Trash2 } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md min-w-[300px] md:min-w-[400px] mx-4">
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">{testimonial.title}</h3>
        <p className="text-gray-600">{testimonial.description}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <p className="font-semibold">— {testimonial.name}</p>
            <p className="text-gray-500">{testimonial.position}</p>
          </div>
        </div>
        <button className="text-red-500 hover:text-red-700">
          <Trash2 size={20} />
          <span className="sr-only">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;