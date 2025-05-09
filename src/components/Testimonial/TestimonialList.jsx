import React, { useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialList = ({ testimonials }) => {

  return (
    <div
      className="overflow-x-auto py-4 cursor-pointer w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3  gap-6"
    >
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default TestimonialList;