import React, { useState, useMemo } from 'react';
import { ChevronDownIcon, ChevronUpIcon, ShieldIcon, LockIcon, ZapIcon, UserCheckIcon, FileCheckIcon, KeyIcon } from 'lucide-react';
import colors from '../assets/theme/theme'; // Asegúrate de que la ruta sea correcta

interface Concept {
  id: number;
  title: string;
  description: string;
  category: string;
}
//  Lista de conceptos
const concepts: Concept[] = [
  { id: 1, title: "DDoS", description: "Denegación de Servicio Distribuida. Un ataque en el que múltiples sistemas comprometidos inundan un objetivo, causando la denegación de servicio para los usuarios del sistema atacado.", category: "Tipo de Ataque" },
  { id: 2, title: "Ordenador Zombie", description: "Un ordenador que ha sido infectado por malware y puede ser controlado de forma remota, a menudo como parte de una red de bots (botnet).", category: "Malware" },
  { id: 3, title: "Ciberdelincuente", description: "Individuo que comete delitos a través de la tecnología o la internet, como robos de datos o fraudes en línea.", category: "Tipo de Ataque" },
  { id: 4, title: "Botmaster", description: "Persona que controla una red de bots (botnet) que puede ser utilizada para realizar actividades maliciosas como ataques DDoS o envío de spam.", category: "Malware" },
  { id: 5, title: "Botnet", description: "Una red de ordenadores infectados (bots) que son controlados remotamente por un atacante, a menudo usados en ataques DDoS o para distribuir malware.", category: "Malware" },
  { id: 6, title: "Ransomware", description: "Malware que bloquea o cifra los archivos de un usuario y exige un rescate a cambio de restablecer el acceso.", category: "Malware" },
  { id: 7, title: "Disclaimer", description: "Un descargo de responsabilidad legal, a menudo incluido en correos electrónicos o sitios web, que protege contra ciertas responsabilidades.", category: "Otros" },
  { id: 8, title: "The Morris Worm", description: "Uno de los primeros gusanos informáticos distribuidos a través de Internet en 1988, causando daños significativos y generando mayor conciencia sobre la seguridad informática.", category: "Histórico" },
  { id: 9, title: "Ciberwarfare", description: "Conflictos entre naciones que se llevan a cabo a través de medios cibernéticos, con el objetivo de causar daños o interferir en infraestructuras críticas.", category: "Tipo de Ataque" },
  { id: 10, title: "Stuxnet", description: "Un gusano informático sofisticado descubierto en 2010, diseñado para atacar sistemas de control industrial, como los usados en plantas de energía nuclear.", category: "Histórico" },
  { id: 11, title: "Moonlight Maze", description: "Un ataque cibernético prolongado a fines de la década de 1990, dirigido contra agencias gubernamentales de los Estados Unidos, robando datos clasificados.", category: "Histórico" },
  { id: 12, title: "Operation Aurora", description: "Un ataque cibernético dirigido a grandes empresas tecnológicas en 2009, aparentemente patrocinado por un estado, que comprometió la seguridad de datos sensibles.", category: "Histórico" },
  { id: 13, title: "Freeze it into submission", description: "Técnica para incapacitar sistemas mediante la congelación de sus recursos hasta que dejen de funcionar adecuadamente.", category: "Técnicas" },
  { id: 14, title: "WannaCry", description: "Un ataque global de ransomware en 2017 que afectó a cientos de miles de computadoras, cifrando archivos y exigiendo rescates en Bitcoin.", category: "Malware" },
  { id: 15, title: "Petya", description: "Un ransomware que infecta el registro de arranque maestro (MBR) de las computadoras, impidiendo el acceso al sistema y cifrando archivos.", category: "Malware" },
  { id: 16, title: "Equifax (ataque)", description: "Un ciberataque de 2017 que comprometió los datos personales de más de 147 millones de personas de la empresa de crédito Equifax.", category: "Ataque" },
  { id: 17, title: "Cam4 (ataque)", description: "Un incidente en el que millones de registros sensibles de usuarios de Cam4 fueron expuestos en línea en 2020 debido a una base de datos mal configurada.", category: "Ataque" }
];

// Categorias del Filtro 
const ConceptCard: React.FC<{ concept: Concept }> = ({ concept }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getIcon = () => {
    switch (concept.category) {
      case 'Tipo de Ataque':
        return <ZapIcon className="w-6 h-6 text-blue-500" />;
      case 'Malware':
        return <LockIcon className="w-6 h-6 text-red-500" />;
      case 'Actor de Amenaza':
        return <UserCheckIcon className="w-6 h-6 text-green-500" />;
      case 'Técnica de Ataque':
        return <KeyIcon className="w-6 h-6 text-yellow-500" />;
      case 'Ataque Histórico':
        return <ShieldIcon className="w-6 h-6 text-purple-500" />;
      default:
        return <ShieldIcon className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <div className={`bg-${colors.background} rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${isExpanded ? 'row-span-2' : ''}`}>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {getIcon()}
          <h3 className={`text-xl font-semibold text-${colors.textLight} ml-2`}>{concept.title}</h3>
        </div>
        <p className={`text-${colors.textDark} ${isExpanded ? '' : 'line-clamp-2'}`}>{concept.description}</p>
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
          className={`px-4 py-2 rounded-full ${activeCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} shadow-md transition-colors duration-200`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default function CybersecurityConceptsDisplay() {
  const [activeCategory, setActiveCategory] = useState('Todo');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = useMemo(() => ['Todo', ...new Set(concepts.map((concept) => concept.category))], []);

  const filteredConcepts = useMemo(() => {
    return concepts.filter((concept) => 
      (activeCategory === 'Todo' || concept.category === activeCategory) &&
      (concept.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       concept.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [activeCategory, searchTerm]);

  return (
    <div
      className={`min-h-screen py-12 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100`}
      style={{ backgroundColor: colors.background }} // Implementacion del archivo theme
    >
      <div className="container mx-auto px-4">
        <h1 className={`text-4xl font-bold text-center mb-8 text-${colors.textLight}`}>Ataques Cibernéticos</h1>
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Buscar ..."
            className={`px-4 py-2 rounded-full w-full max-w-md border border-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-300`}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredConcepts.map((concept) => (
            <ConceptCard key={concept.id} concept={concept} />
          ))}
        </div>
      </div>
    </div>
  );
}
