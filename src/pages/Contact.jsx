import React from 'react';
import { Instagram, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <main className="min-h-screen text-white pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-5xl md:text-7xl font-semibold uppercase mb-12">
          Mettiti in <span className="text-main">Contatto</span>
        </h1>

        <div className="relative mx-40 my-5">
        <div className="absolute -inset-1 bg-main opacity-80 blur-2xl"></div>

        <div 
            className="relative bg-main p-0.5" 
            style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
        >
            <div 
            className="bg-black p-8"
            style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
            >
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="NOME" className="bg-black border border-main/50 p-4 w-full uppercase focus:border-main outline-none transition-all" />
                <input type="email" placeholder="EMAIL" className="bg-black border border-main/50 p-4 w-full uppercase focus:border-main outline-none transition-all" />
                </div>
                <textarea placeholder="COSA HAI IN MENTE?" rows="6" className="bg-black border border-main/50 p-4 w-full uppercase focus:border-main outline-none transition-all"></textarea>
                <button className="w-full border-2 border-2-main text-main py-4 uppercase hover:bg-main hover:text-black transition-all">
                Invia Messaggio
                </button>
            </form>
            </div>
        </div>
        </div>

        {/* INFO EXTRA */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border-l-4 border-main bg-zinc-900/50 flex items-center gap-4 hover:bg-zinc-800 transition-all cursor-pointer group hover:shadow-[0_0_30px_color-mix(in_srgb,var(--color-main)_50%,transparent)]">
            <MapPin className="text-main w-8 h-8 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-main font-bold uppercase">Dove siamo</h3>
              <p className="text-zinc-400">Borore, Sardegna</p>
            </div>
          </div>

          <a href="https://www.instagram.com/bororgring?igsh=MTN6ZWZhbmxpMnZjYQ==" target="_blank" rel="noopener noreferrer" 
             className="p-6 border-l-4 border-main bg-zinc-900/50 flex items-center gap-4 hover:bg-zinc-800 transition-all cursor-pointer group hover:shadow-[0_0_30px_color-mix(in_srgb,var(--color-main)_50%,transparent)]">
            <Instagram className="text-main w-8 h-8 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-main font-bold uppercase">Social</h3>
              <p className="text-zinc-400">@Bororgring_Official</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;