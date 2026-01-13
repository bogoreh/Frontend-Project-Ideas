import React from 'react';

interface ColorPickerProps {
  label: string;
  color: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, color, onChange }) => {
  const presetColors = [
    '#000000', '#1E40AF', '#DC2626', '#059669', '#7C3AED', '#EA580C',
    '#0EA5E9', '#65A30D', '#DB2777', '#475569'
  ];

  return (
    <div className="space-y-3">
      <label className="block text-sm font-semibold text-gray-700">
        {label} Color
      </label>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="color"
            value={color}
            onChange={(e) => onChange(e.target.value)}
            className="w-12 h-12 cursor-pointer rounded-lg border-2 border-gray-200"
          />
          <div 
            className="absolute -inset-1 border-2 border-gray-300 rounded-lg pointer-events-none"
            style={{ backgroundColor: color }}
          ></div>
        </div>
        
        <div className="flex-1">
          <input
            type="text"
            value={color}
            onChange={(e) => onChange(e.target.value)}
            className="input-field font-mono text-sm"
            placeholder="#000000"
          />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 pt-2">
        {presetColors.map((presetColor) => (
          <button
            key={presetColor}
            type="button"
            onClick={() => onChange(presetColor)}
            className="w-8 h-8 rounded-full border-2 border-gray-300 hover:scale-110 transition-transform duration-200"
            style={{ backgroundColor: presetColor }}
            title={presetColor}
            aria-label={`Select ${presetColor}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;