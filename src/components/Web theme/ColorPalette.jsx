import React, { useState } from 'react';
import ColorPickerModal from './ColorPickerModal';

const ColorBox = ({ label, color, onColorClick }) => (
  <div className="p-4 bg-gray-50 rounded-lg">
    <p className="text-sm text-gray-600 mb-2">{label}</p>
    <div 
      className="w-12 h-12 rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all"
      style={{ backgroundColor: color }}
      onClick={() => onColorClick(color)}
    />
  </div>
);

const ColorSection = ({ title, colors, onColorChange }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeColorKey, setActiveColorKey] = useState(null);

  const handleColorClick = (color, colorKey) => {
    setSelectedColor(color);
    setActiveColorKey(colorKey);
    setIsModalOpen(true);
  };

  const handleColorSelect = (newColor) => {
    if (activeColorKey) {
      onColorChange(title, activeColorKey, newColor);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.entries(colors).map(([label, color]) => (
          <ColorBox 
            key={label} 
            label={label} 
            color={color}
            onColorClick={(color) => handleColorClick(color, label)}
          />
        ))}
      </div>
      <ColorPickerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onColorSelect={handleColorSelect}
        initialColor={selectedColor}
      />
    </div>
  );
};

const ColorPalette = () => {
  const [colorScheme, setColorScheme] = useState({
    Primary: {
      Main: '#1a2b3c',
      Light: '#b3c5d9',
      Dark: '#0d1520',
    },
    Secondary: {
      Main: '#2d5a68',
      Light: '#d9e6ea',
      Dark: '#1a3840',
    },
    Success: {
      Main: '#2e7d32',
      Light: '#4caf50',
      Dark: '#1b5e20',
    },
    Info: {
      Main: '#0288d1',
      Light: '#03a9f4',
      Dark: '#01579b',
    },
    Error: {
      Main: '#d32f2f',
      Light: '#ef5350',
      Dark: '#c62828',
    },
    Warning: {
      Main: '#ed6c02',
      Light: '#ff9800',
      Dark: '#e65100',
    },
  });

  const handleColorChange = (category, variant, newColor) => {
    setColorScheme(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [variant]: newColor
      }
    }));
  };

  return (
    <div className="p-6">
      {Object.entries(colorScheme).map(([category, colors]) => (
        <ColorSection 
          key={category} 
          title={category} 
          colors={colors}
          onColorChange={handleColorChange}
        />
      ))}
    </div>
  );
};

export default ColorPalette;