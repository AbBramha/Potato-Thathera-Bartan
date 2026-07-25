"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ProductCardProps {
  name: string;
  price: string;
  description: string;
  images: string[];
  theme: "gold" | "copper";
  link?: string;
}

export default function ProductCard({ name, price, description, images, theme, link }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const themeColor = theme === "gold" ? "var(--color-brand-gold)" : "var(--color-brand-copper)";

  const openLightbox = (img: string) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.clientWidth;
    const newIndex = Math.round(scrollLeft / width);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const scrollPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const scrollNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-full group">
        {/* Image Carousel Card */}
        <div className="relative aspect-square overflow-hidden bg-[#1a121d] rounded-2xl border border-[var(--color-brand-purple)]/30 group/carousel">
          <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
          
          <div 
            ref={scrollRef}
            className="flex w-full h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={handleScroll}
          >
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="relative min-w-full h-full snap-center shrink-0 cursor-pointer"
                onClick={() => openLightbox(img)}
              >
                <Image 
                  src={`/Images/${img}`} 
                  alt={`${name} - View ${idx + 1}`} 
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button 
                onClick={scrollPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/80 text-white rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 z-10 text-xl"
                aria-label="Previous image"
              >
                &#8592;
              </button>
              <button 
                onClick={scrollNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/80 text-white rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 z-10 text-xl"
                aria-label="Next image"
              >
                &#8594;
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none z-10">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "bg-white scale-125" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Description Card */}
        <div className="aspect-square bg-[var(--color-brand-purple)]/20 backdrop-blur-md rounded-2xl border border-[var(--color-brand-gold)]/20 p-8 flex flex-col justify-center items-center text-center">
          <h3 className="text-3xl font-bold mb-2" style={{ color: themeColor }}>{name}</h3>
          <p className="text-2xl font-bold text-white mb-4">{price}</p>
          <p className="text-sm text-gray-300 mb-8 line-clamp-4">{description}</p>
          <a 
            href={link || "/shop"} 
            target={link ? "_blank" : undefined}
            rel={link ? "noopener noreferrer" : undefined}
            className="px-6 py-3 border font-bold tracking-widest uppercase transition-colors mt-auto w-full hover:bg-[var(--color-brand-charcoal)] block text-center"
            style={{ 
              borderColor: themeColor, 
              color: themeColor,
              backgroundColor: "transparent"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = themeColor;
              e.currentTarget.style.color = "var(--color-brand-charcoal)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = themeColor;
            }}
          >
            Get your ठठेरा
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(false);
              }}
            >
              &times;
            </button>
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-square md:aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={`/Images/${selectedImage}`}
                alt={name}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
