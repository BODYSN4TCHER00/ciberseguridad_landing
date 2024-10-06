import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

// Propiedades del contenido de las tarjetas
interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // Interacciones con el contenido de las cards 
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${isExpanded ? 'row-span-2' : ''}`}>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-xl font-semibold text-gray-800 ml-2">{title}</h3>
        </div>
        <p className={`text-gray-600 ${isExpanded ? '' : 'line-clamp-2'}`}>{description}</p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
        >
          {isExpanded ? (
            <>
              <ChevronUpIcon className="w-4 h-4 mr-1" />
              Leer menos
            </>
          ) : (
            <>
              <ChevronDownIcon className="w-4 h-4 mr-1" />
              Leer más
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;