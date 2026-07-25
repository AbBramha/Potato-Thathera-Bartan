"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    name: "OG LOTA",
    price: "₹499/-",
    description: "A traditional Indian handcrafted brass lota with a wide flared rim, narrow neck ठठेरा OG Lota",
    images: [
      "OG lota.png", 
      "Brass_lota_on_stone_pedestal_202607222148.jpeg", 
      "Brass_lota_on_velvet_fabric_202607222149.jpeg", 
      "Artisan_hands_crafting_brass_lota_202607222149.jpeg", 
      "Artisan_hands_crafting_brass_lota_202607222150.jpeg", 
      "Brass_lota_on_pedestal_2K_202607222151.jpeg"
    ],
    theme: "gold" as const,
  },
  {
    name: "ठठेरा PEETAL GLASS",
    price: "₹499/-",
    description: "Tall traditional Indian brass tumbler, slightly tapered cylindrical body, thick rounded upper rim ठठेरा PEETAL GLASS",
    images: [
      "ChatGPT Image Jul 22, 2026, 09_49_56 PM.png", 
      "Brass_tumbler_with_engraving_2K_202607222153.jpeg", 
      "Peetal_glass_pouring_water_2K_202607222153.jpeg", 
      "Brass_glass_on_workbench_2K_202607222154.jpeg", 
      "Brass_glass_on_workbench_2K_202607222154 (1).jpeg", 
      "Brass glass.jpeg"
    ],
    theme: "copper" as const,
  },
  {
    name: "ठठेरा KATORI NO. 1",
    price: "₹499/-",
    description: "Traditional Indian brass katori with a wide circular opening, gently curved bowl, ठठेरा KATORI NO. 1",
    images: [
      "ChatGPT Image Jul 22, 2026, 09_55_40 PM.png", 
      "Brass_katori_on_pedestal_2K_202607222159.jpeg", 
      "Artisan_hammering_brass_katori_w…_202607222201 (1).jpeg", 
      "Artisan_hammering_brass_katori_w…_202607222201.jpeg", 
      "Gemini_Generated_Image_xlycumxlycumxlyc.jpeg"
    ],
    theme: "gold" as const,
  },
  {
    name: "ठठेरा TAMBA BOTTLE",
    price: "₹1,599/-",
    description: "Gently rounded shoulders, narrow neck, substantial threaded copper screw cap, ठठेरा TAMBA BOTTLE",
    images: [
      "ChatGPT Image Jul 22, 2026, 10_02_40 PM.png", 
      "Bottle_on_stone_table_2K_202607222209.jpeg", 
      "Thathera copper bottle.jpeg", 
      "Copper_bottle_water_explosion_2K_202607222207.jpeg", 
      "Copper_bottle_in_futuristic_tunnel_202607222210.jpeg"
    ],
    theme: "copper" as const,
  },
  {
    name: "ठठेरा TAMBA TUMBLER",
    price: "₹4,999/-",
    description: "Tall modern travel tumbler made entirely from rich polished copper, ठठेरा TAMBA TUMBLER",
    images: [
      "ChatGPT Image Jul 22, 2026, 10_13_22 PM.png", 
      "Thathera tumbler.jpeg", 
      "Tambha_Tumbler_with_water_splash_202607222219.jpeg", 
      "Copper_tumbler_in_luxury_car_202607222220.jpeg", 
      "Copper_tumbler_VIP_nightclub_ent…_202607222222.jpeg"
    ],
    theme: "copper" as const,
  },
  {
    name: "ठठेरा MAHARAJA THALI",
    price: "₹4,999/-",
    description: "ठठेरा MAHARAJA THALI brass dinnerware set.",
    images: [
      "ChatGPT Image Jul 22, 2026, 10_17_08 PM.png", 
      "Brass_dinnerware_set_flat_lay_202607222225.jpeg", 
      "Brass_dinnerware_set_on_platform_202607222222.jpeg", 
      "Luxury_Indian_food_editorial_pho…_202607222223.jpeg"
    ],
    theme: "gold" as const,
  }
];

