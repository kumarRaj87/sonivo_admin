import React, { useRef } from "react";
const AddButton = ({
  onFileSelect
}) => {
  const fileInputRef = useRef(null);
  const handleAddClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = e => {
    if (e.target.files.length > 0) {
      onFileSelect(e.target.files);
    }
  };
  return <div className="flex justify-end my-6">
      <button onClick={handleAddClick} className="text-sm bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2">
        Add
      </button>
      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" multiple />
    </div>;
};
export default AddButton;