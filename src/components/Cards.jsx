import React from 'react';
import { Link } from 'react-router-dom';
const Cards = ({ title, subtitle, buttonText, children, link }) => {
  return (
    <div style={{ filter: 'drop-shadow(0 0 10px var(--shadow-main))' }}
      className="group relative transition-all duration-300" >
      <div className="bg-main p-0.5" 
        style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)'}}>
        <div className="bg-black p-6"
          style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}>
          <h2 className="text-xl font-bold uppercase italic text-main mb-1">{title}</h2>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">{subtitle}</p>
          
          <div className="w-full h-40 flex items-center justify-center overflow-hidden mb-4">
            {children}
          </div>

          {link && buttonText && (
            <Link 
              to={link} 
              className="block w-full text-center border border-main py-2 text-sm font-bold uppercase hover:bg-main hover:text-black transition-colors">
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;