import React from 'react';
import { Instagram, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <main className="min-h-screen text-white pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-4xl md:text-7xl font-semibold uppercase mb-8 md:mb-12">
          Mettiti in <span className="text-main">Contatto</span>
        </h1>

        {/* Form — rimosso mx-40, sostituito con max-w centrato */}
        <div className="relative my-5">
          <div className="absolute -inset-1 bg-main opacity-80 blur-2xl" />

          <div
            className="relative bg-main p-0.5"
            style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
          >
            <div
              className="bg-black p-6 md:p-8"
              style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="NOME"
                    className="bg-black border border-main/50 p-4 w-full uppercase focus:border-main outline-none transition-all text-sm"
                  />
                  <input
                    type="email"
                    placeholder="EMAIL"
                    className="bg-black border border-main/50 p-4 w-full uppercase focus:border-main outline-none transition-all text-sm"
                  />
                </div>
                <textarea
                  placeholder="COSA HAI IN MENTE?"
                  rows="6"
                  className="bg-black border border-main/50 p-4 w-full uppercase focus:border-main outline-none transition-all text-sm"
                />
                <button className="w-full border-2 border-main text-main py-4 uppercase lg:hover:bg-main lg:hover:text-black transition-all text-sm font-bold">
                  Invia Messaggio
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* INFO EXTRA */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="p-5 md:p-6 border-l-4 border-main bg-zinc-900/50 flex items-center gap-4 lg:hover:bg-zinc-800 transition-all cursor-pointer group lg:hover:shadow-[0_0_30px_color-mix(in_srgb,var(--color-main)_50%,transparent)]">
            <MapPin className="text-main w-7 h-7 md:w-8 md:h-8 shrink-0 lg:group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-main font-bold uppercase text-sm md:text-base">Dove siamo</h3>
              <p className="text-zinc-400 text-sm">Borore, Sardegna</p>
            </div>
          </div>
<a
          
            href="https://www.instagram.com/bororgring?igsh=MTN6ZWZhbmxpMnZjYQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 md:p-6 border-l-4 border-main bg-zinc-900/50 flex items-center gap-4 lg:hover:bg-zinc-800 transition-all cursor-pointer group lg:hover:shadow-[0_0_30px_color-mix(in_srgb,var(--color-main)_50%,transparent)]"
          >
            <Instagram className="text-main w-7 h-7 md:w-8 md:h-8 shrink-0 lg:group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-main font-bold uppercase text-sm md:text-base">Social</h3>
              <p className="text-zinc-400 text-sm">@Bororgring_Official</p>
            </div>
          </a>
        </div>

      </div>
    </main>
  );
};

export default Contact;