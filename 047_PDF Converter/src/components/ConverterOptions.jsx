import React from 'react';

const ConverterOptions = ({ conversionType, setConversionType }) => {
  const options = [
    { value: 'pdf-to-word', label: 'PDF to Word', icon: '📝' },
    { value: 'pdf-to-excel', label: 'PDF to Excel', icon: '📊' },
    { value: 'pdf-to-ppt', label: 'PDF to PowerPoint', icon: '📽️' },
    { value: 'pdf-to-image', label: 'PDF to Images', icon: '🖼️' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-700">Conversion Options</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => setConversionType(option.value)}
            className={`p-4 rounded-lg border-2 transition-all
              ${conversionType === option.value
                ? 'border-primary-600 bg-primary-50 text-primary-700'
                : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
              }`}
          >
            <span className="text-2xl block mb-2">{option.icon}</span>
            <span className="text-sm font-medium">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ConverterOptions;