import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Non mostrare i breadcrumb nella Home
  if (pathnames.length === 0) return null;

  return (
    <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] mb-10 text-slate-400 relative z-10 mt-28 px-8">
      <Link 
        to="/" 
        className="text-zinc-500 hover:text-main transition-colors"
      >
        Home
      </Link>
      
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return (
          <div key={to} className="flex items-center space-x-2">
            <ChevronRight size={14} className="text-main" />
            {last ? (
              <span className="text-white italic">{decodeURIComponent(value)}</span>
            ) : (
              <Link 
                to={to} 
                className="text-zinc-500 hover:text-main transition-colors"
              >
                {decodeURIComponent(value)}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;