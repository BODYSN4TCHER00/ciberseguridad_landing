// Este componente solo marca las medidas del contenedor del landing page, 
// que lleva a las diferentes pantallas

import React from 'react';

const MirrorComponent = ({ title, imageUrl, link }) => (
  <a href={link} className="group">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 group-hover:scale-105">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">Saber más sobre {title.toLowerCase()}</p>
      </div>
    </div>
  </a>
);

export default MirrorComponent;
