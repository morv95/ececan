import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Details from "@/components/Details";
import Map from "@/components/Map";
import Timeline from "@/components/Timeline";
import PhotoUpload from "@/components/PhotoUpload";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Details />
      <Map />
      <Timeline />
      <PhotoUpload />
      <Footer />
    </main>
  );
}
