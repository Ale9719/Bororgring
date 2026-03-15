const GalleryCard = ({ imageSrc, title, onOpenModal, className }) => {
  return (
    <div 
      className={`relative group overflow-hidden border-2 border-main bg-zinc-900 cursor-pointer shadow-[0_0_30px_color-mix(in_srgb,var(--color-main)_50%,transparent)] ${className}`}
      onClick={onOpenModal}
      onError={(e) => { e.currentTarget.style.display = 'none'; }}>
      <img src={imageSrc} loading="lazy" className="w-full h-full object-cover transition-all duration-700 lg:group-hover:scale-105" onError={(e) => { e.target.parentElement.style.display = 'none'; }}/>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/70 flex flex-col items-center justify-center opacity-0 lg:group-hover:opacity-100 transition-all duration-500 ease-in-out backdrop-blur-[2px]">
        <div className="px-5 py-2 border z-10 border-main bg-black/80 backdrop-blur-md -skew-x-12 transform transition-transform duration-500 lg:group-hover:scale-100 scale-90">
          <h3 className="text-[10px] font-black tracking-[0.2em] uppercase text-main italic">Clicca per ingrandire</h3>
        </div>

        <div className="absolute inset-0 opacity-30 pointer-events-none" 
             style={{ backgroundImage: 'repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 6px)' }} />

        {/* Bulloni */}
        <div className="absolute top-3 left-3 w-3 h-3 bg-zinc-950 border border-zinc-700 rounded-full" />
        <div className="absolute top-3 right-3 w-3 h-3 bg-zinc-950 border border-zinc-700 rounded-full" />
        <div className="absolute bottom-3 left-3 w-3 h-3 bg-zinc-950 border border-zinc-700 rounded-full" />
        <div className="absolute bottom-3 right-3 w-3 h-3 bg-zinc-950 border border-zinc-700 rounded-full" />
      </div>
    </div>
  );
};

export default GalleryCard;