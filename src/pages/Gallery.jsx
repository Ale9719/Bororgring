import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryEvents } from '../data/galleryConfig';
import GalleryCard from '../components/GalleryCard';

const Gallery = () => {
  const [selectedEvent, setSelectedEvent] = useState("Tutti");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const getSpan = (index) => {
    const patterns = [
      "md:col-span-2 md:row-span-2",
      "md:col-span-1 md:row-span-1",
      "md:col-span-1 md:row-span-1",
      "md:col-span-2 md:row-span-1"
    ];
    return patterns[index % patterns.length];
  };

  // Genera le foto provando a caricare fino a 50 immagini per cartella
  const getAllPhotos = () => {
    return galleryEvents.flatMap(event => 
      Array.from({ length: 50 }, (_, i) => ({
        src: `/Bororgring/img/${event.id}/${i + 1}.jpg`,
        label: event.label,
        span: getSpan(i)
      }))
    );
  };

  const filteredPhotos = selectedEvent === "Tutti" 
    ? getAllPhotos() 
    : Array.from({ length: 50 }, (_, i) => ({
        src: `/Bororgring/img/${galleryEvents.find(e => e.label === selectedEvent).id}/${i + 1}.jpg`,
        label: selectedEvent,
        span: getSpan(i)
      }));

      const renderTitle = (title) => {
  if (title === "Tutti") {
    return (
      <>Il nostro <span className="text-main">Garage</span></>
    );
  }
  
  // Dividiamo il titolo in parole
  const words = title.split(' ');
  const lastWord = words.pop(); // Prende l'ultima parola
  const rest = words.join(' '); // Prende tutto il resto
  
  return (
    <>{rest} <span className="text-main">{lastWord}</span></>
  );
};
  return (
    <div className="min-h-screen text-white pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
        <h1 className="text-5xl md:text-7xl font-semibold uppercase italic">{renderTitle(selectedEvent)}</h1>

        <div className="relative">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-3 px-6 py-3 border-2 border-main font-bold uppercase hover:bg-main hover:text-black transition-all">
            {selectedEvent === "Tutti" ? "Seleziona Evento" : "Cambia Evento"}
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-zinc-900 border-2 border-main z-50">
              <button onClick={() => { setSelectedEvent("Tutti"); setIsDropdownOpen(false); }} className="block w-full text-left px-4 py-3 hover:bg-main hover:text-black font-bold uppercase border-b border-main/20">Tutti</button>
              {galleryEvents.map(e => (
                <button key={e.id} onClick={() => { setSelectedEvent(e.label); setIsDropdownOpen(false); }} className="block w-full text-left px-4 py-3 hover:bg-main hover:text-black font-bold uppercase italic">{e.label}</button>
              ))}
            </div>
          )}
        </div>
      </div>

      

      <motion.div layout className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo, i) => (
            <GalleryCard 
              key={`${photo.src}-${i}`} 
              imageSrc={photo.src} 
              className={photo.span}
              onOpenModal={() => setModalImage(photo.src)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm" onClick={() => setModalImage(null)}>
          <div className="relative w-fit flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Ingrandita" className="max-h-[80vh] border-2 border-main" />
            <a href={modalImage} download className="bg-main text-black font-bold px-8 py-3 uppercase hover:bg-white transition-all">Scarica</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;