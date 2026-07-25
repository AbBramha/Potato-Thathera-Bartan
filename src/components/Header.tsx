"use client";

import Link from "next/link";
import { ShoppingCart, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 bg-[var(--color-brand-charcoal)]/80 backdrop-blur-md border-b border-[var(--color-brand-purple)]">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-[var(--color-brand-gold)] font-sans uppercase">
            ठठेरा
          </span>
          <span className="hidden md:inline-block text-lg font-bold text-[var(--color-brand-cream)]">
            THATHERA
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/shop" className="text-sm uppercase tracking-widest hover:text-[var(--color-brand-gold)] transition-colors">
            Shop Bartan
          </Link>
          <Link href="/about" className="text-sm uppercase tracking-widest hover:text-[var(--color-brand-gold)] transition-colors">
            Virasat
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[var(--color-brand-purple)]/20 rounded-full transition-colors relative">
            <ShoppingCart className="w-5 h-5 text-[var(--color-brand-gold)]" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-[var(--color-brand-copper)] text-white text-[10px] flex items-center justify-center rounded-full">
              0
            </span>
          </button>
          <button className="md:hidden p-2 text-[var(--color-brand-cream)] hover:text-[var(--color-brand-gold)]">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
