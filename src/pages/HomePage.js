import React from 'react';
import PresentationSection from '../components/common/Presentation.tsx';
import MirrorComponent from '../components/common/MirrorComponent.tsx';
import colors from '../assets/theme/theme.js'; 

const HomePage = () => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: colors.background }} // Uso de theme
    >
      {/* Presentation Section */}
      <PresentationSection />

      {/* Mirror Components */}
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Ataques Cibernéticos",
            imageUrl: "https://c1.wallpaperflare.com/preview/185/698/502/matrix-communication-software-pc.jpg",
            link: "/ciberseguridad/ataque",
          },
          {
            title: "Confidencialidad de la Información",
            imageUrl: "https://c1.wallpaperflare.com/preview/857/391/665/hacking-hacker-computer-internet.jpg",
            link: "/ciberseguridad/confidencialidad",
          },
          {
            title: "Principios de la Ciberseguridad",
            imageUrl: "https://c1.wallpaperflare.com/preview/182/936/1023/hacker-silhouette-hack-anonymous.jpg",
            link: "/ciberseguridad/principios",
          },
        ].map((item, index) => (
          <MirrorComponent
            key={index}
            title={item.title}
            imageUrl={item.imageUrl}
            link={item.link}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200" 
            style={{ border: `2px solid ${colors.border}` }} 
          />
        ))}
      </section>
    </div>
  );
};

export default HomePage;
