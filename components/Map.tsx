import { MapPin, ExternalLink } from "lucide-react";

export default function Map() {
  return (
    <section id="konum" className="py-0 relative h-[400px] md:h-[500px] w-full bg-gray-100">
      <iframe 
        width="100%" 
        height="100%" 
        frameBorder="0" 
        scrolling="no" 
        marginHeight={0} 
        marginWidth={0} 
        src="https://maps.google.com/maps?q=Sahil+Bahçe+Davet+Caddebostan&t=&z=15&ie=UTF8&iwloc=&output=embed"
        className="w-full h-full filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
        title="Düğün Konumu"
      ></iframe>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a 
          href="https://maps.google.com/maps?q=Sahil+Bahçe+Davet+Caddebostan" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-all transform hover:scale-105 font-medium text-gray-800"
        >
          <MapPin className="w-5 h-5" />
          <span>Konumu Aç</span>
          <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
    </section>
  );
}
