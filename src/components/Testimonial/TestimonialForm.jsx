
import React, { useState } from 'react';

const TestimonialForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    name: '',
    position: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: '', description: '', name: '', position: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-b-2xl p-6 gap-4 w-full flex flex-col">
      <div className="relative group">
        <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
          Title
        </div>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
          placeholder=""
          required
        />
      </div>
      <div className="relative group">
        <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
          Description
        </div>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
          rows="4"
          placeholder=""
          required
        ></textarea>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative group">
          <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
            Reviewer name
          </div>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
            placeholder=""
            required
          />
        </div>
        <div className="relative group">
          <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
            Reviewer position
          </div>
          <input
            type="text"
            value={formData.position}
            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
            className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
            placeholder=""
            required
          />
        </div>
      </div>
      <div className="flex justify-center w-full">
        <button
          type="submit"
          className="px-4 py-2 w-full text-sm bg-primary-400 text-white rounded-md hover:bg-primary"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TestimonialForm;