export default function Home() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-end items-center overflow-hidden pb-24">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0 bg-[var(--color-brand-charcoal)]">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/Man_with_hammer_workshop_202607222234.mp4" type="video/mp4" />
          </video>
          {/* Subtle gradient at the bottom so text transitions smoothly to the next section */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--color-brand-charcoal)] via-[var(--color-brand-charcoal)]/80 to-transparent z-20" />
        </div>

        <div className="relative z-30 text-center flex flex-col items-center gap-6 px-4 mt-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-2xl md:text-5xl font-bold text-white mb-2 tracking-wide drop-shadow-lg">Dadi approved.</p>
            <p className="text-2xl md:text-5xl font-bold text-[var(--color-brand-gold)] mb-8 tracking-wide drop-shadow-lg">Gen-Z confused.™</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              href="/shop" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-purple)] text-white font-bold uppercase tracking-widest hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-charcoal)] transition-all duration-300 transform hover:scale-105"
            >
              Shop Bartan &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* The Bartan Drop */}
      <section className="relative w-full py-24 border-y border-[var(--color-brand-purple)]/20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Images/ChatGPT Image Jul 22, 2026, 10_45_10 PM.png"
            alt="Bartan Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl font-black mb-16 uppercase tracking-tight text-[var(--color-brand-gold)] text-center">
            Choose Your Bartan.
          </h2>
          
          {/* 3 Column Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                description={product.description}
                images={product.images}
                theme={product.theme}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="relative w-full py-24 overflow-hidden flex flex-col items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Images/ChatGPT Image Jul 22, 2026, 10_45_10 PM.png"
            alt="Collaboration Background"
            fill
            className="object-cover opacity-60"
          />
        </div>
        
        <div className="relative z-10 w-full max-w-[1500px] min-h-[500px] xl:h-[800px] bg-[#1a121d] border border-[var(--color-brand-purple)]/50 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col justify-end p-4 md:p-8">
          {/* Background Banner */}
          <Image 
            src="/Images/Collaboration banner.png"
            alt="Collaboration Banner"
            fill
            className="object-cover z-0"
          />
          
          {/* Product Cards Container */}
          <div className="relative z-10 flex flex-col xl:flex-row items-center xl:items-end justify-between gap-6 w-full">
            
            {/* Left Product Card */}
            <div className="w-full max-w-[640px] h-auto lg:h-[320px] bg-[#f2efe9] text-black rounded-[2rem] flex flex-col lg:flex-row shadow-2xl border-[3px] border-gray-400 overflow-hidden">
               {/* Image Card */}
               <div 
                 className="w-full lg:w-[320px] aspect-square lg:h-full bg-black flex items-center justify-center relative lg:border-r-[3px] border-b-[3px] lg:border-b-0 border-gray-400 overflow-hidden cursor-pointer group shrink-0"
               onClick={() => setActiveVideo("/videos/Meethi kheer.mp4")}
             >
               <video 
                 autoPlay 
                 loop 
                 muted 
                 playsInline
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
               >
                 <source src="/videos/Meethi kheer.mp4" type="video/mp4" />
               </video>
               {/* Play Button Overlay on Hover */}
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
               </div>
             </div>
             {/* Description Card */}
             <div className="w-full lg:w-[320px] p-6 flex flex-col justify-center">
               <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter leading-none">MEETHI<br/>KHEER</h3>
               <p className="text-base font-bold text-gray-800 leading-relaxed mb-6">
                 Aang ka Milk aur Carry Chacha<br/>
                 Chawal se bani Meethi Kheer Potato<br/>
                 Thatera Bartan me Khaaiye
               </p>
               <button className="bg-[#2c2c2c] text-white px-8 py-2 rounded-full font-bold hover:bg-black transition-colors w-max mt-auto">
                 ₹ 599
               </button>
             </div>
            </div>

            {/* Right Product Card */}
            <div className="w-full max-w-[640px] h-auto lg:h-[320px] bg-[#f2efe9] text-black rounded-[2rem] flex flex-col lg:flex-row shadow-2xl border-[3px] border-gray-400 overflow-hidden">
               {/* Description Card */}
               <div className="w-full lg:w-[320px] p-6 flex flex-col justify-center items-start lg:items-end text-left lg:text-right lg:border-r-[3px] border-b-[3px] lg:border-b-0 border-gray-400 order-2 lg:order-1">
               <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter leading-none">DRY FRUITS<br/>KHEER</h3>
               <p className="text-base font-bold text-gray-800 leading-relaxed mb-6">
                 Aang ka Milk aur Carry Chacha<br/>
                 Chawal se bani Dry Fruits Kheer<br/>
                 Potato Thatera Bartan me Khaaiye.
               </p>
               <button className="bg-[#2c2c2c] text-white px-8 py-2 rounded-full font-bold hover:bg-black transition-colors w-max mt-auto">
                 ₹ 799
               </button>
               </div>
               {/* Image Card */}
               <div 
                 className="w-full lg:w-[320px] aspect-square lg:h-full bg-black flex items-center justify-center relative overflow-hidden cursor-pointer group shrink-0 order-1 lg:order-2"
               onClick={() => setActiveVideo("/videos/InShot_20260723_083852196.mp4")}
             >
               <video 
                 autoPlay 
                 loop 
                 muted 
                 playsInline
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
               >
                 <source src="/videos/InShot_20260723_083852196.mp4" type="video/mp4" />
               </video>
               {/* Play Button Overlay on Hover */}
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
               </div>
             </div>
            </div>

          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="bg-[var(--color-brand-purple)]/10 py-24 border-y border-[var(--color-brand-purple)]/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl font-black mb-12 text-center tracking-tighter uppercase drop-shadow-lg">
            HATH SE BANA HAI <span className="text-[var(--color-brand-gold)]">BOSS.</span>
          </h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(75,0,110,0.5)]">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/Man_hammering_copper_vessel_202607230923.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="mt-12 text-3xl md:text-4xl text-center max-w-4xl font-bold text-gray-200 leading-relaxed italic">
            "Hum 2000 saal se bartan bana rahe hain. <br/> <span className="text-[var(--color-brand-gold)]">Tum ab aesthetic bol rahe ho.</span>"
          </p>
        </div>
      </section>

      {/* Why Metal Section */}
      <section className="relative py-32 md:py-48 overflow-hidden border-t border-b border-[var(--color-brand-purple)]/30">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/Man_placing_copper_vessel_box_202607230924.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[var(--color-brand-gold)] mb-16 uppercase tracking-widest">
          Why Metal?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-2xl font-bold">
          <div className="p-8 bg-[#1a121d] rounded-2xl border border-gray-800">
            <h3 className="text-gray-400 mb-4">PLASTIC</h3>
            <div className="text-5xl">😐</div>
          </div>
          <div className="p-8 bg-[#1a121d] rounded-2xl border border-gray-800">
            <h3 className="text-gray-300 mb-4">STEEL</h3>
            <div className="text-5xl">🙂</div>
          </div>
          <div className="p-8 bg-[var(--color-brand-purple)]/20 rounded-2xl border border-[var(--color-brand-gold)] transform scale-110 shadow-[0_0_30px_rgba(214,165,42,0.2)]">
            <h3 className="text-[var(--color-brand-gold)] mb-4">THATHERA</h3>
            <div className="text-5xl">🗿</div>
          </div>
        </div>
        </div>
      </section>
      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12 cursor-pointer"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-[var(--color-brand-purple)]/50 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-[110] bg-black/60 text-white rounded-full p-2 hover:bg-[var(--color-brand-gold)] hover:text-black transition-colors backdrop-blur-md"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={activeVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
