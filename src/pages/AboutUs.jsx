import React from 'react';
import Cards from '../components/Cards';

const AboutUs = () => {
  const team = [
    { name: "Davide", img: "img/Modde.jpeg" },
    { name: "Francesco", img: "img/Fra-auto.jpg" },
    { name: "Antonio P.", img: "img/Anto-auto.jpg" },
    { name: "Anto C.", img: "img/Cocco-porcu.jpeg" },
    { name: "Anto A.", img: "img/Atz.jpeg" },
    { name: "Salvatore", img: "img/team3.jpeg" },
    { name: "Giovanni P.", img: "img/Pirosu.jpeg" },
    { name: "Matteo", img: "img/Porcu.jpeg" },
    { name: "Giovanni D.", img: "img/fotos.jpeg" },
  ];

  return (
    <main className="min-h-screen text-white lg:pt-24 pb-20 relative overflow-x-hidden">

      {/* Titolo + Storia */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">

        {/* FUMO */}
        <div className="absolute -left-32 top-32 w-150 h-150 z-0 pointer-events-none opacity-50">
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

        <h1 className="text-5xl md:text-7xl font-semibold uppercase leading-none mb-20 text-left relative z-10">
          Oltre il <span className="text-main">Motore</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative border-2 border-main p-2 transform -rotate-2 shadow-[0_0_15px_var(--shadow-main)]">
            <img src="img/IMG_3373.jpg" alt="Storia" loading="lazy" className="w-full h-100 object-cover lg:grayscale lg:hover:grayscale-0 transition duration-700"/>
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
              <span className="text-main">Da quelle conversazioni infinite sui motori è nato <span className="font-bold">Borörgring</span></span>
              , un luogo pensato per far incontrare altri appassionati, organizzare raduni e condividere la stessa passione per il mondo dell'automobile.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: MARQUEE */}
      <section className="relative z-20 my-20 w-full overflow-hidden">
        <div className="py-4 bg-main whitespace-nowrap border-y-4 border-black skew-y-1">
          <div className="flex animate-marquee font-black uppercase italic text-black text-lg lg:text-2xl">
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
              <div className="w-full aspect-square overflow-hidden">
                <img src={member.img} alt={member.name} loading="lazy" className="w-full h-full object-cover lg:grayscale lg:hover:grayscale-0 transition-all duration-500 lg:hover:scale-110"/>
              </div>
            </Cards>
          ))}
        </div>
      </section>

    </main>
  );
};

export default AboutUs;