import React, { useState } from 'react';
import { ShieldIcon, LockIcon, ZapIcon, UserCheckIcon, FileCheckIcon, KeyIcon } from 'lucide-react';
import colors from '../assets/theme/theme'; 

// Modelo de datos para conformar la lista de Principios 
interface Principle {
  id: number;
  title: string;
  description: string;
  category: 'accessibility' | 'confidentiality' | 'availability' | 'authentication' | 'integrity' | 'access_control';
}

// Lista de conceptos, con su definicion
const principles: Principle[] = [
  { id: 1, title: "Accesibilidad", description: "Garantiza que la información esté disponible para las personas autorizadas cuando la necesiten. Implica asegurar que los sistemas y datos sean accesibles de manera oportuna y eficiente.", category: 'accessibility' },
  { id: 2, title: "Confidencialidad", description: "Asegura que la información sea accesible sólo para aquellos autorizados a tener acceso. Protege contra la divulgación no autorizada de datos sensibles.", category: 'confidentiality' },
  { id: 3, title: "Disponibilidad", description: "Garantiza que los sistemas y datos estén disponibles cuando se necesiten. Implica mantener el hardware y software operativos, y proporcionar ancho de banda de red suficiente.", category: 'availability' },
  { id: 4, title: "Autenticación", description: "Verifica la identidad de los usuarios antes de permitirles el acceso a sistemas o información. Utiliza métodos como contraseñas, tokens o datos biométricos.", category: 'authentication' },
  { id: 5, title: "Integridad", description: "Asegura que la información y los sistemas no sean modificados de manera no autorizada. Garantiza la precisión y consistencia de los datos durante todo su ciclo de vida.", category: 'integrity' },
  { id: 6, title: "Control de acceso", description: "Regula quién o qué puede ver o usar recursos en un entorno informático. Implica la implementación de políticas y mecanismos para restringir el acceso a sistemas y datos.", category: 'access_control' },
];

const PrincipleCard: React.FC<{ principle: Principle }> = ({ principle }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getIcon = () => {
    switch (principle.category) {
      case 'accessibility':
        return <ShieldIcon className="w-6 h-6 text-blue-500" />;
      case 'confidentiality':
        return <LockIcon className="w-6 h-6 text-red-500" />;
      case 'availability':
        return <ZapIcon className="w-6 h-6 text-yellow-500" />;
      case 'authentication':
        return <UserCheckIcon className="w-6 h-6 text-green-500" />;
      case 'integrity':
        return <FileCheckIcon className="w-6 h-6 text-purple-500" />;
      case 'access_control':
        return <KeyIcon className="w-6 h-6 text-orange-500" />;
      default:
        return <ShieldIcon className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <div className={`bg-${colors.background} rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${isExpanded ? 'row-span-2' : ''}`}>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {getIcon()}
          <h3 className={`text-xl font-semibold text-${colors.textLight} ml-2`}>{principle.title}</h3>
        </div>
        <p className={`text-${colors.textDark} ${isExpanded ? '' : 'line-clamp-2'}`}>{principle.description}</p>
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

export default function PrinciplesPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'accessibility' | 'confidentiality' | 'availability' | 'authentication' | 'integrity' | 'access_control'>('all');

  const filteredPrinciples = principles.filter(principle => 
    activeCategory === 'all' || principle.category === activeCategory
  );

  return (
    <div className={`min-h-screen py-12 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100`} style={{ backgroundColor: colors.background }}>
      <div className="container mx-auto px-4">
        <h1 className={`text-4xl font-bold text-center mb-8 text-${colors.textLight}`}>Principios de Seguridad de la Información</h1>
        <div className="flex flex-wrap justify-center mb-8 space-x-2 space-y-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full ${activeCategory === 'all' ? `bg-${colors.primary} text-${colors.textLight}` : `bg-${colors.secondary} text-${colors.textDark}`} shadow-md transition-colors duration-200`}
          >
            Todos
          </button>
          <button
            onClick={() => setActiveCategory('accessibility')}
            className={`px-4 py-2 rounded-full ${activeCategory === 'accessibility' ? `bg-${colors.primary} text-${colors.textLight}` : `bg-${colors.secondary} text-${colors.textDark}`} shadow-md transition-colors duration-200`}
          >
            Accesibilidad
          </button>
          <button
            onClick={() => setActiveCategory('confidentiality')}
            className={`px-4 py-2 rounded-full ${activeCategory === 'confidentiality' ? `bg-${colors.primary} text-${colors.textLight}` : `bg-${colors.secondary} text-${colors.textDark}`} shadow-md transition-colors duration-200`}
          >
            Confidencialidad
          </button>
          <button
            onClick={() => setActiveCategory('availability')}
            className={`px-4 py-2 rounded-full ${activeCategory === 'availability' ? `bg-${colors.primary} text-${colors.textLight}` : `bg-${colors.secondary} text-${colors.textDark}`} shadow-md transition-colors duration-200`}
          >
            Disponibilidad
          </button>
          <button
            onClick={() => setActiveCategory('authentication')}
            className={`px-4 py-2 rounded-full ${activeCategory === 'authentication' ? `bg-${colors.primary} text-${colors.textLight}` : `bg-${colors.secondary} text-${colors.textDark}`} shadow-md transition-colors duration-200`}
          >
            Autenticación
          </button>
          <button
            onClick={() => setActiveCategory('integrity')}
            className={`px-4 py-2 rounded-full ${activeCategory === 'integrity' ? `bg-${colors.primary} text-${colors.textLight}` : `bg-${colors.secondary} text-${colors.textDark}`} shadow-md transition-colors duration-200`}
          >
            Integridad
          </button>
          <button
            onClick={() => setActiveCategory('access_control')}
            className={`px-4 py-2 rounded-full ${activeCategory === 'access_control' ? `bg-${colors.primary} text-${colors.textLight}` : `bg-${colors.secondary} text-${colors.textDark}`} shadow-md transition-colors duration-200`}
          >
            Control de Acceso
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-min">
          {filteredPrinciples.map((principle) => (
            <PrincipleCard key={principle.id} principle={principle} />
          ))}
        </div>
      </div>
    </div>
  );
}
