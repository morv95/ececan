"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["detaylar", "konum", "program", "fotograf-yukle"];
      
      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 400) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "detaylar", label: "Detaylar" },
    { id: "konum", label: "Konum" },
    { id: "program", label: "Program" },
    { id: "fotograf-yukle", label: "Anılar" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl font-bold text-rose-gold tracking-widest hover:scale-105 transition-transform">
          E & C
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm tracking-wide font-medium transition-all duration-300 relative group ${
                activeSection === link.id
                  ? "text-rose-gold"
                  : "text-gray-500 hover:text-rose-gold"
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-rose-gold transition-all duration-300 rounded-full ${activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon Placeholder - keeping it simple for now, or could add a hamburger menu */}
        <div className="md:hidden text-rose-gold">
             {/* Simple mobile links */}
             <div className="flex space-x-3 text-xs">
                {navLinks.map((link) => (
                    <Link key={link.id} href={`#${link.id}`} className={activeSection === link.id ? "font-bold underline" : ""}>
                        {link.label}
                    </Link>
                ))}
             </div>
        </div>
      </div>
    </nav>
  );
}
