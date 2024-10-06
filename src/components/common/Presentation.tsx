import React from 'react';

const PresentationSection = () => {
  return (
    <section className="container mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Aprende sobre Ciberseguridad</h1>
      <p className="text-xl text-gray-200 mb-8">
        Descubre los fundamentos de la seguridad de la información aquí.
      </p>
      <img
        src="https://c0.wallpaperflare.com/preview/1021/163/815/technology-networking-abstract-business.jpg"
        alt="Ciberseguridad"
        className="rounded-lg shadow-xl mx-auto w-full h-72 object-cover md:w-3/4"  // Responsivo y adaptable
      />
    </section>
  );
};

export default PresentationSection;
