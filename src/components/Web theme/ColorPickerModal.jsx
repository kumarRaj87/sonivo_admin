import React from 'react';

const ColorPickerModal = ({ isOpen, onClose, onColorSelect, initialColor }) => {
  if (!isOpen) return null;

  const handleColorSelect = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // This is a simplified version - in a real app you'd want to properly convert x,y coordinates to HSL/RGB
    const color = `hsl(${(x / rect.width) * 360}, ${(y / rect.height) * 100}%, 50%)`;
    onColorSelect(color);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[5005]">
      <div className="bg-white rounded-lg shadow-xl w-80">
        <div className="relative">
          <div 
            className="w-full h-64 rounded-t-lg cursor-pointer"
            style={{
              background: 'linear-gradient(to bottom, #fff 0%, #000 100%), linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)',
              backgroundBlendMode: 'saturation'
            }}
            onClick={handleColorSelect}
          >
            <div 
              className="absolute w-6 h-6 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg"
              style={{ 
                left: '50%',
                top: '50%',
                backgroundColor: initialColor 
              }}
            />
          </div>
          <div 
            className="h-12 w-full"
            style={{
              background: 'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)'
            }}
            onClick={handleColorSelect}
          >
            <div 
              className="absolute w-6 h-6 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg"
              style={{ 
                left: '50%',
                bottom: '6px',
                backgroundColor: initialColor 
              }}
            />
          </div>
        </div>
        <div className="p-4">
          <button
            onClick={onClose}
            className="w-full py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorPickerModal;