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
      {/* --- BANNER EVENTO IMMINENTE --- */}
      <section className="mt-20 lg:mt-24 relative w-full overflow-hidden border-b border-main/30 bg-dark group">
        <div className="absolute inset-0 opacity-20 lg:group-hover:opacity-40 transition-opacity duration-700 bg-[url('/img/carbon-pattern.png')] bg-size-[10px_10px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-stretch md:items-center">
            
            <div className="bg-main text-black font-black uppercase italic px-6 py-3 md:px-8 md:py-5 flex items-center justify-center md:skew-x-[-15deg] md:-ml-4 md:mr-6 md:shadow-[10px_0_20px_rgba(73,242,242,0.3)]">
              <span className="md:skew-x-15 text-base md:text-lg tracking-tighter">Next Event</span>
            </div>

            <div className="grow py-4 px-6 md:px-0 flex flex-col md:flex-row md:items-center items-center text-center md:text-left gap-3 md:gap-10">
              <h2 className="text-lg md:text-2xl font-black uppercase italic tracking-tight text-white">
                {nextEvent.title}
              </h2>
              
              <div className="flex flex-row flex-wrap justify-center md:justify-start gap-3 md:gap-5 text-zinc-400 font-bold uppercase text-[10px] md:text-xs tracking-[0.2em]">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-main shrink-0" />
                  <span>{nextEvent.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-main shrink-0" />
                  <span>{nextEvent.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-main shrink-0" />
                  <span>{nextEvent.location}</span>
                </div>
              </div>
            </div>

            <Link 
              to="/events"
              className="flex items-center justify-center gap-2 px-6 py-4 md:px-10 md:py-6 bg-zinc-900/50 lg:hover:bg-main transition-all duration-500 border-t md:border-t-0 md:border-l border-zinc-800 text-white lg:hover:text-black font-black uppercase italic text-sm"
            >
              <span>Vedi Info</span>
              <ChevronRight size={18} className="lg:group-hover:translate-x-1 transition-transform" />
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
            <span className="text-main uppercase">Borörgring</span>
          </h1>
          <p className="text-base md:text-xl uppercase max-w-xl">
            La velocità non ha mai ucciso nessuno. È fermarsi all'improvviso che fa male.
          </p>
          <Link 
            to="/contact" 
            className="inline-block w-fit border-2 -skew-x-15 border-main px-8 py-3 mt-8 text-base md:text-lg font-bold uppercase lg:hover:bg-main lg:hover:text-black transition-all duration-300 shadow-[0_0_10px_var(--main-color)]"
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

      <div className="relative group min-h-62.5 md:min-h-0">
        <div className="absolute inset-0 bg-main/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <Circuit />
        </div>
      </div>
    </section>

      {/* --- DIVISORE DINAMICO --- */}
       <section className="relative z-20 my-20 w-full">
        <div className="py-4 bg-main overflow-hidden whitespace-nowrap border-y-4 border-black rotate-1 md:-rotate-1 scale-105">
          <div className="flex animate-marquee font-black uppercase italic text-black text-lg lg:text-2xl">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8">Driving is living • Borörgring • Join the Crew •</span>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEZIONE CARDS --- */}
      <section className="relative py-16 md:py-32 bg-[url('/img/noise.png')] bg-repeat">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-end mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase italic">Esplora Borörgring</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Cards 
              title="Prossimo Raduno" 
              subtitle={events[0].title}
              buttonText="Dettagli"
              link="/events"
            >
              <div className="flex flex-col items-center justify-center text-center h-48 rounded-lg">
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
                {/* grayscale sempre su mobile, rimosso solo al hover da lg */}
                <img loading="lazy" src="img/evento1/1.jpg" alt="E1" className="w-full h-full object-cover lg:grayscale lg:group-hover:grayscale-0 transition-all duration-500 scale-110 lg:group-hover:scale-100" />
                <img loading="lazy" src="img/evento1/2.jpg" alt="E2" className="w-full h-full object-cover lg:grayscale lg:group-hover:grayscale-0 transition-all duration-500 scale-110 lg:group-hover:scale-100" />
              </div>
            </Cards>
            
            <Cards title="La Squadra" subtitle="Incontra i fondatori" buttonText="Scopri" link="/about">
              <div className="h-48 overflow-hidden rounded-lg">
                <img loading="lazy" src="img/IMG_3373.jpg" alt="Team" className="w-full h-full object-cover lg:grayscale lg:group-hover:grayscale-0 transition-all duration-500 lg:group-hover:scale-105" />
              </div>
            </Cards>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;