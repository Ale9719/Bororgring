import React from 'react';
import { MapPin, CalendarDays, Clock } from 'lucide-react';
import { events } from '../data/eventsData'; 

const Events = () => {
  return (
    <main className="min-h-screen text-white lg:pt-24 pb-20 px-6">
      <div className='max-w-7xl mx-auto'>
        <h1 className="text-5xl md:text-7xl font-semibold uppercase mb-16">
          Prossimi <span className="text-main">Raduni</span>
        </h1>

        <div className="space-y-12">
          {events.map((event) => (
            <div key={event.id} className="relative">
              
              <div className="absolute -inset-1 bg-main opacity-30 blur-2xl"></div>

              <div 
                className="relative p-0.5 bg-main shadow-[0_0_15px_rgba(255,95,31,0.5)]"
                style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}>
                
                <div 
                  className="bg-black p-8 w-full h-full"
                  style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                      <h2 className="text-3xl font-black uppercase italic text-main mb-4">{event.title}</h2>
                      <div className="flex flex-wrap gap-6 text-zinc-400">
                        <div className="flex items-center gap-2"><CalendarDays className="w-5 h-5 text-main" /> {event.date}</div>
                        <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-main" /> {event.time}</div>
                      </div>
                    </div>

                    <a 
                      href={event.mapLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-black border border-main px-6 py-3 font-bold uppercase italic hover:bg-main hover:text-black transition-all"
                    >
                      <MapPin className="w-5 h-5" />
                      Visualizza su Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Events;