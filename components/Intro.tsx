"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Intro({ onComplete }: { onComplete: () => void }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 1000); // Wait for animation to finish
  };

  if (!isVisible) return null;

  return (
    <div 
      onClick={handleClick}
      className={`fixed inset-0 z-[100] flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-1000 ease-in-out ${
        isOpening ? "opacity-0 scale-110 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/envelope-intro.jpg"
          alt="Düğün Davetiyesi Zarfı"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center text-white space-y-6 transition-all duration-700 ${isOpening ? "opacity-0 translate-y-10" : "animate-fade-in-up"}`}>
        <div className="w-20 h-20 mx-auto border-2 border-white/30 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm animate-pulse-slow">
            <span className="font-serif text-3xl tracking-widest">E&C</span>
        </div>
        
        <div className="space-y-2">
            <p className="font-serif text-2xl md:text-3xl tracking-wide">Özel Bir Davet</p>
            <p className="text-sm md:text-base tracking-[0.2em] uppercase opacity-80">Açmak İçin Dokunun</p>
        </div>
      </div>
    </div>
  );
}
