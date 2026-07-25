"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a060b] py-16 px-6 md:px-12 border-t border-[var(--color-brand-purple)]/50 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover mix-blend-luminosity"
        >
          <source src="/videos/Diya_flame_flickering_purple_smoke_202607230924.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a060b] via-transparent to-[#0a060b]" />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-4xl font-bold text-[var(--color-brand-gold)] mb-4">ठठेरा</h2>
          <p className="text-xl mb-6 italic">Purane Bartan. Naya Swag.™</p>
          <p className="text-sm text-gray-400 max-w-sm">
            We didn&apos;t reinvent Indian craftsmanship. We just gave it better marketing.
            Dadi approved. Gen-Z confused.
          </p>
        </div>

        <div>
          <h3 className="text-[var(--color-brand-gold)] font-bold mb-4 uppercase tracking-widest">Shop</h3>
          <ul className="space-y-3">
            <li><Link href="/shop" className="hover:text-[var(--color-brand-gold)] transition-colors">The OG Lota™</Link></li>
            <li><Link href="/shop" className="hover:text-[var(--color-brand-gold)] transition-colors">Peetal Pint™</Link></li>
            <li><Link href="/shop" className="hover:text-[var(--color-brand-gold)] transition-colors">Tamba Tank™</Link></li>
            <li><Link href="/shop" className="hover:text-[var(--color-brand-gold)] transition-colors">The Maharaja Set™</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[var(--color-brand-gold)] font-bold mb-4 uppercase tracking-widest">Culture</h3>
          <ul className="space-y-3">
            <li><Link href="/about" className="hover:text-[var(--color-brand-gold)] transition-colors">Our Story</Link></li>
            <li><a href="#" className="hover:text-[var(--color-brand-gold)] transition-colors">Memes</a></li>
            <li><a href="#" className="hover:text-[var(--color-brand-gold)] transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[var(--color-brand-purple)]/30 flex flex-col items-center text-sm text-gray-500">
        <div className="text-center mb-6">
          &copy; {new Date().getFullYear()} Thathera. Steel is temporary. Peetal is eternal.
        </div>
        <div className="text-center flex flex-wrap items-center justify-center gap-y-3 gap-x-1 font-bold text-gray-400 leading-loose">
          Built by - Abhishek Choudhary
          <a href="https://abhi-portfolio-tan.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src="/Images/frame_007.gif" alt="Abhishek Choudhary" width={28} height={28} className="rounded-full inline-block object-cover mx-2 border border-gray-600 hover:scale-110 transition-transform" />
          </a>
          , Owner of Marvion Technologies
          <a href="https://www.marvion.xyz/" target="_blank" rel="noopener noreferrer">
            <Image src="/Images/Marvion zoom in logo.jpg" alt="Marvion Technologies" width={28} height={28} className="rounded-full inline-block object-cover mx-2 border border-gray-600 hover:scale-110 transition-transform" />
          </a>
          BY ABCH Industries
          <a href="https://abchindustries.com/" target="_blank" rel="noopener noreferrer">
            <Image src="/Images/ABCH logo cropped.png" alt="ABCH Industries" width={28} height={28} className="rounded-full inline-block object-cover mx-2 border border-gray-600 hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
        </div>
    </footer>
  );
}
