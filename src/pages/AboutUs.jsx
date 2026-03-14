import React from 'react';
import Cards from '../components/Cards';

const AboutUs = () => {
  const team = [
    { name: "Davide", role: "Fondatore & 'devo fare roba alla macchina'", img: "img/Modde.jpeg" },
    { name: "Francesco", role: "Fondatore & 'devo fare roba'", img: "img/Fra-auto.jpg" },
    { name: "Antonio P.", role: "Fondatore & 'una birretta me la bevo'", img: "img/Anto-auto.jpg" },
    { name: "Anto C.", role: "Fondatore", img: "img/Cocco-porcu.jpeg" },
    { name: "Anto A.", role: "Fondatore & Fotografo", img: "img/Atz.jpeg" },
    { name: "Salvatore", role: "Fondatore", img: "img/team3.jpeg" },
    { name: "Giovanni P.", role: "Fondatore & 'non farmi girare i coglioni'", img: "img/Pirosu.jpeg" },
    { name: "Matteo", role: "Fondatore", img: "img/Porcu.jpeg" },
    { name: "Giovanni D.", role: "Fondatore & CEO dell'inquinamento", img: "img/fotos.jpeg" },
  ];

  return (
    <main className="min-h-screen text-white pt-24 pb-20 relative overflow-x-hidden">
      
      {/* SFONDO FUMO GLOBALE: Fisso per non interrompersi tra le sezioni */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <filter id="dense-smoke2">
              <feTurbulence type="fractalNoise" baseFrequency="0.005 0.01" numOctaves="6" seed="5" />
              <feDisplacementMap in="SourceGraphic" scale="200" />
            </filter>
            <radialGradient id="smoke-gradient-dense">
              <stop offset="0%" stopColor="#49F2F2" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#49F2F2" stopOpacity="0.1" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle cx="50%" cy="50%" r="60%" fill="url(#smoke-gradient-dense)" filter="url(#dense-smoke2)" />
        </svg>
      </div>

      {/* SECTION 1: Titolo + Storia */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <h1 className="text-5xl md:text-7xl font-semibold uppercase leading-none mb-20 text-center md:text-left">
          Oltre il <span className="text-main">Motore</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative border-2 border-main p-2 transform -rotate-2 shadow-[0_0_15px_var(--shadow-main)]">
              <img src="img/IMG_3373.jpg" alt="Storia" className="w-full h-100 object-cover grayscale hover:grayscale-0 transition duration-700" />
              <div className="absolute -bottom-6 -right-6 bg-main text-black p-4 font-black uppercase italic text-xl shadow-[5px_5px_0px_white]">
                Da ieri
              </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase italic border-b-2 border-main w-fit pb-2">La Nostra Genesi</h2>
            <p className="text-zinc-300 leading-relaxed">
              Siamo un gruppo di amici con una passione che ci accompagna da sempre: le auto.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              <span className='text-main'>Da quelle conversazioni infinite sui motori è nato <span className='font-bold'>Borörgring</span></span>
              , un luogo pensato per far incontrare altri appassionati, organizzare raduni e condividere la stessa passione per il mondo dell’automobile.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: MARQUEE (Striscia continua, w-full per uscire dai margini) */}
      <section className="relative z-20 my-20 w-full">
        <div className="py-4 bg-main overflow-hidden whitespace-nowrap border-y-4 border-black rotate-1 md:-rotate-1 scale-105">
          <div className="flex animate-marquee font-black uppercase italic text-black text-2xl">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8">Potenza • Rispetto • Passione •</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: TEAM */}
      <section className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-black uppercase italic mb-12">Gli <span className="text-main">Admin</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <Cards 
              key={idx} 
              title={member.name} 
              subtitle={member.role} 
              link={`/team/${member.name.toLowerCase()}`} 
            >
              <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110" />
            </Cards>
          ))}
        </div>
      </section>
      
    </main>
  );
};

export default AboutUs;