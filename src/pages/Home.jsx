import React from 'react';
import Cards from '../components/Cards';
import Circuit from '../components/Circuit';
import { events } from '../data/eventsData';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="min-h-screen text-white">
      
      {/* --- SEZIONE HERO --- */}
      <section className="relative bg-dark w-full min-h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-10 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <filter id="localized-smoke">
                <feTurbulence type="fractalNoise" baseFrequency="0.002 0.005" numOctaves="5" seed="1">
                  <animate attributeName="baseFrequency" dur="10s" values="0.002 0.005; 0.006 0.012; 0.002 0.005" repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" scale="150" />
              </filter>
              <radialGradient id="smoke-gradient">
                <stop offset="0%" stopColor="#49F2F2" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#49F2F2" stopOpacity="0.3" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <ellipse cx="50%" cy="90%" rx="70%" ry="50%" fill="url(#smoke-gradient)" filter="url(#localized-smoke)" />
          </svg>
        </div>
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-60" style={{ backgroundImage: 'url("/Bororgring/img/Hero.jpg")' }} />
        <div className="absolute inset-0 z-0 bg-linear-to-t from-black via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl px-6 lg:px-10">
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-6">
            <span className="text-main uppercase">Borörgring</span><br />
          </h1>
          <p className='text-xl uppercase'>La velocità non ha mai ucciso nessuno. È fermarsi all’improvviso che fa male.</p>
        <Link 
          to="/contact" 
          className="inline-block w-fit border-2 transform -skew-x-15 border-main px-8 py-3 mt-8 text-lg font-bold uppercase hover:bg-main hover:text-black transition-all duration-300 shadow-[0_0_10px_var(--main-color)]"
        >
          UNISCITI ALLA NOSTRA COMMUNITY E VIVI L'ASFALTO
        </Link>
        </div>
      </section>
      {/* --- SEZIONE CIRCUITO  --- */}
      <section className="relative py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-4xl md:text-6xl font-black uppercase italic mb-6">
            Il tracciato del <span className="text-main">Borörgring</span>
          </h3>
          <p className="text-gray-400 text-lg border-l-2 border-main pl-4">
            Fai il giro. Senti il rombo.
          </p>
      </div>

      <div className="relative group">
        <div className="absolute inset-0 bg-main/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <Circuit />
        </div>
      </div>
    </section>

      {/* --- DIVISORE DINAMICO --- */}
      <div className="py-4 bg-main overflow-hidden whitespace-nowrap border-y-4 border-main rotate-1 md:-rotate-1 scale-105 z-20 relative">
        <div className="flex animate-marquee font-black uppercase italic text-black text-2xl">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8">Driving is living • Borörgring • Join the Crew •</span>
          ))}
        </div>
      </div>

      {/* --- SEZIONE CARDS --- */}
      <section className="relative py-32 bg-[url('/img/noise.png')] bg-repeat">

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold uppercase italic">Esplora Borörgring</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Cards 
              title="Prossimo Raduno" 
              subtitle={events[0].title}
              buttonText="Dettagli"
              link="/events"
            >
              <div className="flex flex-col items-center justify-center text-center h-48 rounded-lg">
                {/* Estraiamo giorno e mese dalla stringa della data */}
                <p className="text-main text-6xl font-semibold mb-0 leading-none">
                  {events[0].date.split(" ")[0]}
                </p>
                <p className="text-white text-xl font-bold uppercase tracking-widest">
                  {events[0].date.split(" ")[1]}
                </p>
              </div>
            </Cards>
            
            <Cards title="Galleria Eventi" subtitle="Foto e video di gruppo" buttonText="Esplora" link="/garage">
              <div className="grid grid-cols-2 gap-2 h-48 overflow-hidden rounded-lg">
                <img src="img/evento1/1.jpg" alt="E1" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100" />
                <img src="img/evento1/2.jpg" alt="E2" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100" />
              </div>
            </Cards>
            
            <Cards title="La Squadra" subtitle="Incontra i fondatori" buttonText="Scopri" link="/about">
              <div className="h-48 overflow-hidden rounded-lg">
                <img src="img/IMG_3373.jpg" alt="Team" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
              </div>
            </Cards>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;