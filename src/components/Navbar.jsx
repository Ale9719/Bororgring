import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full h-20 bg-dark flex items-center justify-between px-10 border-b-[3px] border-main shadow-[0_4px_15px_-2px_var(--shadow-main)]">      
      {/* LOGO CON LINK */}
      <div> 
        <Link to="/" className="block">
          <img src="/svg/Bororgring.svg" alt="Borörgring Logo" className="w-[14%] ml-[5.5%] transition-all duration-300" />
        </Link>
      </div>
      <div className="absolute left-0 top-full h-3.75 w-75 bg-main z-10" style={{ clipPath: 'polygon(0px 0px, 100% 0px, 90% 100%, 0px 100%)', filter: 'drop-shadow(var(--shadow-main))' }}>
        <div className="absolute inset-0.75 top-0 left-0 inset-t-0 bg-black flex items-center px-8" style={{ clipPath: 'polygon(0px 0px, 99% 0px, 90.5% 100%, 0px 100%)' }}></div>
      </div>

      {/* MENU DI NAVIGAZIONE */}
        <ul className='list-none whitespace-nowrap gap-8 flex'>
        <li><Link to="/" className="hover:text-main transition">Home</Link></li>
          <li><Link to="/events" className="hover:text-main transition">Eventi</Link></li>
          <li><Link to="/garage" className="hover:text-main transition">Garage</Link></li>
          <li><Link to="/about" className="hover:text-main transition">Chi siamo</Link></li>
         <li><Link to="/contact" className="hover:text-main transition">Contatti</Link></li>
        </ul>

    </nav>
  );
};

export default Navbar;
