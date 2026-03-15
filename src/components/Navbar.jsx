import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/events', label: 'Eventi' },
    { to: '/garage', label: 'Garage' },
    { to: '/about', label: 'Chi siamo' },
    { to: '/contact', label: 'Contatti' },
  ];

  const linkClass = (to) =>
    `transition font-bold uppercase text-sm tracking-wide ${
      pathname === to ? 'text-main' : 'text-white lg:hover:text-main'
    }`;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full h-20 bg-dark flex items-center justify-between px-6 lg:px-10 border-b-[3px] border-main shadow-[0_4px_15px_-2px_var(--shadow-main)]">

        {/* LOGO */}
        <Link to="/" className="block" onClick={() => setMenuOpen(false)}>
          <img loading="lazy" src="svg/Bororgring.svg" alt="Borörgring Logo" className="w-24 md:w-32 transition-all duration-300" />
        </Link>

        {/* Accent bar sotto logo */}
        <div
          className="absolute left-0 top-full h-3.75 w-75 bg-main z-10"
          style={{ clipPath: 'polygon(0px 0px, 100% 0px, 90% 100%, 0px 100%)', filter: 'drop-shadow(var(--shadow-main))' }}
        >
          <div
            className="absolute inset-0.75 top-0 left-0 inset-t-0 bg-black flex items-center px-8"
            style={{ clipPath: 'polygon(0px 0px, 99% 0px, 90.5% 100%, 0px 100%)' }}
          />
        </div>

        {/* MENU DESKTOP */}
        <ul className="hidden lg:flex list-none whitespace-nowrap gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className={linkClass(to)}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* HAMBURGER BUTTON — solo mobile */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-main transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-main transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-main transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* MENU MOBILE — overlay fullscreen */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center gap-10 transition-all duration-300 lg:hidden
        ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            onClick={() => setMenuOpen(false)}
            className={`text-3xl font-black uppercase italic tracking-tight transition-all duration-200
              ${pathname === to ? 'text-main' : 'text-white'}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
