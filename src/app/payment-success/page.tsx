"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PaymentSuccess() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
        >
          <source src="/videos/After payment.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a060b]/80 via-transparent to-[#0a060b]/80" />
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 md:px-12 max-w-3xl w-full flex flex-col items-center"
      >
        <div className="w-24 h-24 bg-[var(--color-brand-purple)]/20 rounded-full flex items-center justify-center mb-8 border-2 border-[var(--color-brand-gold)] shadow-[0_0_30px_rgba(207,181,59,0.3)] animate-pulse">
          <svg className="w-12 h-12 text-[var(--color-brand-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white drop-shadow-lg">
          Payment <span className="text-[var(--color-brand-gold)]">Successful</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-bold text-gray-300 mb-4 tracking-wide">
          Your order has been confirmed!
        </p>
        
        <p className="text-gray-400 mb-12 max-w-lg leading-relaxed">
          Thank you for choosing Thathera. We are preparing your authentic Bartan. You will receive an email confirmation with your order details shortly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/" 
            className="px-8 py-4 bg-[var(--color-brand-purple)] text-white font-bold uppercase tracking-widest hover:bg-[var(--color-brand-gold)] hover:text-[#0a060b] transition-all shadow-lg rounded-full"
          >
            Return Home
          </Link>
          <Link 
            href="/shop" 
            className="px-8 py-4 bg-transparent border-2 border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] font-bold uppercase tracking-widest hover:bg-[var(--color-brand-gold)] hover:text-[#0a060b] transition-all shadow-lg rounded-full"
          >
            Keep Shopping
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
