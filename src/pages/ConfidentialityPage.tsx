import React, { useState } from 'react';
import { LockIcon, ScaleIcon } from 'lucide-react';
import colors from '../assets/theme/theme';

interface Topic {
  id: number;
  title: string;
  description: string;
  category: 'ley' | 'criptografia';
}

// Lista de conceptos, con su definicion
const topics: Topic[] = [
  { id: 1, title: "Ley General de Protección de Datos Personales de México", description: "Ley que regula el tratamiento legítimo, controlado e informado de los datos personales en México.", category: 'ley' },
  { id: 2, title: "Ley de Propiedad Industrial", description: "Protege la propiedad industrial mediante patentes de invención, registros de modelos de utilidad, diseños industriales, marcas, y avisos comerciales.", category: 'ley' },
  { id: 3, title: "Ley Federal de Derechos de Autor", description: "Protege y promueve el derecho de autor y los derechos conexos en México.", category: 'ley' },
  { id: 4, title: "Ley Federal de Datos Personales en Posesión de Particulares", description: "Regula el tratamiento de datos personales en posesión de particulares.", category: 'ley' },
  { id: 5, title: "Criptografía Simétrica", description: "Utiliza la misma clave para cifrar y descifrar la información.", category: 'criptografia' },
  { id: 6, title: "Criptografía Asimétrica", description: "Utiliza un par de claves: una pública para cifrar y una privada para descifrar.", category: 'criptografia' },
];

const TopicCard: React.FC<{ topic: Topic }> = ({ topic }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getIcon = () => {
    switch (topic.category) {
      case 'ley':
        return <ScaleIcon className="w-6 h-6 text-blue-500" />;
      case 'criptografia':
        return <LockIcon className="w-6 h-6 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className={`bg-${colors.background} rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${isExpanded ? 'row-span-2' : ''}`}>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {getIcon()}
          <h3 className={`text-xl font-semibold text-${colors.textLight} ml-2`}>{topic.title}</h3>
        </div>
        <p className={`text-${colors.textDark} ${isExpanded ? '' : 'line-clamp-2'}`}>{topic.description}</p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`mt-4 text-${colors.accent} hover:text-${colors.accentHover} transition-colors duration-200`}
        >
          {isExpanded ? 'Leer menos' : 'Leer más'}
        </button>
      </div>
    </div>
  );
};

const CategoryFilter: React.FC<{ categories: string[], activeCategory: string, setActiveCategory: (category: string) => void }> = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-full ${activeCategory === category ? `bg-${colors.primary} text-${colors.textLight}` : `bg-${colors.secondary} text-${colors.textDark}`} shadow-md transition-colors duration-200`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

// Categoria para los Filtros 
export default function ConfidentialityPage() {
  const [activeCategory, setActiveCategory] = useState('todo');

  const categories = ['todo', 'ley', 'criptografia'];
  const filteredTopics = activeCategory === 'todo' 
    ? topics 
    : topics.filter(topic => topic.category === activeCategory);

  return (
    <div className={`min-h-screen py-12 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100`} style={{ backgroundColor: colors.background }}>
      <div className="container mx-auto px-4">
        <h1 className={`text-4xl font-bold text-center mb-8 text-${colors.textLight}`}>Confidencialidad de la Información</h1>
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-min">
          {filteredTopics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </div>
  );
}
