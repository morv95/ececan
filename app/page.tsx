"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Details from "@/components/Details";
import Map from "@/components/Map";
import Timeline from "@/components/Timeline";
import PhotoUpload from "@/components/PhotoUpload";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  // Lock scroll when intro is visible
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showIntro]);

  return (
    <main className="min-h-screen relative">
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      
      <div className={`transition-opacity duration-1000 ${showIntro ? "opacity-0" : "opacity-100"}`}>
        <Navbar />
        <Hero />
        <Details />
        <Map />
        <Timeline />
        <PhotoUpload />
        <Footer />
      </div>
    </main>
  );
}
