import React from 'react';
import Cards from '../components/Cards';
import Circuit from '../components/Circuit';
import { events } from '../data/eventsData';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ChevronRight } from 'lucide-react';

const Home = () => {
const nextEvent = events[0];

  return (
    <main className="min-h-screen text-white overflow-x-hidden">
      {/* 1. BANNER EVENTO IMMINENTE (Sotto la Navbar) */}
      <section className="relative w-full overflow-hidden border-b border-main/30 bg-[#0a0a0a] group">
        {/* Sfondo Carbonio leggero */}
        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-[url('/img/carbon-pattern.png')] bg-[length:10px_10px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-stretch md:items-center">
            
            {/* Badge "PROSSIMO" */}
            <div className="bg-main text-black font-black uppercase italic px-8 py-5 flex items-center justify-center skew-x-[-15deg] -ml-4 mr-6 shadow-[10px_0_20px_rgba(73,242,242,0.3)]">
              <span className="skew-x-[15deg] text-lg tracking-tighter">Next Event</span>
            </div>

            {/* Dettagli Evento */}
            <div className="flex-grow py-4 px-6 md:px-0 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
              <h2 className="text-xl md:text-2xl font-black uppercase italic tracking-tight text-white">
                {nextEvent.title}
              </h2>
              
              <div className="flex flex-wrap gap-5 text-zinc-400 font-bold uppercase text-[10px] md:text-xs tracking-[0.2em]">
                <div className="flex items-center gap-2 border-l border-zinc-800 pl-4 first:border-0 first:pl-0">
                  <Calendar size={14} className="text-main" />
                  <span>{nextEvent.date}</span>
                </div>
                <div className="flex items-center gap-2 border-l border-zinc-800 pl-4">
                  <Clock size={14} className="text-main" />
                  <span>{nextEvent.time}</span>
                </div>
                <div className="flex items-center gap-2 border-l border-zinc-800 pl-4">
                  <MapPin size={14} className="text-main" />
                  <span>{nextEvent.location}</span>
                </div>
              </div>
            </div>

            {/* Link ai Dettagli */}
            <Link 
              to="/events"
              className="group/btn relative px-10 py-6 bg-zinc-900/50 hover:bg-main transition-all duration-500 overflow-hidden border-l border-zinc-800"
            >
              <div className="relative z-10 flex items-center gap-2 text-white group-hover/btn:text-black font-black uppercase italic text-sm">
                <span>Vedi Info</span>
                <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
      
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
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-60" style={{ backgroundImage: 'url("img/Hero.jpg")' }} />
        <div className="absolute inset-0 z-0 bg-linear-to-t from-black via-black/40 to-transparent" />
        <div className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-10">
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-6">
            <span className="text-main uppercase">Borörgring</span><br />
          </h1>
          <p className='text-base md:text-xl uppercase'>La velocità non ha mai ucciso nessuno. È fermarsi all’improvviso che fa male.</p>
        <Link 
          to="/contact" 
          className="inline-block w-fit border-2 transform -skew-x-15 border-main px-8 py-3 mt-8 text-lg font-bold uppercase hover:bg-main hover:text-black transition-all duration-300 shadow-[0_0_10px_var(--main-color)]"
        >
          UNISCITI ALLA NOSTRA COMMUNITY E VIVI L'ASFALTO
        </Link>
        </div>
      </section>
      {/* --- SEZIONE CIRCUITO  --- */}
      <section className="relative py-16 md:py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-4xl md:text-6xl font-black uppercase italic mb-6">
            Il tracciato del <span className="text-main">Borörgring</span>
          </h3>
          <p className="text-gray-400 text-lg border-l-2 border-main pl-4">
            Fai il giro. Senti il rombo.
          </p>
      </div>

      <div className="relative group min-h-[250px] md:min-h-0">
        <div className="absolute inset-0 bg-main/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <Circuit />
        </div>
      </div>
    </section>

      {/* --- DIVISORE DINAMICO --- */}
      <div className="py-4 bg-main overflow-x-hidden whitespace-nowrap border-y-4 border-main rotate-1 md:-rotate-1 scale-105 z-20 relative">
        <div className="flex animate-marquee font-black uppercase italic text-black text-2xl">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8">Driving is living • Borörgring • Join the Crew •</span>
          ))}
        </div>
      </div>

      {/* --- SEZIONE CARDS --- */}
      <section className="relative py-16 md:py-32 bg-[url('/img/noise.png')] bg-repeat">

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