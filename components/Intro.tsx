"use client";

import { useState } from "react";
import Image from "next/image";

export default function Intro({ onComplete }: { onComplete: () => void }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <div 
      onClick={handleClick}
      className={`fixed inset-0 z-[100] cursor-pointer overflow-hidden transition-all duration-1000 ease-in-out ${
        isOpening ? "opacity-0 scale-110 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Image - Crystal Clear */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/envelope-intro.jpg"
          alt="Düğün Davetiyesi Zarfı"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          unoptimized
        />
        {/* Minimal Overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Centered Logo Only */}
      <div className={`absolute inset-0 flex items-center justify-center z-10 transition-all duration-700 ${isOpening ? "opacity-0 translate-y-10" : "animate-fade-in-up"}`}>
        <div className="w-24 h-24 border border-white/40 rounded-full flex items-center justify-center bg-transparent animate-pulse-slow shadow-2xl shadow-black/10">
            <span className="font-serif text-4xl tracking-widest text-white drop-shadow-md">E&C</span>
        </div>
      </div>

      {/* Bottom CTA Text */}
      <div className={`absolute bottom-8 left-0 right-0 z-20 text-center pb-[env(safe-area-inset-bottom)] transition-all duration-700 ${isOpening ? "opacity-0 translate-y-10" : "animate-fade-in-up"}`}>
         <div className="space-y-3 text-white drop-shadow-sm px-6">
            <p className="font-serif text-2xl tracking-wide">Özel Bir Davet</p>
            <p className="text-xs tracking-[0.3em] uppercase opacity-90 font-medium">Açmak İçin Dokunun</p>
            
            {/* Animated Arrow */}
            <div className="pt-2 animate-bounce opacity-70">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mx-auto">
                    <path d="M7 13L12 18L17 13M12 6L12 17" />
                </svg>
            </div>
        </div>
      </div>
    </div>
  );
}
