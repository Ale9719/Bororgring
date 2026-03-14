import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react'; // Importa da lucide

const Footer = () => {
  return (
    <footer className="relative bg-dark w-full border-t-4 border-main py-12 px-10 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        
        {/* COLONNA 1: LOGO */}
        <div className="flex flex-col gap-4">
          <Link className=' self-center' to="/">
            <img src="svg/Bororgring.svg" alt="Borörgring Logo" className="w-48 brightness-0 invert" />
          </Link>
          <p className="text-zinc-400 italic text-sm">Vivi l'asfalto. La nostra community vive per la velocità e la passione motoristica pura.</p>
        </div>

        {/* COLONNA 2: NAVIGAZIONE */}
        <div className="flex flex-col gap-4 items-center">
          <h4 className="font-bold uppercase tracking-widest text-white">Esplora</h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/events" className="hover:text-main transition">Calendario Eventi</Link></li>
            <li><Link to="/garage" className="hover:text-main transition">Il nostro Garage</Link></li>
            <li><Link to="/contact" className="hover:text-main transition">Diventa Socio</Link></li>
          </ul>
        </div>

        {/* COLONNA 3: SOCIAL CON LUCIDE */}
        <div className="flex flex-col gap-4 items-center">
          <h4 className="font-bold uppercase tracking-widest text-white">Seguici</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10flex justify-items-center  hover:text-main transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10flex justify-items-center hover:text-main transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10flex justify-items-center  hover:text-main transition-all">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
{/*<div 
  className="absolute right-0 -top-4 h-3.75 w-[82%] bg-main z-10" 
  style={{ 
    clipPath: 'polygon(2.5% 0px, 100% 0px, 100% 90%, 0px 100%)', 
    filter: 'drop-shadow(var(--shadow-main))' 
  }}
>
  <div 
    className="absolute inset-0.75 bg-black flex items-center px-8" 
    style={{ 
clipPath: 'polygon(2.2% 0px, 100% 0px, 100% 98%, 0.7% 98%)'    }}
  >
  </div>
</div>*/}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-zinc-800 text-center text-zinc-500 text-xs uppercase tracking-tighter">
        &copy; 2026 Borörgring - Tutti i diritti riservati.
      </div>
    </footer>
  );
};

export default Footer;